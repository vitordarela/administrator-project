<template>
  <el-container class="mainWrapper" direction="vertical">
    <layout-header />
    <el-main>
      <div>
        <h1 class="title">
          zoome-web
        </h1>
      </div>
    </el-main>
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
