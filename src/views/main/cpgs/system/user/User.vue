<template>
  <div class="user">
    <div class="user-search">
      <chh-form v-bind="searchFormConfig" v-model="formData" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import ChhForm from "@/components/common/form"
import { searchFormConfig } from "./config/search"
export default defineComponent({
  name: "User",
  components: {
    ChhForm
  },
  setup() {
    const formData = ref({
      id: "",
      name: "",
      password: "",
      sport: "",
      createTime: ""
    })

    return {
      formData,
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="scss">
.user-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.user-search-item {
  padding: 10px 30px;
  display: flex;
  align-items: center;
}
</style>
