<script>
import axios from "axios";

export default {
  name: "UsersCreate",
  data() {
    return {
      userId: "",
      model: {
        users: {
          id: "",
          userName: "",
          password: "",
          email: "",
        },
      },
    };
  },
  methods: {
    createUser() {
      if (this.isValidForm()){
      axios
        .post("http://192.168.0.126:4000/v1/users/create", this.model.users)
        .then((res) => {
          console.log(res.data);
          alert("User was create successful");
          location.href = "/users";
          this.model.users = {
            id: "",
            userName: "",
            password: "",
            email: "",
          };
        });
    }},
    isValidForm() {
    // Validation rules
    if (!this.model.users.id) {
      alert('ID is required');
      return false;
    }
    if (!this.model.users.userName) {
      alert('Username is required');
      return false;
    }
    if (!this.model.users.password || this.model.users.password.length < 6) {
      alert('Password is required and should be at least 6 characters long');
      return false;
    }
    if (!this.model.users.email || !/.+@.+\..+/.test(this.model.users.email)) {
      alert('Invalid email');
      return false;
    }
    return true;
  },
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add User</h4>
      </div>
      <div class="card-body">
        <div class="mb-3"> <label for="UserName">Id</label>
          <input id="id" name="id" type="number" v-model="model.users.id" class="form-control"/>
        </div>
        <div class="mb-3">
          <label for="UserName">UserName</label>
          <input id="userName" name="userName" type="text" v-model="model.users.userName"
            class="form-control" />
        </div>
        <div class="mb-3">
          <label for="Password">Password</label>
          <input id="Password" name="password" type="text" v-model="model.users.password"
            class="form-control" />
        </div>
        <div class="mb-3">
          <label for="Email">Email</label>
          <input id="Email" name="Email" type="text" v-model="model.users.email"
            class="form-control" required/>
        </div>
        <div class="mb-3">
          <button type="button" @click="createUser" class="btn btn-primary">
            Create User</button
          >&nbsp;

          <RouterLink to="/users" class="btn btn-primary"> Back </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
.card  {
  background-color: aliceblue;
  font-size: medium;

}
</style>