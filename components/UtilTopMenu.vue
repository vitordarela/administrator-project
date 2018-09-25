<template>
  <div class="MenuWrapper">
    <i
      class="el-icon-bell el-input__icon MenuWrapper-IconNotification">
    </i>       
    <el-popover
      placement="top-start"
      class="MenuWrapper-WrapperPopOver"
      @show="PopOverChannelOpenned=true"
      @hide="PopOverChannelOpenned=false"
      transition="el-fade-in-linear"
      >
        <ul>
          <li>                      
            <span 
              class="MenuWrapper-WrapperPopOver-IconChannel"              
            ></span> 
            <span 
              class="MenuWrapper-WrapperPopOver-Description">
              Channel Three
              </span>                                    
          </li> 
          <li>                      
            <span 
              class="MenuWrapper-WrapperPopOver-IconChannel"              
            ></span> 
            <span 
              class="MenuWrapper-WrapperPopOver-Description">
              Channel Three
              </span>                                    
          </li> 
          <li>                      
            <span 
              class="MenuWrapper-WrapperPopOver-IconChannel"              
            ></span> 
            <span 
              class="MenuWrapper-WrapperPopOver-Description">
              Channel Four
              </span>                                    
          </li> 
          <li>                      
            <span 
              class="MenuWrapper-WrapperPopOver-IconChannel"              
            ></span> 
            <span 
              class="MenuWrapper-WrapperPopOver-Description">
              Channel Five
              </span>                                    
          </li>           
          <li>                      
            <span 
              class="MenuWrapper-WrapperPopOver-IconChannel"              
            ></span> 
            <span 
              class="MenuWrapper-WrapperPopOver-Description">
              Channel Four
              </span>                                    
          </li>    
          <li>
            <i
              class="el-icon-more-outline MenuWrapper-WrapperPopOver-IconMore">
            </i>              
          </li>                                    
        </ul>
        <el-button slot="reference" >
            <span  
              class="MenuWrapper-WrapperPopOver-ProfilePhoto"
              v-bind:class="{ 'MenuWrapper-WrapperPopOver-ProfilePhoto--active': PopOverChannelOpenned }"
            ></span>
            <i
              class="el-icon-arrow-down el-input__icon MenuWrapper-WrapperPopOver-Arrow"
              v-bind:class="{ 'MenuWrapper-WrapperPopOver-Arrow--down': PopOverChannelOpenned }" >
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
    min-width: 50px !important;

    &-ProfilePhoto {
      width: 40px;
      height: 40px;
      border-radius: 100px;
      background-position: center;
      border: 2.5px solid $featuredColorSecondary;
      background-image: url("~/assets/img/profile-example--thumb.png"); 
      transition: border 1s;
      display: inline-block; 
      
      &--active {
        border-color: $featuredColor;
      }   
    }

    &-IconChannel {
      width: 40px;
      height: 40px;
      border-radius: 100px;
      background-position: center;
      border: 2.5px solid $featuredColorSecondary;
      background-image: url("~/assets/img/profile-example--thumb.png");  
    }    

    &-Arrow {
      display: inline-block;
      position: absolute;
      top: 0px;     
      transition: transform 1s;
      
      &--down, 
      &--down:hover {
        transform:rotate(180deg);  
        color: $featuredColor !important;
      }        
      
      &:hover {
        color: $featuredColorSecondary;
      }
    }   
    
    &-Description {
      padding: 0 0 0 8px;  
    }

    &-IconMore {
      color: $featuredColorHighlighted;   
      font-size:27px;
      width: 100%;
      text-align: center;
      line-height: 25px;     
      
      &:hover {        
        color: $featuredColor; 
      }
    }
  }

  /* Hook Element UI Scoped*/
  .el-button {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
  }

}

/* Hook Element UI Component*/
.el-popper {
  border-radius: 20px !important;
  width: 200px;
}
.el-popper span {
  color: #000;
  font-family: $defaultFont;
  display: inline-flex;
  vertical-align: middle;
}

.el-popper li {
  display: flex;
  cursor: pointer;
  font-size: $fontSizeSecondary;
  line-height: 45px;
  text-align: center;
}

.el-popper li .MenuWrapper-WrapperPopOver-IconChannel {
  border: 3px solid $featuredColorSecondary
}

.el-popper li:hover .MenuWrapper-WrapperPopOver-IconChannel {
  border: 3px solid $featuredColor
}

.el-popper li:hover .MenuWrapper-WrapperPopOver-Description {
  color: $featuredColor
}

</style>

<script>
export default {
  data() {
    return {
      PopOverChannelOpenned: false,
    };
  },  
}
</script>

