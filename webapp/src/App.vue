<template>
  <div>
    <button @click="toggleEdit()">Hide Edit Panel</button>
    <button v-if="!isHiddedEdit" @click="toggleEditOrientation()">Toggle split</button>
    <TaskCategory @switchcategory="selectCategory" class="category"/>
    <div class="content">
      <TaskList v-bind:class="[ isHiddedEdit ? fullscreenClass : isVerticalEdit ? taskListSplitVClass : taskListSplitHClass ]" @gotoedit="selectTask" v-bind:category="currentCategory"/>
      <TaskEdit v-if="!isHiddedEdit" v-bind:class="[ isVerticalEdit ? taskEditSplitRightClass : taskEditSplitBottomClass ]" v-bind:task="editedTask"/>
    </div>
  </div>
</template>

<script>
import TaskList from './components/TaskList'
import TaskEdit from './components/TaskEdit'
import TaskCategory from './components/TaskCategory'

export default {
  name: 'App',
  components: {
    TaskList, TaskEdit, TaskCategory
  },
  data(){
    return {
      taskListSplitVClass : 'split',
      taskListSplitHClass : 'splitH top',
      taskEditSplitRightClass: 'split right',
      taskEditSplitBottomClass: 'splitH bottom',
      fullscreenClass : 'fullscreen',
      editedTask : { title : '', desc : '' },
      currentCategory : {},
      isHiddedEdit : false,
      isVerticalEdit : true,
    }
  },
  methods : {
    selectTask: function(task) {
      this.isHiddedEdit = false
      if(this.editedTask.id != null) {
        let newTaskJs = JSON.stringify(this.editedTask)
        fetch(new Request("/task",{"method":"POST", "body":newTaskJs}))
      }
      this.editedTask = task
    },
    toggleEdit: function() {
      if(this.isHiddedEdit) {
        this.isHiddedEdit = false
        return;
      }
      this.isHiddedEdit = true
    },
    selectCategory : function(category) {
      this.currentCategory = category
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

.content {
  margin-left: 15%;
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
  right: 5px;
}

</style>
