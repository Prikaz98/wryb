<template>
<div>
  <div
    v-for="c in categories"
    @click="switchcategory(c)"
    @dblclick="editingCatergory(c)">

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
        v-on:keyup.enter="saveEdited(c)"
        class="edited"/>

      <button
        v-if="c.id == editedId"
        @click="removeCategory(c)"
        class="category-remove-button">
        Remove
      </button>

    </div>

  </div>

  <input
    type="button"
    @click="addNewCategory()"
    value="+"
    class="green-button"/>

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
      editedId : null
    }
  },
  methods: {
    saveEdited: function(categoryToStore) {
      if (categoryToStore != null) {
        axios({
            method: 'post',
            url: '/category',
            data: categoryToStore
        }).then((resp) => {
          if(resp.data.error != null){
            alert(resp.data.error)
            return;
          }
          this.$emit('categoryadded', resp.data)
        })
      }

      this.editedId = null;
    },
    switchcategory: function(category) {
      if (this.editedId != category.id) {
        this.editedId = null
      }
      this.$emit('switchcategory', category)
      this.selectedId = category.id
    },
    editingCatergory: function(category) {
      this.editedId = category.id
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
        this.$emit('categoryremoved', category)
      })
    },
    addNewCategory: function() {
       this.categories.push({})
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
  margin:5px 5px 5px 10px;
}

.category-add-button {
  float:right;
  margin: 5px 0px 0px 0px;
}

.edited {
  padding: 5px 5px 5px 5px;
  border-radius: 5px;
  width : 80%;
}

</style>
