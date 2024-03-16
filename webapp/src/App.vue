<template>
  <div class="work-window">

    <TaskCategory
      v-if="!isHiddedCategory"
      @switchcategory="categorySelected"
      @categoryadded="categoryAdded"
      @categoryremoved="categoryRemoved"
      class="category"
      v-bind:categories="categories"/>

    <div v-bind:class="content">

      <TaskList
        v-bind:class="taskListSplitVClass"
        @gotoedit="selectTask"
        v-bind:category="currentCategory"/>

      <TaskEdit
        v-if="!isHiddedEdit"
        v-bind:class="taskEditSplitRightClass"
        v-bind:task="editedTask"
        v-bind:categories="categories"/>

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
      this.categories = []
      axios.get("/categories")
        .then((resp) => {
          this.categories.push({ id: "all", name: "all", isAll: true })
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
    categorySelected : function(category) {
      this.currentCategory = category
    },
    categoryAdded: function(category){
      this.fetchData()
      //this.categories.push(category)
    },
    categoryRemoved: function(category) {
      this.categories = this.categories.filter((el) => el.id != category.id)
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
  font: normal 14px "Fira Sans", Helvetica, sans-serif;
  margin: 0;
}

input {
  font: normal 14px "Fira Sans", Helvetica, sans-serif;
}

textarea {
  font: normal 14px "Fira Sans", Helvetica, sans-serif;
  border: none;
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
  padding-right: 10px;
}

.selected {
 background-color: aliceblue;
}

.green-button {
  margin-top: 5px;
  appearance: none;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: grey;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 5px;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.green-button:focus:not(:focus-visible):not(.focus-visible) {
  color: white;
  box-shadow: none;
  outline: none;
}

.green-button:hover {
  color: white;
  background-color: #2c974b;
}

.green-button:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.green-button:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.green-button:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

button {
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 2px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 5px;
  list-style: none;
  margin: 0;
  padding: 7px 7px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

</style>
