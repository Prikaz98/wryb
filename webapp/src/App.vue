
<template>
  <div>
    <div>
      <button @click="toggleEdit()">Hide Edit Panel</button>
   </div>
    <TaskList v-bind:class="[ isHiddedEdit ? fullscreenClass : splitMiddleClass ]" @gotoedit="selectTask"/>
    <TaskEdit v-if="!isHiddedEdit" class="split right" v-bind:task="editedTask"/>
  </div>
</template>

<script>
import TaskList from './components/TaskList'
import TaskEdit from './components/TaskEdit'

export default {
  name: 'App',
  components: {
    TaskList, TaskEdit
  },
  data(){
    return {
      splitMiddleClass : 'split middle',
      fullscreenClass : 'fullscreen',
      editedTask : { title : '', desc : '' },
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
    }
  }
}
</script>

<style>

body {
  font: normal 16px "Trebuchet MS", Helvetica, sans-serif;
  margin: 0;
}

.fullscreen {
  margin: auto;
  width: 99%;
  height: 100%;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 15px;
}

.split {
  width: 49%;
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 15px;
}

.middle {
  left: 5px;
}

.right {
  right: 5px;
}

</style>
