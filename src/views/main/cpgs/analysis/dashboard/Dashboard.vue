<template>
  <div class="dashboard">
    <el-row class="top-row" gutter="10">
      <el-col :span="8">
        <chh-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </chh-card>
      </el-col>
      <el-col :span="8">
        <chh-card title="分类商品数量(饼图)"></chh-card>
      </el-col>
      <el-col :span="8">
        <chh-card title="分类商品数量(饼图)"></chh-card>
      </el-col>
    </el-row>
    <el-row gutter="10">
      <el-col :span="12">
        <chh-card title="分类商品数量(饼图)"></chh-card>
      </el-col>
      <el-col :span="12">
        <chh-card title="分类商品数量(饼图)"></chh-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"
/* 组件 */
import ChhCard from "@/components/common/card"
import { PieEchart } from "@/components/content/pageEchart"

export default defineComponent({
  name: "Dashboard",
  components: {
    ChhCard,
    PieEchart
  },
  setup() {
    console.log("dashboard setup")
    const store = useStore()
    store.dispatch("dashboardModule/getDashboardDataAction")

    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    console.log(categoryGoodsCount)
    return {
      categoryGoodsCount
    }
  }
})
</script>

<style scoped>
.top-row {
  margin-bottom: 10px;
}
</style>
