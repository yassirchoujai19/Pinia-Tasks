<template>
  <main>
    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm/>
    </div>

    <nav class="filter">
      <button @click = "filter = 'all'">All tasks</button>
      <button @click = "filter = 'favs'">Favourite tasks</button>
    </nav>


    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do </p>
      <div v-for="task in taskStore.tasks"> 
        <taskDetails :task="task"/>
      </div> 
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} tasks left to do </p>
      <div v-for="task in taskStore.favs"> 
        <taskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from './stores/taskStore'
import taskDetails from './components/taskDetails.vue'
import { ref } from 'vue'
import TaskForm from './components/taskForm.vue'
  export default {

    components:{taskDetails , TaskForm},
    setup(){
      const taskStore = useTaskStore()  

      taskStore.getTasks()

      const filter = ref('all')
      return {
        taskStore , filter
      }
    }
  }
</script>