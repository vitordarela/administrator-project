<template>
  <el-header class="HeaderWrapper">
    <el-row class="HeaderWrapper-TopBar" >
      
      <el-col :span="8" class="HeaderWrapper-TopBar-LeftSide" >
        <!-- Logo -->
         <nuxt-link to="/">
          <img src="~/assets/img/zoome-logo.svg" alt="Zoome" />
         </nuxt-link>
      </el-col>

      <el-col :span="8" class="HeaderWrapper-TopBar-CenterSide">
        <!-- Search Component -->
        <util-search-input class="HeaderWrapper-TopBar-CenterSide-UtilSearchInput"/>
      </el-col>

      <el-col :span="8" class="HeaderWrapper-TopBar-RightSide">
        <!-- Top Menu Component -->
        <util-top-menu />
      </el-col>

    </el-row>
  </el-header>
</template>

<style lang="scss" scoped>

.HeaderWrapper { 
  background-image: url("~/assets/img/HeaderWrapperBackground-Ronaldinho.png");
  height: 587px !important;
  
  &-TopBar { 
    background-color: rgba(11, 25, 45, 0.7);
    padding: 25px 0;

    &-LeftSide {
      text-align: center;
      min-width: 170px;

      & img {
        max-height: 53px;
        opacity: 1 !important;
      }
    }

    &-CenterSide {
      @media screen and (max-width: 750px) {
        display: none;
      }       
      max-width: 400px;
      padding: 10px 0 0 0;

      &-UtilSearchInput {
        width: 100%;
      }   
    }

    &-RightSide {
      text-align: center;
      padding: 10px 0 0 0;    
      position: absolute;
      right: 0;     
    }
  }
}

</style>

<script>
import UtilSearchInput from '~/components/UtilSearchInput.vue'
import UtilTopMenu from '~/components/UtilTopMenu.vue'

export default {
  components: {
    UtilSearchInput,
    UtilTopMenu,
  }
}
</script>
