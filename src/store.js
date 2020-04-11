import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 1000,
    usersList: [
      {
        id: 0,
        name: "Kural",
        mailId: "kural@gmail.com",
        project: "React"
      },
      {
        id: 1,
        name: "Simbu",
        mailId: "simbu@gmail.com",
        project: "React"
      },
      {
        id: 2,
        name: "Mahesh",
        mailId: "mahe@gmail.com",
        project: "React"
      },
      {
        id: 3,
        name: "Janani",
        mailId: "jaba@gmail.com",
        project: "React"
      }
    ]
  },
  mutations: {
    addUsers(state, user) {
      try {
        state.usersList = [...this.state.usersList, user];
      } catch (error) {
        console.error(error);
      }
    },

    editUser(state, id, user) {
      try {
        this.usersList = this.state.usersList.map(employee =>
          employee.id === id ? user : employee
        );
      } catch (error) {
        console.error(error);
      }
    },

    deleteUser(state, id) {
      try {
        state.usersList = this.state.usersList.filter(
          employee => employee.id !== id
        );
      } catch (error) {
        console.error(error);
      }
    }
  }
});
