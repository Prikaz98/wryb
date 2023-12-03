<template>
  <div>
    <button @click="toggleEdit()">Hide Edit Panel</button>
    <TaskCategory @switchcategory="selectCategory" class="category"/>
    <div class="content">
      <TaskList v-bind:class="[ isHiddedEdit ? fullscreenClass : splitMiddleClass ]" @gotoedit="selectTask" v-bind:category="currentCategory"/>
      <TaskEdit v-if="!isHiddedEdit" class="split right" v-bind:task="editedTask"/>
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
      splitMiddleClass : 'split',
      fullscreenClass : 'fullscreen',
      editedTask : { title : '', desc : '' },
      currentCategory : {},
      isHiddedEdit : false
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
  margin-left: 10%;
  padding-left: 20px;
}

body {
  font: normal 16px "Trebuchet MS", Helvetica, sans-serif;
  margin: 0;
}

.fullscreen {
  margin: auto;
  width: 98%;
  height: 100%;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 15px;
}

.split {
  width: 43%;
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 15px;
}

.right {
  right: 5px;
}

</style>
