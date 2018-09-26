<template>
  <el-container class="mainWrapper" direction="vertical">
    
    <!-- Header -->
    <layout-header />

    <!-- Main -->
    <el-main class="mainContainer">
      <div>
        <h1 >
          zoome-web
        </h1>
      </div>
    </el-main>

    <!-- Footer -->
    <layout-footer />

  </el-container>
</template>

<script>
import LayoutHeader from '~/components/layout/Header.vue'
import LayoutFooter from '~/components/layout/Footer.vue'

export default {
  components: {
    LayoutHeader,
    LayoutFooter,
  }
}
</script>

<style lang="scss" scoped>
.mainContainer {
  height: 500px;
}
</style>

