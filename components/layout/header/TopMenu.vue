<template>
  <div class="MenuWrapper">
    
    <!-- Notification -->
    <el-badge :value="2" :max="15" :hidden="false" class="MenuWrapper-Notification">
      <i
        class="el-icon-bell el-input__icon MenuWrapper-IconNotification">
      </i> 
    </el-badge>

    <!-- PopoverMenu Component -->
    <popover-menu /> 
  </div>
</template>

<style lang="scss" scoped>
 
.MenuWrapper {
    position: relative;
    width: 150px;
    display: inline-block;  

  &-IconNotification {
    font-size: 30px;
    cursor: pointer;
    color: $defaultTextColor;

    &:hover {
      color: $featuredColor;
    }
  }

  &-Notification {
    position: absolute;
    left: 0; 
  }
}
</style>

<style lang="scss">

  .MenuWrapper-Notification .el-badge__content { font-size: 10px; }

</style>


<script>

import PopoverMenu from '~/components/layout/header/PopoverMenu.vue'

export default {
  components: {
    PopoverMenu,
  } 
}

</script>

