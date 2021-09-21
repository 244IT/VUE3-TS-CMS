<template>
  <div class="dashboard">
    <!-- 顶部数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in goodsCount" :key="item.name">
        <el-col :span="6">
          <statistic-panel :panelData="item"></statistic-panel>
        </el-col>
      </template>

      <!-- <el-col :span="6">
        <chh-card title="商品总收藏"> 22 </chh-card>
      </el-col>
      <el-col :span="6">
        <chh-card title="商品总库存"> 33 </chh-card>
      </el-col>
      <el-col :span="6">
        <chh-card title="商品总销售额"> 33 </chh-card>
      </el-col> -->
    </el-row>

    <!-- 中间图表 -->
    <el-row class="top-row" :gutter="10">
      <el-col :span="8">
        <chh-card title="数据统计">
          <pie-echart :pieData="goodsCount"></pie-echart>
        </chh-card>
      </el-col>
      <el-col :span="8">
        <chh-card title="全国城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </chh-card>
      </el-col>
      <el-col :span="8">
        <chh-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </chh-card>
      </el-col>
    </el-row>
    <!-- 底部图表 -->
    <el-row :gutter="10">
      <el-col :span="12">
        <chh-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </chh-card>
      </el-col>
      <el-col :span="12">
        <chh-card title="分类商品收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </chh-card>
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
import { RoseEchart } from "@/components/content/pageEchart"
import { LineEchart } from "@/components/content/pageEchart"
import { BarEchart } from "@/components/content/pageEchart"
import { MapEchart } from "@/components/content/pageEchart"
import StatisticPanel from "@/components/content/statisticPanel"

export default defineComponent({
  name: "Dashboard",
  components: {
    ChhCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart,
    StatisticPanel
  },
  setup() {
    console.log("dashboard setup")
    const store = useStore()
    store.dispatch("dashboardModule/getDashboardDataAction")
    /* 饼图 */
    const goodsCount = computed(() => {
      return store.state.dashboardModule.goodsCount.map((item: any) => ({
        name: item.title,
        value: item.number1,
        tips: item.tips
      }))
    })
    /* 饼图和玫瑰图数据（商品库存） */
    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    /* 折线图数据（商品销量） */
    const categoryGoodsSale = computed(() => {
      const { categoryGoodsSale } = store.state.dashboardModule
      return {
        lineData: categoryGoodsSale.map((item: any) => item.goodsCount),
        lineXData: categoryGoodsSale.map((item: any) => item.name)
      }
    })
    /* 柱状图数据（商品收藏量） */
    const categoryGoodsFavor = computed(() => {
      const { categoryGoodsFavor } = store.state.dashboardModule
      return {
        barData: categoryGoodsFavor.map((item: any) => item.goodsFavor),
        barXData: categoryGoodsFavor.map((item: any) => item.name)
      }
    })
    /* 地图数据（地区销量） */
    const addressGoodsSale = computed(() => {
      return store.state.dashboardModule.addressGoodsSale.map((item: any) => ({
        name: item.address,
        value: item.count
      }))
    })
    return {
      goodsCount,
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.top-row {
  margin: 10px 0;
}
</style>
