<template>
 <el-container>
    <layout-menu />
  <el-container>
     <!-- Header -->
    <layout-header />

    <el-main>
      <el-row>
         <el-col>
        <b-card-group deck
                      class="mb-3">
            <b-card bg-variant="primary"
                    text-variant="white"
                    header="Primary"
                    class="text-center">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card bg-variant="secondary"
                    text-variant="white"
                    header="Secondary"
                    class="text-center">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card bg-variant="success"
                    text-variant="white"
                    header="Success"
                    class="text-center">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card bg-variant="success"
                    text-variant="white"
                    header="Success"
                    class="text-center">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
            <b-card bg-variant="success"
                    text-variant="white"
                    header="Success"
                    class="text-center">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </b-card>
        </b-card-group>
        </el-col>
      </el-row>
      
    </el-main>
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
        isCollapse: true,

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

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

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


</style>

