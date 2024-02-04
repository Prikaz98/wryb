<template>
  <div>
      <div v-for="c in categories" @click="switchcategory(c)" v-bind:class="[c.id == selectedId ? selected : nonselected]">
       {{c.name}}
       <!--<button @click="removeCategory(c)" style="float:right;margin-right:5px;">x</button>-->
      </div>
  </div>
</template>
<script>
import axios from '../wryb-axios';

export default {
  name : 'TaskCategory',
  props: ['categories'],
  data () {
    return {
      selectedId : null,
      selected : 'element selected',
      nonselected : 'element default'
    }
  },
  methods: {
    switchcategory: function(category) {
      this.$emit('switchcategory', category)
      this.selectedId = category.id
    },
    removeCategory: function(category) {
      axios({
        method: 'delete',
        url : '/category',
        data : { id : category.id }
      }).then((resp) => {
        if(resp.data.error != null){
          alert(resp.data.error)
          return;
        }
        this.categories = this.categories.filter((el) => el.id != resp.data.id)
      })
    }
  }
}
</script>
<style>

.element {
  padding: 10px 0px 10px 10px;
  border-radius: 5px;
  width : 100%;
}

</style>
