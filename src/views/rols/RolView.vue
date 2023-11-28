<script>
import axios from "axios";

export default {
  name: "RolView",
  data() {
    return {
      rols: [],
    };
  },
  methods: {
    getRols() {
      axios
        .get("http://192.168.0.126:4000/v1/rol/getAllObjects")
        .then((res) => {
          this.rols = res.data;
        });
    },
    deleteRol(rolId) {
      if (confirm(`Are yuo sure, you want delete the Rol ${rolId}`)) {
        axios
          .delete(`http://192.168.0.126:4000/v1/rol/delete/${rolId}`)
          .then((res) => {
            this.getRols();
          });
      }
    },
  },
  mounted() {
    this.getRols();
  },
};
</script>

<template>
  <div class="rol">
    <div class="cards">
      <div class="card-header">
        <h4>
          rols
          <RouterLink to="/rol/create" class="btn btn-primary float-end"
            >New Rol</RouterLink
          >
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nro.</th>
              <th>Name.</th>
              <th>Edit.</th>
              <th>Delete.</th>
            </tr>
          </thead>
          <tbody v-if="rols.length > 0">
            <tr v-for="(rol, index) in this.rols" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ rol.name }}</td>
              <td>
                <RouterLink
                  :to="{ path: '/rol/edit/' + rol.id }"
                  class="btn btn-success"
                >
                  Edit Rol
                </RouterLink>
              </td>
              <td>
                <button
                  type="button"
                  @click="deleteRol(rol.id)"
                  class="btn btn-danger"
                >
                  Delete Rol
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">There are not Rols</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>