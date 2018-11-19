<template>
  <el-container class="mainWrapper" direction="vertical">
    
    <!-- Header -->
    <layout-header />

    <!-- Main -->
    <el-main class="mainContainer">
      <div>
        <h1 >
          Hello Word
        </h1>
      </div>
    </el-main>

    <!-- Footer -->
    <layout-footer />

  </el-container>
</template>

<script>


export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
.mainContainer {
  height: 500px;
}
</style>

