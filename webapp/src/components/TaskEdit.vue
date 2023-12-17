<template>
  <div>
    Create time: {{new Date(task.createtime).toLocaleString()}}
    <input type="text" placeholder="edit task" v-model="task.title" class="title input">
    <textarea cols="30" placeholder="description" rows="10" v-model="task.desc" class="desc input"/>
  </div>
</template>

<script>
export default {
  name : 'TaskEdit',
  props: ['task']
}
</script>
