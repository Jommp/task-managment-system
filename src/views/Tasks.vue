<template>
  <div class="tasks">
    <TaskModal @hideModal="updateTable()"/>
    <Breadcrumb title="Tareas"/>

    <div class="table-options d-flex flex-column flex-xl-row justify-content-between">
      <div class="filters d-flex flex-column flex-lg-row">
        <b-input></b-input>
        <div class="w-100 ml-3">
          <button class="search-btn mt-2 mt-lg-0"><span class="text-uppercase">Buscar</span></button>
          <button class="filter-btn mt-2 mt-lg-0">
            <b-icon 
              icon="filter" 
              variant="light"
              style="width: 16px; height: 16px;"
            /> 
          </button>
        </div>
      </div>
      <div class="other-options mt-3 mt-xl-0">
        <button 
          class="new-btn mt-2 mt-xl-0" 
          @click="showModal('add')"
        >
          Agregar nueva tarea
        </button>
      </div>
    </div>

    <div class="table-wrapper">
      <b-table
        id="tasksTable" 
        ref="tasksTable" 
        hover 
        :items="tasks" 
        :fields="fields"
        table-class="tasks-table"
        responsive
        fill
        class="mb-0"
      >
        <template #cell(status)="data"> 
          <span :class="[data.item.is_completed === 1 ? 'active-status' : 'inactive-status', 'status']">{{data.item.is_completed === 1 ? 'Completada' : 'Pendiente'}}</span>
        </template>

        <template #cell(id)="item">
          <button 
            title="Eliminar"
            @click="showDeleteMsg(item.item)"
          >
            <b-icon 
              icon="trash" 
            /> 
          </button>
          <button 
            title="Ver"
            @click="showModal(item.item)"
          >
            <b-icon 
              icon="eye" 
              :class="item"
            />
          </button>
        </template>
      </b-table>
      <div class="footer-container d-flex  justify-content-between ml-auto">
        <p>Rows per page : 5</p>
        <p>1-10 of 100</p>
        <p>&lt; &gt;</p>
      </div>
    </div>
  </div>
</template>

<script>
import TaskService from '@/services/TaskService.js'
import TaskModal from '@/components/modal/TaskModal.vue'
import { Toast } from '@/mixins/Toast.js'

export default {
  name: 'TaskList',
  components: {
    TaskModal
  },
  mixins: [Toast],
  data() {
    return {
      tasks: [],
      fields: [
        {
          key: 'title',
          label: 'Titulo',
          thStyle: { 'width': '303px'},
          tdClass: 'custom-td'
        },
        {
          key: 'due_date',
          label: 'Fecha de vencimiento',
          thStyle: { 'width': '165px'},
          tdClass: 'custom-td'
        },
        {
          key: 'status',
          label: 'Estatus',
          thStyle: { 'width': '178px'},
          tdClass: 'custom-td'
        },
        {
          key: 'id',
          label: 'Opciones',
          thStyle: { 'width': '118px'},
          tdClass: 'options-btn'
        }
      ]
    }
  },
  created() {
    this.fetchTasks()
  },
  methods: {
    async fetchTasks() {
      await TaskService.getTasks()
      .then( response => {
        this.tasks = response.data
      })
      .catch( error => {
        console.log('ERROR: ', error)
      })
    },
    async deleteTask(value, task) {
      if (value) {
        await TaskService.deleteTask(task.id)
        .then(() => {
          this.updateTable()
          this.makeToast('Operación exitosa!', 'La tarea sido eliminada', 'success')
        })
        .catch( error => {
          this.makeToast('Error!', error, 'danger')
        })
      }
    },
    showModal(type) {
      this.$root.$emit('bv::show::modal', 'task-modal')
      this.$root.$emit('taskModalType', type)
    },
    showDeleteMsg(task) {
      this.boxTwo = ''
      this.$bvModal.msgBoxConfirm('Por favor, confirma que quieres eliminar la tarea: ' + task.title , {
        title: 'Atención!',
        size: 'md',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'Confirmar',
        cancelTitle: 'Cancelar',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
      .then(value => {
        this.deleteTask(value, task)
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateTable() {
      this.fetchTasks(); 
      this.$root.$emit('bv::refresh::table', 'tasksTable'); 
    }
  }
}
</script>

<style scoped>
.table-options {
  margin-bottom: 16px;
}
.table-options button {
  border: none;
  border-radius: 4px;
  font-size: 13px;
  height: 42px;
}
.filters input {
  background-color: #E8EAF0;
  color: #4FB9BB;
  border-radius: 32px;
  opacity: .7;
}
.filters .search-btn {
  background: #E8EAF0;
  margin-right: 24px;
  width: 82px;
}
.filters .search-btn:active {
  background-color: #d1d3d8;
}
.filters .filter-btn {
  background: #4FB9BB;
  width: 42px;
}
.other-options .new-btn {
  background-color: #4FB9BB;
  box-sizing: border-box;
  color: #FFFFFF;
  width: 163px;
}
.other-options .new-btn:focus,
.other-options .new-btn:active {
  background-color: #47A7A8;
}

table .custom-td {
  font-size: 14px !important;
}
.table .status {
  border-radius: 2px;
  font-size: 12px;
  font-weight: bold;
  padding: 4px;
}
.table .active-status {
  background: #E8F5E9;
  color: #4CAF50;
}
.table .inactive-status {
  background: #FFE1E0;
  color: #EB5757;
}
.table .options-btn button{
  background-color: transparent;
  color: #343A40;
  border: 0;
}
.table .options-btn button:hover {
  color: #47A7A8 !important;
}
.footer-container {
  font-size: 12px;
  margin-top: 16px;
  max-width: 350px;
}
.footer-container p {
  font-weight: 400;
  margin: 0;
}
</style>