<template>
  <div>
    <div>
      <input
        type="text"
        v-bind:class="[inputIsEmpty ? emptyInputTitle : fillInputTitle]"
        v-model="newTask"
        v-bind:placeholder="placeholderTaskTitle"
        v-on:keyup.enter="submitTask()"
        />
    </div>

    <div class="listTask">
      <label>Overdue:</label><br>
        <div
          v-for="task in tasks"
          v-if="!task.isdone"
          @click="gotoedit(task)"
          v-bind:class="[task.id == selectedId ? selected : nonselected]"
          >
          <input v-model="task.isdone" type="checkbox"/>
          {{task.title}}
          <button @click="toDelete(task)" style="float:right">x</button>
        </div>
    </div>

    <div class="listTask done">
      <div style="margin:2px 0px 5px 0px">
        <button style="float:right" @click="toggleHideDoneTasks">Show done task</button>
        <label>Done:</label><br>
      </div>
      <div v-for="task in tasks" v-if="task.isdone && !isHidedDoneTasks" @click="gotoedit(task)" v-bind:class="[task.id == selectedId ? selected : nonselected]">
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
      placeholderTaskTitle : "+ Add task",
      emptyInputTitle : 'empty input title',
      fillInputTitle : 'input title',
      isHidedDoneTasks: true,
      selectedId: null,
      selected : 'task-row selected',
      nonselected : 'task-row default',
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
      this.placeholderTaskTitle = "+ Add task to \"" + new_.name + "\"";
      this.tasks = []
      this.isHidedDoneTasks = true;
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
      this.selectedId = null
      let taskByCategoryUrl = "/tasks?category=" + this.category.id
      if (this.category.isAll) {
         taskByCategoryUrl = "/tasks"
      }
      axios.get(taskByCategoryUrl)
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
          category: this.category.id
        }
      }).then((resp) => {
        this.tasks.unshift(resp.data)
        this.newTask = null
      })
    },
    gotoedit : function(task) {
      this.$emit('gotoedit', task)
      this.selectedId = task.id
    }
  }
}
</script>

<style>

.selected {
 background-color: aliceblue;
}

.done {
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
  border-width: 1px;
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
