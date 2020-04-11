<template>
  <div>
    <div class="header">
      <h4 v-bind:style="{ marginLeft: '8px' }">Project details</h4>
      <div>
        <ul class="links">
          <li>
            <router-link to="/" exact active="isActive" active-class="active"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              exact
              :to="{
                name: 'operation',
                params: {
                  operation: register,
                  id: (Math.random() * 1000).toFixed()
                }
              }"
              active="isActive"
              active-class="active"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      register: "register"
    };
  }
};
</script>

<style>
.header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 2px;
  width: 100%;
  height: 60px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-button {
  outline: none;
  background-color: transparent;
  color: #fff;
  border: 0;
  margin: 4px;
  border-radius: 16px;

  font-size: x-large;
}

.header-button:hover {
  background-color: #fff;
  color: blue;
  cursor: pointer;
}

.links {
  list-style-type: none;
  margin: 8px;
  padding: 0;
}
li,
a {
  display: inline;
  background-color: transparent;
  padding: 14px;
  text-decoration: none;
  color: #fff;
}
li:hover,
a:hover,
.active {
  display: inline;
  background-color: #fff;
  color: blue;
  padding: 14px;
}
</style>
