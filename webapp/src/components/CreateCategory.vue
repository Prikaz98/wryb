<template>
  <div>
  <input
    v-model="newCategory"
    type="text"
    placeholder="new category"
    class="input i-category"
    v-on:keyup.enter="createNewCategory()"/>
  </div>
</template>

<script>
import axios from '../wryb-axios';

export default {
  name: 'CreateCategory',
  data(){
    return {
      newCategory: null,
    }
  },
  methods: {
    createNewCategory : function() {
      if(this.newCategory == '' && this.newCategory == null) {
        return;
      }
      let categoryName = this.newCategory
      console.log('create new category ' + categoryName)
      axios({
        method: 'post',
        url: '/category',
        data: { name: categoryName }
      }).then((resp) => {
        this.$emit('newcategory', resp.data)
        this.newCategory = ''
      })
    }
  }
}
</script>

<style>

.i-category {
  margin: 5px 0px 0px 5px;
}

</style>
