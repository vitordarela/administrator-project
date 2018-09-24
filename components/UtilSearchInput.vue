<template>
  <el-autocomplete
    v-model="state4"
    :fetch-suggestions="querySearchAsync"
    placeholder="Search for channels and videos"
    @select="handleSelect"
    class="UtilSearchInput"
  >
    <i
      class="el-icon-search el-input__icon"
      slot="suffix">
    </i>  
  </el-autocomplete>
</template>

<script>
  export default {
    data() {
      return {
        links: [],
        state4: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },      
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }, 
  };
</script>

<style lang="scss">

.UtilSearchInput input {
  border-radius: 20px;
  width: 100%;
  background-color: $mainBackgroundColor;
  border: 1px solid $mainBackgroundColor;
  font-size: 14px;
  text-align: center;
  padding: 25px;
  color: $inactiveTextColor;
}

.UtilSearchInput input:focus,
.UtilSearchInput input:hover {
  border: 1px solid $featuredColor;
  color: $defaultTextColor;
}

.UtilSearchInput .el-input__suffix {
  margin: 0 8px 0 0;
}

</style>
