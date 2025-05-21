<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i 
        class="material-icons trash" 
        :class="{ clicked: isDeleted }"
        @click="handleDelete"
      >
        delete
      </i>
      <i 
        class="material-icons like"
        :class="{ clicked: task.isFav }"
        @click="taskStore.toggleFav(task.id)"
      >
        favorite
      </i>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '@/stores/taskStore';
import { ref } from 'vue';

export default {
  props: ['task'],
  setup(props) {
    const taskStore = useTaskStore();
    const isDeleted = ref(false);

    const handleDelete = () => {
      isDeleted.value = true;
      setTimeout(() => {
        taskStore.deleteTask(props.task.id);
      }, 300); 
    };

    return {
      taskStore,
      isDeleted,
      handleDelete
    };
  }
}
</script>
