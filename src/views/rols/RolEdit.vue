<script>
import axios from 'axios';

export default {
  name: "RolEdit",
  data() {
    return {
      rolId: "",
      model: {
        rol: {
          id: "",
          name: "",
        },
      },
    };
  },
  methods: {
    getRolbyId(rolId) {
        axios.get(`http://192.168.0.126:4000/v1/rol/get/${rolId}`).then((res) => {
        this.model.rol = res.data;
      });
    },
    editRol() {
        axios.put(`http://192.168.0.126:4000/v1/rol/update/${this.rolId}`,
          this.model.rol
        )
        .then((res) => {
          alert("Rol was edited successful");
          location.href = "/rols";
        });
    },
  },
  mounted() {
    this.rolId = this.$route.params.id;
    this.getRolbyId(this.rolId);
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Edit Rol</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="">RolId</label>
          <input type="text" v-model="model.rol.id" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="">Name</label>
          <input type="text" v-model="model.rol.name" class="form-control" />
        </div>
        <div class="mb-3">
          <button type="button" @click="editRol" class="btn btn-primary">
            Edit rol</button
          >&nbsp;
          <RouterLink to="/rols" class="btn btn-primary"> Back </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>