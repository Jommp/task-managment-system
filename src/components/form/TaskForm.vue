<template>
  <b-card>
    <b-form 
      @submit="onSubmit" 
      @reset="onReset" 
      v-if="show"
    >
      <b-form-group
        id="input-group-title"
        label="Titulo *"
        label-for="input-title"
      >
        <b-form-input
          id="input-title"
          v-model="form.title"
          type="text"
          placeholder="Ingresa el titulo de la tarea"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-row>
        <b-col cols="5">
          <b-form-group 
            label="Estatus"
          >
            <b-form-checkbox
              id="checkbox-completed"
              v-model="form.is_completed"
              name="checkbox-completed"
              :value="1"
              :unchecked-value="0"
            >
              Completada
            </b-form-checkbox>
          </b-form-group>
        </b-col>

        <b-col>
          <div>
            <label for="date-datepicker">Fecha</label>
            <b-form-datepicker 
              id="date-datepicker" 
              v-model="form.due_date" 
              placeholder="Seleccione una fecha"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              :min="minDate"
            />
          </div>
        </b-col>
      </b-form-row>

      <b-form-group 
        id="input-group-comments" 
        label="Comentarios" 
        label-for="input-comments"
      >
        <b-form-textarea
          id="input-comments"
          v-model="form.comments"
          placeholder="Escriba sus comentarios"
          size="sm"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group 
        id="input-group-description" 
        label="Descripción" 
        label-for="input-description"
      >
        <b-form-textarea
          id="input-description"
          v-model="form.description"
          placeholder="Escriba una descripción"
          size="sm"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group 
        id="input-group-tags" 
        label="Etiquetas" 
        label-for="input-tags"
      >
        <b-form-tags 
          input-id="input-tags" 
          v-model="form.tags"
          placeholder="Escriba y presione enter para agregar etiqueta"
        ></b-form-tags>
      </b-form-group>

      <div class="d-flex justify-content-between mt-4">
        <b-button 
          type="button" 
          variant="danger"
          @click="$root.$emit('bv::hide::modal', 'task-modal')"
        >
          Cancelar
        </b-button>

        <b-button 
          type="submit" 
          variant="primary" 
          class="ml-auto"
          :disabled="loading ? true : false"
        >
          <b-spinner 
            v-if="loading"
            label="Spinning" 
            small
            class="mr-2"
          />
          {{ updateTask ? 'Actualizar' : 'Guardar'}}
        </b-button>
      </div>
    </b-form>
  </b-card>
</template>

<script>
import TaskService from '@/services/TaskService.js'
import { Toast } from '@/mixins/Toast.js'

export default {
  name: 'TaskForm',
  props: {
    updateTask: {
      type: Boolean,
      default: false
    },
    taskId: {
      type: Number,
      requried: false
    }
  },
  mixins: [Toast],
  data() {
    return {
      form: {
        title: '',
        is_completed: 0,
        due_date: '',
        comments: '',
        description: '',
        tags: []
      },
      show: true,
      loading: false
    }
  },
  created() {
    if(this.updateTask) {
      this.fetchTask(this.taskId)
    }
  },
  computed: {
    minDate(){
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      return today
    }
  },
  methods: {
    async postTask() {
      await TaskService.postTask(this.form)
      .then( () => {
        this.makeToast('Operación exitosa!', 'La tarea sido creada exitosamente', 'success')
        this.loading = false
        this.onReset()
      })
      .catch(error => {
        this.makeToast('Error!', error, 'danger')
        this.loading = false
      })
    },
    async putTask() {
      await TaskService.putTask(this.form)
      .then( () => {
        this.makeToast('Operación exitosa!', 'La tarea ha sido actualizada', 'success')
        this.loading = false
      })
      .catch(error => {
        this.makeToast('Error!', error, 'danger')
        this.loading = false
      })
    },
    async fetchTask(id) {
      await TaskService.getTask(id)
      .then( response => {
        this.form = response.data
      })
      .catch(error => {
        console.log('ERROR: ', error)
      })
    },
    onSubmit(event) {
      event.preventDefault()
      this.loading = true
      if (this.updateTask) {
        this.putTask(this.taskId)
      } else {
        this.postTask()
      }
    },
    onReset(event) {
      if (event) {
        event.preventDefault()
      }
      // Reset our form values
      this.form.title = ''
      this.form.is_completed = 0
      this.form.due_date = ''
      this.form.comments = ''
      this.form.description = ''
      this.form.tags = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>

</style>