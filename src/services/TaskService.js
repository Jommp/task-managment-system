import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const Token = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd';

export default {
  getTasks() {
    return apiClient.get('tasks', 
    {
      headers: {
        'Authorization': 'Bearer '+ Token
      }
    })
  },
  postTask(task) {
    task.token = Token
    return apiClient.post('tasks', task, {
      headers: {
        'Authorization': 'Bearer '+ Token
      }
    })
  },

  getTask(task_id) {
    return apiClient.get(`tasks/${task_id}`,{
      headers: {
        'Authorization': 'Bearer '+ Token
      }
    })
  },
  putTask(task) {
    return apiClient.put(`tasks/${task.id}`, task ,{
      headers: {
        'Authorization': 'Bearer '+ Token
      }
    })
  },
  deleteTask(task_id) {
    return apiClient.delete(`tasks/${task_id}`, {
      headers: {
        'Authorization': 'Bearer '+ Token
      }
    })
  }
}

