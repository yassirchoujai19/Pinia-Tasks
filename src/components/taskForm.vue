<template>
<form @submit.prevent="handleSubmit">
    <input type="text" placeholder="i need to ..." v-model="NewTask" />

    <button>Add Task</button>
</form>

</template>

<script>
import { useTaskStore } from '@/stores/taskStore';
import { ref } from 'vue'
    export default {
     setup(){
        const taskStore = useTaskStore()
        const NewTask = ref('')
        const handleSubmit = () => {
            if(NewTask.value.length > 0){
                taskStore.addTask({
                    id: Math.floor(Math.random() * 1000),
                    title: NewTask.value,
                    isFav: false
                })
                NewTask.value = ''
            }
        }
        return {handleSubmit, NewTask}
     }  
    }
</script>