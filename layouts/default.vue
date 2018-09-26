<template>
  <el-container class="mainWrapper">
    <el-container class="mainWrapper-nuxtWrapper">
      <nuxt />
    </el-container>  
   </el-container>   
</template>

<style lang="scss" scoped>
.mainWrapper {
  &-nuxtWrapper {
    max-width: 1400px;
    background: $mainBackgroundColorSecondary;         
  }
  justify-content: center;
  background: $mainBackgroundColorSecondary;
}
</style>



