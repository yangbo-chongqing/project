//功能:服务器程序
//1:引入四个模块
const express = require("express"); //web服务器模块
const mysql = require("mysql");//mysql模块
const session = require("express-session");//session模块
const cors = require("cors");//跨域
//2:创建连接池
var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "web1910",
    port: 3306,
    connectionLimit: 15
})
//3:创建web服务器
var server = express();
//4:配置跨域模块
//4.1:允许程序列表 脚手架
//4.2:每次请求验证
server.use(cors({
    origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
    credentials: true
}))
//5:指定静态资源目录 public
server.use(express.static("public"));
//6:配置session对象
server.use(session({
    secret: "128位安全字符串",//加密条件
    resave: true,//每次请求更新数据
    saveUninitialized: true,//保存初始化数据
}));
//7:为服务器绑定监听端口 4000
server.listen(4000);
console.log("服务器起动.......");

//功能一:用户登录验证
server.get("/login", (req, res) => {
    //1:获取脚手架传递用户名和密码
    var u = req.query.uname;
    var p = req.query.upwd;
    //2:创建sql语法并且将用户名和密码加入
    var sql = "SELECT id FROM xz_login WHERE uname=? AND upwd=md5(?)";
    //3:执行sql语法并且获取返回结果
    pool.query(sql, [u, p], (err, result) => {
        //3.1:如果出现严重错误抛出  
        if (err) throw err;
        //3.2:如果result.length长度为0,表示登录失败
        if (result.length == 0) {
            res.send({ code: -1, msg: "用户名或密码有误" });
        } else {
            //登录成功
            //如果用户登录成功:创建session对象并且将登录凭证uid
            //保存对象中    result=[{id:1}]
            //将当前登录用户id保存session对象中作业:登录凭证
            req.session.uid = result[0].id;
            res.send({ code: 1, msg: "登录成功" })
        }
    });
})
server.get('/project', (req, res) => {
    var sql = 'SELECT * FROM user';
    pool.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})
//测试:你 
//启动服务器  node app.js
//打开浏览器在地址栏输入
//      http://127.0.0.1:4000/login?uname=tom&upwd=123
//      http://127.0.0.1:4000/login?uname=tom&upwd=122

//功能二:显示商品列表-(分页)
//1:GET /product 
server.get("/product", (req, res) => {
    //2:接收参数 页码 一页几行
    var pno = req.query.pno;
    var ps = req.query.pageSize;
    //3:为参数设置默认值  1   20
    if (!pno) { pno = 1 }
    if (!ps) { ps = 20 }
    //4:创建sql语句分页查询商品列表
    var sql = "SELECT lid,lname,price,pic FROM xz_laptop LIMIT ?,?";
    var offset = (pno - 1) * ps;
    ps = parseInt(ps);
    //5:执行sql语句并且将结果发送脚手架
    pool.query(sql, [offset, ps], (err, result) => {
        if (err) throw err;
        res.send({ code: 1, msg: "查询成功", data: result })
    })
})

//测试
//   1:启动node app.js
//   2:http://127.0.0.1:4000/product
//   3:http://127.0.0.1:4000/product?pno=2
// 功能三：将商品添加至购物车
server.get("/addcart", (req, res) => {
    // 1:获取当前登录用户凭证
    var uid = req.session.uid
    // 2：如果当前用户没有登录凭证  输出请登录
    if (!uid) {
        res.send({ code: -2, msg: "请登录" })
        return
    }
    // 3：获取脚手架传递数据 lid，lname，price
    var lid = req.query.lid
    var lname = req.query.lname
    var price = req.query.price
    // 4：创建sql 语句  查询当前用户是否买过商品
    var sql = "select id from xz_cart where uid=? and lid=?"
    // 5：执行sql语句
    pool.query(sql, [uid, lid], (err, result) => {
        // 6：回调函数（钩子函数）
        if (err) throw err;
        // 7:获取查询结果[判断是否购买过此商品]
        if (result.length == 0) {
            // 8：如果没买过 创建 INSERT sql

            var sql = `insert into xz_cart values(null,${uid},'${lname}',${price},1,${uid})`
        } else {

            // 9：如果已购买过  创建UPDATE sql
            var sql = `update xz_cart set count=count+1 where uid=${uid} and lid=${lid}`
        }
        // 10：执行sql
        // 11：返回结果 脚手架
        pool.query(sql, (err, result) => {
            if (err) throw err;
            res.send({ code: 1, msg: "添加成功" })
        })
    })
})
//测试
//1:下载 db02.sql 复制代码 mysql执行
//2:启动node   node app.js
//3:浏览器地址
//  http://127.0.0.1:4000/addcart?lid=1&price=9&lname=aa
//  http://127.0.0.1:4000/login?uname=tom&upwd=123
//  http://127.0.0.1:4000/addcart?lid=1&price=9&lname=aa
//  http://127.0.0.1:4000/addcart?lid=1&price=9&lname=aa
//  http://127.0.0.1:4000/addcart?lid=2&lname=AppleMacBook+Air&price=8268
//  SELECT * FROM xz_cart;
// 功能四：查询指定用户购物车列表
server.get("/findcart", (req, res) => {
    // 1:获取用户登录凭证uid
    var uid = req.session.uid
    // 2：没有uid表示此用户未登录 并发送登录信息
    if (!uid) {
        res.send({ code: -2, msg: "请登录", data: [] })
        return
    }
    // 3：创建sql语句
    var sql = "select id,lid,lname,price,count from xz_cart where uid=?"
    // 4：发送sql语句并且将查询结果返回加脚手架
    pool.query(sql, [uid], (err, result) => {
        if (err) throw err;
        res.send({ code: 1, msg: "查询成功", data: result })
    })
})
// 功能五：删除购物车中一条商品信息
server.get("/del", (req, res) => {
    // 1:获取用户登录凭证
    var uid = req.session.uid
    // 2：如果没有登录凭证 请登录
    if (!uid) {
        res.send({ code: -2, msg: "请登录" })
        return
    }
    // 3：获取脚手架传递数据 id
    var id = req.query.id
    // 4：创建sql语句 依据id删除数据
    var sql = "delete from xz_cart where id=?"
    // 5：执行sql语句获取返回结果
    pool.query(sql, [id, uid], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send({ code: 1, msg: "删除成功" })
        } else {
            res.send({ code: -1, msg: "删除失败" })
        }
    })
    // 6：将结果返回脚手架
})
// 功能六：删除用户指定商品
// 1：接受请求 /delm
server.get("/delm", (req, res) => {
    // 2：获取用户凭证
    var uid = req.session.uid
    // 3：请登录
    if (!uid) {
        res.send({ code: -2, msg: "请登录" })
        return
    }
    // 4：接受参数 id
    var id = req.query.id;
    // 5：创建sql语句执行删除多条记录功能
    var sql = `delete from xz_cart where id in (${id})`
    // 6：判断是否删除成功
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send("删除成功")
        } else {
            res.send("删除失败")
        }
    })
})


