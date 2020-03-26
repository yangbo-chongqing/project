<template>
  <div class="ta">
    <Table ref="selection" :columns="columns4" :data="data1"></Table>
  </div>
</template>
<script>
import { pic } from "./pic.vue";
export default {
  props: {
    pic
  },
  data() {
    return {
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "歌曲",
          key: "name"
        },
        {
          title: "歌手",
          key: "age"
        },
        {
          title: "时长",
          key: "address"
        }
      ],
      data1: [
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        },
        {
          name: "解脱 (天赐的声音)",
          age: "胡彦斌/Lil Ghost小鬼",
          address: "05:47 ",
          date: "2016-10-03"
        }
      ]
    };
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    }
  }
};
</script>
<style  scoped>
.ta {
  width: 100%;
}
</style>