<template>
<div>
  <div v-if="task.id != null">
    <input type="text" placeholder="Title" v-model="task.title" class="title input">
    <textarea cols="30" placeholder="description" rows="10" v-model="task.desc" class="desc input"/>

    {{task.createtime == null ? "" : new Date(task.createtime).toLocaleString()}}
  </div>
  <div v-if="task.id == null" style="margin: 100px 0px 0px 100px">
    <img src="images/select_task.png" alt="select task" width="200" height="200"/>
    <br><label>Click task title to view the derail</label>
  </div>
</div>
</template>

<script>
export default {
  name : 'TaskEdit',
  props: ['task']
}
</script>
