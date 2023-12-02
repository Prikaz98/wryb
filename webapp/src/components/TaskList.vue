<template>
  <div>

    <div>
  <input v-bind:class="[inputIsEmpty ? emptyInputTitle : fillInputTitle]" v-model="newTask" type="text" placeholder="task" v-on:keyup.enter="submitTask()"/>
    </div>

    <div class="listTask new">
      <label>Overdue:</label><br>
      <ul>
        <div v-for="task in tasks" v-if="!task.isdone" @click="gotoedit(task)">
          <input v-model="task.isdone" type="checkbox"/>
          {{task.title}}
          <button @click="toDelete(task)" style="float:right">x</button>
        </div>
      </ul>
    </div>

    <div class="listTask done">
      <label>Done:</label><br>
      <ul>
          <div v-for="task in tasks" v-if="task.isdone" @click="gotoedit(task)">
            <input v-model="task.isdone" type="checkbox"/>
            {{task.title}}
            <button @click="toDelete(task)" style="float:right">x</button>
          </div>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from '../wryb-axios';

export default {
  name: 'TaskList',
  data () {
    return {
      emptyInputTitle : 'empty input title',
      fillInputTitle : 'input title',
      inputIsEmpty: true,
      newTask : '',
      category : 'inbox',
      tasks: []
    }
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    newTask: function (new_, old) {
      console.log(new_)
      if (new_ == '' || new_ == null) {
        console.log('inputIsEmpty == true')
        this.inputIsEmpty = true
        return;
      }

      console.log('inputIsEmpty == false')
      this.inputIsEmpty = false
    }
  },
  created : function() {
    //this.debounceNormalizeTasks = _.debounce(this.normalizeTasks, 500)
  },
  methods: {
    fetchData : function() {
      axios.get("/tasks?category=" + this.category)
        .then((resp) => {
          resp.data.forEach((el) => {
            this.tasks.push(el)
          })
        })
    },
    toDelete: function(task) {
      console.log('to remove ' + task.id)
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
      console.log(title)
      axios({
        method: 'post',
        url: '/task',
        data: {
          title: title,
          isdone: false,
          category: this.category
        }
      }).then((resp) => {
        this.tasks.unshift(resp.data)
        this.newTask = null
      })
    },
    gotoedit : function(task) {
      console.log("push the event " + task + " gotoedit")
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
}

.done ul {
 text-decoration: line-through
}

.empty {
  color : white;
  background-color : #f0f0f5;
}

.input {
  padding: 5px 5px 5px 5px;
  font-size: medium;
}

.title {
  width: 97%;
  margin:auto;
  border-radius: 5px;
  border-width: 0px;
  margin-bottom: 7px;
}

.desc {
  width: 90%;
  margin: auto;
  border-radius: 5px;
}

.listTask div {
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
