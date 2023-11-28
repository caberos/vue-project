<script>
import axios from 'axios'
export default {
    name: "UsersEdit",
    data(){
        return{
            userId:'',
            model:{
                users:{
                    id: '',
                    userName: '',
                    password: '',
                    email: '',
                }
            }
        }
    },
    methods:{
        getUserbyId(userId){
            axios.get(`http://192.168.0.126:4000/v1/users/get/${userId}`).then(res=>{
                this.model.users=res.data;
            })
        },
        editUser(){
            console.log(this.userId)
            axios.put(`http://192.168.0.126:4000/v1/users/update/${this.userId}`, this.model.users).then(res=>{
                alert('Users was edited successful');
                location.href='/users'
                
            })
        }
    },
    mounted(){
        this.userId = this.$route.params.id;
        this.getUserbyId(this.userId);
    }
}
</script>

<template>
    <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Edit User</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="">UserId</label>
          <input type="text" v-model="model.users.id" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">UserName</label>
          <input type="text" v-model="model.users.userName" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Password</label>
          <input type="text" v-model="model.users.password" class="form-control">
        </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input type="text" v-model="model.users.email" class="form-control">
        </div>
        <div class="mb-3">
          <button type="button" @click="editUser" class="btn btn-primary">
            Edit user
          </button>&nbsp;
          <RouterLink to="/users" class="btn btn-primary">
            Back
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
    
</template>
<style scoped>

</style>