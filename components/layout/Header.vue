<template>
     <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-brand href="#"><font-awesome-icon icon="home" /> Home</b-navbar-brand>
        <b-navbar-brand href="#"><i class="el-icon-date"></i> Reminder</b-navbar-brand>
        
        <b-collapse is-nav id="nav_collapse" >
          <b-navbar-nav class="ml-auto">
            <img src="~/assets/img/logo.png" height="50px" />
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" >
            <b-nav-item-dropdown text="Lang" right >
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using button-content slot -->
              <template slot="button-content">
                <b-img rounded="circle" width="45" height="45" alt="https://placekitten.com/g/30/30"  src="https://placekitten.com/g/30/30" />
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>

      </b-navbar>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  
}
</script>



<style lang="scss" scoped>

.icons i,.icons svg {
   color: #2759AE;
}

.svg {color: blue;}
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .bg-info {
    background-color: #B3C0D1 !important;
     color: #07122273;
}

.navbar-dark .navbar-brand {
   color: #07122273
}

.navbar-dark .navbar-nav .nav-link {
    color: #07122273
}
  
</style>



