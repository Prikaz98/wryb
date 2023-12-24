<template>
  <div>
    <button class="b-managment" @click="toggleCategory()">Hide Category</button>
    <button @click="toggleEdit()">Hide Edit Panel</button>
  <button v-if="!isHiddedEdit" @click="toggleEditOrientation()" style="float:right" >Change orientation</button>
    <button @click="toggleCreateCategoryForm()">Hide category creation</button>

    <CreateCategory v-if="!isHiddedCreateCategoryForm" @newcategory="addNewCategory"/>

    <TaskCategory v-if="!isHiddedCategory" @switchcategory="selectCategory" class="category" v-bind:categories="categories"/>

    <div v-bind:class="[ !isHiddedCategory ? content : withoutcategory]">
      <TaskList v-bind:class="[ isHiddedEdit ? fullscreenClass : isVerticalEdit ? taskListSplitVClass : taskListSplitHClass ]" @gotoedit="selectTask" v-bind:category="currentCategory"/>
      <TaskEdit v-if="!isHiddedEdit" v-bind:class="[ isVerticalEdit ? taskEditSplitRightClass : taskEditSplitBottomClass ]" v-bind:task="editedTask"/>
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
      taskListSplitHClass : 'splitH top',
      taskEditSplitRightClass: 'split right',
      taskEditSplitBottomClass: 'splitH',
      content : "content",
      withoutcategory : "withoutcategory",
      fullscreenClass : 'fullscreen',
      editedTask : { title : '', desc : '' },
      categories : [],
      currentCategory : {},
      isHiddedEdit : true,
      isVerticalEdit : false,
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
            console.log(el)
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
    toggleEdit: function() {
      this.isHiddedEdit = !this.isHiddedEdit
    },
    toggleCategory: function() {
      this.isHiddedCategory = !this.isHiddedCategory
    },
    selectCategory : function(category) {
      this.currentCategory = category
    },
    addNewCategory: function(category){
      console.log(category)
      this.categories.push(category)
    },
    toggleEditOrientation : function() {
      this.isVerticalEdit = !this.isVerticalEdit
    }
  }
}
</script>

<style>

.category {
  margin: 15px 5px 5px 5px;
  height: 100%;
  width: 10%;
  position: fixed;
  z-index: 1;
  left: 0px;
}

.withoutcategory {
  margin-left: 2%;
}

.content {
  margin-left: 13%;
}

body {
  font: normal 16px "Trebuchet MS", Helvetica, sans-serif;
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
  width: 43%;
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  margin-top : 15px;
}


.splitH {
  width: 95%;
  height: 50%;
  z-index: 1;
  overflow-x: hidden;
  margin-top : 15px;
}

.bottom {
  top: 50%;
}

.top {
  height: 350px;
}

.right {
  right: 0px;
}

</style>
