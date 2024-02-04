<template>
<div>
  <div
    v-for="c in categories"
    @click="switchcategory(c)">

    <div v-if="c.id != editedId"
         v-bind:class="[c.id == selectedId ? selected : nonselected]">
      {{c.name}}
    </div>

    <div v-else
         class="category-editor selected">

      <input
        type="text"
        name="category-name"
        v-model="c.name"
        v-on:keyup.enter="saveEdited()"
        class="edited"/>

      <input
        type="button"
        value="remove"
        @click="removeCategory(c)"
        class="category-remove-button"/>

    </div>

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
      nonselected : 'element default',
      editedId : false
    }
  },
  methods: {
    saveEdited: function() {
      let categoryToStore = this.editedId == null ? null : this.categories.find((c) => c.id == this.editedId)

      if (categoryToStore != null) {
        axios({
            method: 'post',
            url: '/category',
            data: categoryToStore
        })
      }

      this.editedId = null;
    },
    switchcategory: function(category) {
      this.editedId = null;
      if(this.selectedId == category.id) {
          this.editedId = category.id
          return;
      }
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

.category-editor {
  padding: 10px 0px 30px 10px;
  border-radius: 5px;
  width : 100%;
}

.category-remove-button {
  float:right;
  margin:5px 5px 5px 5px;
}

.edited {
  padding: 5px 5px 5px 5px;
  border-radius: 5px;
  width : 80%;
}

</style>
