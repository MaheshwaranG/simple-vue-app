<template>
  <div class="container">
    <div v-if="isUpdate" class="action-header">
      Update User Details
    </div>
    <div v-if="isRegister" class="action-header">Register User Details</div>
    <hr class="split" />

    <div class="input-area">
      <label> user Name</label>
      <input type="text" class="search" v-model="user.name" />
    </div>
    <div class="input-area">
      <label> Email Id</label>
      <input type="text" class="search" v-model="user.mailId" />
    </div>
    <div class="input-area">
      <label> Project Name</label>
      <input type="text" class="search" v-model="user.project" />
    </div>
    <div>
      <button v-if="isUpdate" @click="updateAction">Update</button>
      <button v-if="isRegister" @click="registerAction">Register</button>
      <button @click="cancelAction">Cancel</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["operation", "id"],
  data() {
    return {
      isUpdate: this.operation === "update" ? true : false,
      isRegister: this.operation === "register" ? true : false,
      user: {
        id: this.id,
        name: "",
        mailId: "",
        project: ""
      }
    };
  },
  watch: {
    $route(to, from) {
      if (JSON.stringify(to.path) !== JSON.stringify(from.path)) {
        this.isUpdate = to.params.operation === "update" ? true : false;
        let isUserChanged =
          to.params.operation === this.operation && this.id !== to.params.id
            ? true
            : false;
        this.isRegister = to.params.operation === "register" ? true : false;
        this.operation = to.params.operation;
        this.id = to.params.id;
        if (this.isRegister) {
          this.user = {
            id: this.id,
            name: "",
            mailId: "",
            project: ""
          };
        }
        if (this.isUpdate && isUserChanged) {
          this.$store.state.usersList.forEach(employee => {
            if (employee.id === this.id) {
              this.user = employee;
            }
          });
        }
      }
    }
  },
  beforeMount() {
    this.isRegister =
      this.$route.params.operation === "register" ? true : false;
    this.isUpdate = this.$route.params.operation === "update" ? true : false;
    if (this.isUpdate) {
      this.user = this.$store.state.usersList[this.id];
    }
  },
  computed: {},
  methods: {
    cancelAction() {
      this.$router.push({ name: "home" });
    },
    updateAction() {
      this.$store.commit("editUser", this.user.id, this.user);
      this.$router.push({ name: "home" });
    },
    registerAction() {
      this.$store.commit("addUsers", this.user);
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 8px;
}
.action-header {
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 16px;
  font-size: large;
  color: blue;
}

button {
  padding: 8px;
  margin-left: 6px;
  background-color: blue;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
}

.split {
  background-color: green;
  height: 2px;
  width: 68%;
}

input {
  padding: 8px;
  margin-left: 6px;
}
.input-area {
  width: 80%;
  margin: 6px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
