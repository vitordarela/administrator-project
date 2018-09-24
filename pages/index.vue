<template>
  <el-container class="mainWrapper" direction="vertical">
    <base-header />
    <el-main>
      <div>
        <h1 class="title">
          zoome-web
        </h1>
      </div>
    </el-main>
    <base-footer />
  </el-container>
</template>

<script>
import BaseHeader from '~/components/BaseHeader.vue'
import BaseFooter from '~/components/BaseFooter.vue'

export default {
  components: {
    BaseHeader,
    BaseFooter,
  }
}
</script>

<style lang="scss">



</style>

