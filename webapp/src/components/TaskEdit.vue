<template>
<div>
  <div v-if="task.id != null">

    <input
      type="text"
      placeholder="Title"
      v-model="task.title"
      class="title input">

    <textarea
      cols="30"
      placeholder="description"
      rows="10"
      v-model="task.desc"
      class="desc input"/>

    {{task.createtime == null ? "" : new Date(task.createtime).toLocaleString()}}

  </div>

  <div
    v-if="task.id == null"
    style="margin: 100px 0px 0px 100px">

    <img
      src="images/select_task.png"
      alt="select task"
      width="200"
      height="200"/>

    <br>
    <label>Click task title to view the derail</label>

  </div>

  <select
    v-if="task.id != null"
    v-on:change="categoryChanged"
    v-model="selected">

    <option
      v-for="c in categories"
      v-if="!c.isAll">
      {{c.name}}
    </option>

  </select>

</div>
</template>

<script>
export default {
  name : 'TaskEdit',
  props: ['task', 'categories'],
  data () {
    return {
        selected : null
    }
  },
  watch: {
      task: function(newVal, oldVal) {
          if(newVal) {
              let selectedCategory = this.categories.find((c) => c.id == newVal.category)
              if(selectedCategory) {
                  this.selected = selectedCategory.name
                  console.log(this.selected)
              }
          }
      }
  },
  methods: {
      categoryChanged: function(event) {
          let newCategory = this.categories.find((c) => c.name == this.selected)
          if (newCategory) {
              this.task.category = newCategory.id
          }
      }
  }
}
</script>
