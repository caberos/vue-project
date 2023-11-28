<script>
import axios from 'axios'

export default {
    name: "UsersView",
    data(){
        return{
            users:[]
        }
    },
    methods:{
        getUsers() {
            axios.get('http://192.168.0.126:4000/v1/users/getAllObjects').then( res=>{
                console.log(res.data);
                this.users= res.data;
            })
        },

        deleteUsers(userId){
            if(confirm(`Are yuo sure, you want delete the user ${userId}`)){
                axios.delete(`http://192.168.0.126:4000/v1/users/delete/${userId}`).then(res=>{
                    this.getUsers();
                })
            }
        }
    },
    mounted(){
        this.getUsers();
    }
}
</script>

<template>
    <div class="rol">
        <div class="cards">
            <div class="card-header">
                <h4>rols
                    <RouterLink to="/users/create" class="btn btn-primary float-end">New User</RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>
                                Nro.
                            </th>
                            <th>
                                Id.
                            </th>
                            <th>
                                UserName.
                            </th>
                            <th >
                                Password.
                            </th>
                            <th>
                                Email.
                            </th>
                            <th>
                                Edit User.
                            </th><th>
                                Delete User.
                            </th>
                    
                        </tr>
                    </thead>
                    <tbody v-if="users.length>0">
                    <tr v-for="(user, index) in this.users" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{user.id}}</td>
                        <td>{{user.userName}}</td>
                        <td>{{user.password}}</td>
                        <td>{{user.email}}</td>
                        <td>
                            <RouterLink :to="{path:'/users/edit/'+ user.id }" class="btn btn-success">
                            Edit User
                            </RouterLink>
                        </td>
                        <td>
                            <button type="button" @click="deleteUsers(user.id)" class="btn btn-danger">
                                Delete User
                            </button>
                        </td>
                    </tr>
                    </tbody>
                    <tbody v-else><tr>
                        <td colspan="7"> There are not Users </td>
                    </tr></tbody>
                    
                </table>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>