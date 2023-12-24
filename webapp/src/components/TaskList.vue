<template>
  <div>
    <div>
      <input v-bind:class="[inputIsEmpty ? emptyInputTitle : fillInputTitle]" v-model="newTask" type="text" placeholder="task" v-on:keyup.enter="submitTask()"/>
    </div>

    <div class="listTask new">
      <label>Overdue:</label><br>
        <div class="task-row" v-for="task in tasks" v-if="!task.isdone" @click="gotoedit(task)">
          <input v-model="task.isdone" type="checkbox"/>
          {{task.title}}
          <button @click="toDelete(task)" style="float:right">x</button>
        </div>
    </div>

    <div class="listTask done">
      <div style="margin:2px 0px 5px 0px">
        <button style="float:right" @click="toggleHideDoneTasks">Hide tasks</button>
        <label >Done:</label><br>
      </div>
      <div class="task-row" v-for="task in tasks" v-if="task.isdone && !isHidedDoneTasks" @click="gotoedit(task)">
        <input v-model="task.isdone" type="checkbox"/>
        {{task.title}}
        <button @click="toDelete(task)" style="float:right">x</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../wryb-axios';

export default {
  name: 'TaskList',
  props: ['category'],
  data () {
    return {
      emptyInputTitle : 'empty input title',
      fillInputTitle : 'input title',
      isHidedDoneTasks: false,
      inputIsEmpty: true,
      newTask : '',
      tasks: []
    }
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    category: function (new_, old) {
      this.tasks = []
      this.isHidedDoneTasks = false;
      this.$emit('gotoedit', {})
      this.fetchData()
    },
    newTask: function (new_, old) {
      if (new_ == '' || new_ == null) {
        this.inputIsEmpty = true
        return;
      }

      this.inputIsEmpty = false
    }
  },
  created : function() {
    //this.debounceNormalizeTasks = _.debounce(this.normalizeTasks, 500)
  },
  methods: {
    fetchData : function() {
      axios.get("/tasks?category=" + this.category.name)
        .then((resp) => {
          resp.data.forEach((el) => {
            this.tasks.push(el)
          })
        })
    },
    toggleHideDoneTasks : function() {
      this.isHidedDoneTasks = !this.isHidedDoneTasks
    },
    toDelete: function(task) {
      axios({
        method: 'delete',
        url : '/task',
        data : { id : task.id }
      }).then((resp) => {
        this.tasks = this.tasks.filter((el) => el.id != resp.data)
      })
    },
    submitTask: function() {
      let title = this.newTask
      axios({
        method: 'post',
        url: '/task',
        data: {
          title: title,
          isdone: false,
          category: this.category.name
        }
      }).then((resp) => {
        this.tasks.unshift(resp.data)
        this.newTask = null
      })
    },
    gotoedit : function(task) {
      this.$emit('gotoedit', task)
    }
  }
}
</script>

<style>

.new {
 background-color: aliceblue;
}

.done {
 background-color: lightsteelblue;
 color: grey;
}

.done ul {
 text-decoration: line-through
}

.empty {
  color : white;
  background-color : #f0f0f5;
}

.input {
  padding: 5px 0px 5px 5px;
  font-size: medium;
}

.title {
  width: 99%;
  margin: 0px 5px 5px 0px;
  border-radius: 5px;
  border-width: 0px;
}

.desc {
  width: 99%;
  margin: 0px 5px 5px 0px;
  border-radius:5px;
  border-width:1px;
}

.listTask .task-row {
  padding : 2px 2px;
  border-bottom: 1px solid;
}

.task-desc {
  font-size: 13;
  padding-left: 10px;
  color: grey;
}

.task-title {
  font-size: 15;
}

</style>
