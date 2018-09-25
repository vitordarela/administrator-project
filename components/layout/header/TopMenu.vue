<template>
  <div class="MenuWrapper">
    <i
      class="el-icon-bell el-input__icon MenuWrapper-IconNotification">
    </i> 
    <popover-menu /> 
  </div>
</template>

<style lang="scss" scoped>
 
.MenuWrapper {
    position: relative;
    width: 120px;
    display: inline-block;  

  &-IconNotification {
    font-size: 25px;
    cursor: pointer;
    color: $defaultTextColor;
    position: absolute;
    left: 0;

    &:hover {
      color: $featuredColor;
    }
  }
}

</style>

<script>

import PopoverMenu from '~/components/layout/header/PopoverMenu.vue'

export default {
  components: {
    PopoverMenu,
  } 
}

</script>

