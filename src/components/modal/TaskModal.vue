<template>
  <b-modal 
    id="task-modal" 
    hide-footer
    centered
    @hidden="hide()"
  >
    <template #modal-title>
      {{ modalTitle }}
    </template>
    <div>
      <TaskForm
        :updateTask="editTask"
        :taskId="task_id"
      />
    </div>
  </b-modal>
</template>

<script>
import TaskForm from '@/components/form/TaskForm.vue'

export default {
  name: 'TaskModal',
  components: {
    TaskForm
  },
  data() {
    return {
      modalTitle: '',
      editTask: false,
      task_id: null
    }
  },
  created(){
    this.$root.$on('taskModalType', (msg) => this.showMsg(msg));
  },
  methods: {
    showMsg(msg){
      if (msg === 'add') {
        this.modalTitle = 'Agregar nueva tarea'
        this.editTask = false
      } else {
        this.modalTitle = 'Tarea: ' + msg.title
        this.editTask = true
        this.task_id = msg.id
      }
    },
    hide() {
      this.$emit('hideModal')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>