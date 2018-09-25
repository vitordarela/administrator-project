<template>
  <div>
    <el-popover
      placement="top-start"
      class="WrapperPopOver"
      @show="PopOverChannelOpenned=true"
      @hide="PopOverChannelOpenned=false"
      transition="el-fade-in-linear"
      popper-class="PopOverDialog"
      >
        <ul>
          <li>                      
            <span 
              class="WrapperPopOver-IconChannel"              
            ></span> 
            <span 
              class="WrapperPopOver-Description">
              Channel Three
              </span>                                    
          </li> 
          <li>                      
            <span 
              class="WrapperPopOver-IconChannel"              
            ></span> 
            <span 
              class="WrapperPopOver-Description">
              Channel Three
              </span>                                    
          </li> 
          <li>                      
            <span 
              class="WrapperPopOver-IconChannel"              
            ></span> 
            <span 
              class="WrapperPopOver-Description">
              Channel Four
              </span>                                    
          </li> 
          <li>                      
            <span 
              class="WrapperPopOver-IconChannel"              
            ></span> 
            <span 
              class="WrapperPopOver-Description">
              Channel Five
              </span>                                    
          </li>           
          <li>                      
            <span 
              class="WrapperPopOver-IconChannel"              
            ></span> 
            <span 
              class="WrapperPopOver-Description">
              Channel Four
              </span>                                    
          </li>    
          <li>
            <i
              class="el-icon-more-outline WrapperPopOver-IconMore">
            </i>              
          </li>                                    
        </ul>

        <el-button slot="reference" >
            <span  
              class="WrapperPopOver-ProfilePhoto"
              v-bind:class="{ 'WrapperPopOver-ProfilePhoto--active': PopOverChannelOpenned }"
            ></span>
            <i
              class="el-icon-arrow-down el-input__icon WrapperPopOver-Arrow"
              v-bind:class="{ 'WrapperPopOver-Arrow--down': PopOverChannelOpenned }" >
            </i>                           
        </el-button>
    </el-popover>  
  </div>
</template>

<style lang="scss" scoped>

.WrapperPopOver {
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
    font-size: $fontSizeSecondary;
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

  /* Hook Element UI Scoped*/
  .el-button {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
  }
}

</style>

<style lang="scss">

/* Hook Element UI Component*/
.PopOverDialog {
  border-radius: 20px !important;
  width: 200px;
}

.PopOverDialog span {
  color: #000;
  font-family: $defaultFont;
  display: inline-flex;
  vertical-align: middle;
}

.PopOverDialog li {
  display: flex;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
}

.PopOverDialog li .WrapperPopOver-IconChannel {
  border: 3px solid $featuredColorSecondary;
  margin-top: 5px;
}

.PopOverDialog li:hover .WrapperPopOver-IconChannel {
  border: 3px solid $featuredColor
}

.PopOverDialog li:hover .WrapperPopOver-Description {
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

