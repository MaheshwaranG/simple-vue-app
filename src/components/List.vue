<template>
  <div class="container">
  <div>
  <div class="search-header">
    <select v-model="column" class="select">
      <option :value="null">No Column Filter</option>
      <option v-for="col in cols" :key="col">{{ col }}</option>
    </select>
    <input type="text" class="search" v-model="search" placeholder="Search" />
    </div>
    <table id="list">
    <col width="40px" />
    <col width="40px" />
    <col width="80px" />
    <col width="40px" />
    <col width="40px" />
    <col width="40px" />
      <thead>
        <tr>
          <th v-for="col in cols" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td v-for="col in cols" :key="col">{{ row[col] }}</td>
          <td > <button @click="updateUser(row)">Update </button> </td>
          <td > <button @click="removeUser(row)">Remove</button> </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    msg: String
  },
  data() {
    return {
      search: null,
      column: null,
      list: this.$store.state.usersList
    };
  },
  beforemount() {},
  computed: {
    currentUsersList() {
      return this.$store.state.usersList;
    },
    cols() {
      return this.$store.state.usersList.length >= 1 ? Object.keys(this.$store.state.usersList[0]) : [];
    },
    rows() {
      if (!this.$store.state.usersList.length) {
        return [];
      }

      return this.$store.state.usersList.filter(item => {
        let props =
          this.search && this.column
            ? [item[this.column]]
            : Object.values(item);

        return props.some(
          prop =>
            !this.search ||
            (typeof prop === "string"
              ? prop.includes(this.search)
              : prop.toString(10).includes(this.search))
        );
      });
    }
  },
  methods: {
    removeUser(user){
       this.$store.commit('deleteUser', user.id)
    },
    updateUser(user){
      this.$router.push({ name: 'operation', params: { operation: 'update', id: user.id} });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  align-items: center;
    justify-content: center;
    display: flex;
}
.search-header {
  align-items: center;
    justify-content: center;
    display: flex;
    margin: 24px;
}

.select {
  padding: 8px;
    margin-left: 6px;
    background-color: blue;
    border: none;
    outline: none;
    color: #fff;
}
.search {
  padding: 8px;
    margin-left: 6px;
}

#list {
  width: 650px;
  table-layout: fixed;
}
#list td,
#list th {
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
}

#list tr:nth-child(even) {
  background-color: #f2f2f2;
}

#list tr:hover {
  background-color: #ddd;
}

#list th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
