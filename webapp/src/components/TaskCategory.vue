<template>
  <div>
      <div v-for="c in categories" @click="switchcategory(c)" v-bind:class="[c.id == selectedId ? selected : nonselected]">
       {{c.name}}
      </div>
  </div>
</template>
<script>
import axios from '../wryb-axios';

export default {
  name : 'TaskCategory',
  data () {
    return {
      categories : [],
      selectedId : null,
      selected : 'element selected',
      nonselected : 'element default'
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData : function() {
      axios.get("/categories")
        .then((resp) => {
          this.switchcategory(resp.data[0])
          resp.data.forEach((el) => {
            this.categories.push(el)
          })
        })
    },
    switchcategory: function(category) {
      this.$emit('switchcategory', category)
      this.selectedId = category.id
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

.selected {
 background-color: aliceblue;
}

.default {
  background-color : #f0f0f5;
}

</style>
