<template>
 <el-container>
    <layout-menu />
  <el-container>
     <!-- Header -->
    <layout-header />

    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</template>

<script>
import LayoutHeader from '~/components/layout/Header.vue'
import LayoutFooter from '~/components/layout/Footer.vue'
import LayoutMenu from '~/components/layout/Menu.vue'

export default {
   data() {
      return {
        isCollapse: true
      };
    },
  components: {
     LayoutHeader,
     LayoutFooter,
     LayoutMenu
  }
}
</script>

<style lang="scss" scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

