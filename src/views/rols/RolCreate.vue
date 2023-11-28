<script>
import axios from 'axios'
export default {
    name: "RolCreate",
    data(){
        return{
            rolId:'',
            model:{
                rol:{
                    id: '',
                    name: ''
                }
            }
        }
    },
    methods:{
        createRol(){
            axios.post('http://192.168.0.126:4000/v1/rol/create', this.model.rol)
            .then(res=>{
                console.log(res.data)
                alert('Rol was create successful');
                location.href='/rols'
                this.model.rol={
                    id:'',
                    name:''
                }
            })
        }
    }
}
</script>

<template>
    <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h4>Add User</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="ID">Id</label>
          <input type="text" v-model="model.rol.id" class="form-control">
          </div>
          <div class="mb-3">
            <label for="UserName">UserName</label>
            <input type="text" v-model="model.rol.name" class="form-control">
          </div>
          
          <div class="mb-3">
            <button type="button" @click="createRol" class="btn btn-primary">
              Create User
            </button>&nbsp;
            <RouterLink to="/rols" class="btn btn-primary">
              Back
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>

</style>