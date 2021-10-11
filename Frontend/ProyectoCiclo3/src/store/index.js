import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
    mascota: []
  },
  mutations: {
    setUsuarios(state,payLoad){
      state.usuarios = payLoad;
    },
    setMascota(state, payLoad) {
    state.mascota = payLoad;
    }
  },
  actions: {
    async cargarUsusarios({commit}){
      const peticion = await fetch('http://localhost:3000/usuario');
      const data = await peticion.json();
      console.log(data);
      commit('setUsuarios', data);
    },
    async getMascota({commit}){
      const peticion = await fetch('http://localhost:3000/mascota');
      const data = await peticion.json();
      console.log(data);
      commit('setMascotas', data)
    }
  },
  modules: {
  }
})
