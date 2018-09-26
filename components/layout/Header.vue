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
        <search-input class="HeaderWrapper-TopBar-CenterSide-UtilSearchInput"/>
      </el-col>

      <el-col :span="8" class="HeaderWrapper-TopBar-RightSide">
        <!-- Top Menu Component -->
        <top-menu />
      </el-col>

    </el-row>

    <el-row>
      <el-menu :default-active="activeIndex" class="HeaderWrapper-Menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">         
          <nuxt-link to="/">
            <span>HOME</span>
          </nuxt-link>
        </el-menu-item>

        <el-menu-item index="1">         
          <nuxt-link to="/">
            <span>MY CHANNELS</span>
          </nuxt-link>
        </el-menu-item>

        <el-menu-item index="1">         
          <nuxt-link to="/">
            <span>SUBSCRIBES</span>
          </nuxt-link>
        </el-menu-item>

        <el-menu-item index="1">         
          <nuxt-link to="/">
            <span>MY ACCOUNT</span>
          </nuxt-link>
        </el-menu-item>                   
      </el-menu>      
    </el-row>  

    <el-row class="HeaderWrapper-WrapperSwiper">
      <swiper-zoome />
    </el-row>   
    
    <el-row>
    
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
      //max-width: 400px;
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

  &-Menu {
    background: rgba(11, 25, 45, 0.35);
    display: flex;
    justify-content: center;
    border: none;

     .el-menu-item:hover {
      background-color: transparent;
    }
    .el-menu-item span {
      opacity: 0.9;
      font-family: "Avenir";
      font-weight: bold;
      border:2px solid transparent;
      color: $featuredColorSecondary;
      border-radius: 20px;
      padding: 10px 20px;
    }

    .el-menu-item span:hover {
      border-color: $featuredColor;
      color: $featuredColor;
      font-weight: bold;
    }    

    .is-active {
      border: none;
      background-color: transparent;
    }
  }
  &-WrapperSwiper {
    margin: 335px 0 0 0;
  }
}

</style>

<script>
import SearchInput from '~/components/layout/header/SearchInput.vue'
import TopMenu from '~/components/layout/header/TopMenu.vue'
import SwiperZoome from '~/components/layout/header/ZoomeSwiper.vue'

export default {
  components: {
    SearchInput,
    TopMenu,
    SwiperZoome,
  }
}

</script>
