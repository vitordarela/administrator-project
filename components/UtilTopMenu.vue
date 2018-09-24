<template>
  <div class="MenuWrapper">
    <i
      class="el-icon-bell el-input__icon MenuWrapper-IconNotification">
    </i>       
    <el-popover
      placement="top-start"
      class="MenuWrapper-WrapperPopOver">
        <ul>
          <li>Canal #1</li>
          <li>Canal #2</li>            
        </ul>
        <el-button slot="reference">
          <span  
            class="MenuWrapper-WrapperPopOver-ProfilePhoto"
          ></span>
          <i
            class="el-icon-arrow-down el-input__icon MenuWrapper-WrapperPopOver-Arrow">
          </i>               
        </el-button>
    </el-popover>  
  </div>   
</template>

<style lang="scss">

.MenuWrapper {
    position: relative;
    width: 120px;
    display: inline-block;  

  &-IconNotification {
    font-size: 25px;
    cursor: pointer;
    color: $defaultTextColor;
    position: absolute;
    left: 0
  }

  &-WrapperPopOver {
    display: inline-block;

    &-ProfilePhoto {
      width: 40px;
      height: 40px;
      background-image: url("~/assets/img/profile-example.png");
      border-radius: 100px;
      display: inline-block;  
    }
    
    &-Arrow {
      display: inline-block;
      position: absolute;
      top: 0px;          
    }        
  }

  /* Hook Element UI */
  .el-button {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
  }
}

</style>
