<template>
  <div class="work-window">
    <button @click="toggleCreateCategoryForm()">Category creation</button>

    <CreateCategory v-if="!isHiddedCreateCategoryForm" @newcategory="addNewCategory"/>

    <TaskCategory v-if="!isHiddedCategory" @switchcategory="selectCategory" class="category" v-bind:categories="categories"/>

    <div v-bind:class="content">
      <TaskList v-bind:class="taskListSplitVClass" @gotoedit="selectTask" v-bind:category="currentCategory"/>
      <TaskEdit v-if="!isHiddedEdit" v-bind:class="taskEditSplitRightClass" v-bind:task="editedTask"/>
    </div>
  </div>
</template>

<script>

import axios from './wryb-axios';
import TaskList from './components/TaskList'
import TaskEdit from './components/TaskEdit'
import TaskCategory from './components/TaskCategory'
import CreateCategory from './components/CreateCategory'

export default {
  name: 'App',
  components: {
    TaskList, TaskEdit, TaskCategory, CreateCategory
  },
  data(){
    return {
      taskListSplitVClass : 'split left',
      taskEditSplitRightClass: 'split right',
      content : "content",
      fullscreenClass : 'fullscreen',
      editedTask : { title : '', desc : '' },
      categories : [],
      currentCategory : {},
      isHiddedEdit : false,
      isVerticalEdit : true,
      isHiddedCategory : false,
      isHiddedCreateCategoryForm: true
    }
  },
  mounted() {
    this.fetchData()
  },
  methods : {
    fetchData: function(){
      axios.get("/categories")
        .then((resp) => {
          resp.data.forEach((el) => {
            this.categories.push(el)
          })
        })
    },
    toggleCreateCategoryForm: function() {
      this.isHiddedCreateCategoryForm = !this.isHiddedCreateCategoryForm
    },
    selectTask: function(task) {
      this.isHiddedEdit = false
      if(this.editedTask.id != null) {
        let newTaskJs = JSON.stringify(this.editedTask)
        fetch(new Request("/task",{"method":"POST", "body":newTaskJs}))
      }
      this.editedTask = task
    },
    toggleCategory: function() {
      this.isHiddedCategory = !this.isHiddedCategory
    },
    selectCategory : function(category) {
      this.currentCategory = category
    },
    addNewCategory: function(category){
      this.categories.push(category)
    }
  }
}
</script>

<style>

.work-window {
  margin: 15px 5px 5px 5px;
}

.category {
  margin: 15px 5px 5px 5px;
  height: 100%;
  width: 10%;
  position: fixed;
  z-index: 1;
  left: 0px;
}

.content {
  margin-left: 12%;
}

body {
  font: normal 14px "Trebuchet MS", Helvetica, sans-serif;
  margin: 0;
}

.fullscreen {
  width: 95%;
  height: 100%;
  z-index: 1;
  overflow-x: hidden;
  margin-top : 15px;
}

.split {
  width: 50%;
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  margin-top : 15px;
}

.right {
  width: 36%;
  right: 0px;
  margin-right: 10px;
}

.selected {
 background-color: aliceblue;
}

</style>
