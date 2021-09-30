import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // mascota: []
  },
  mutations: {
    // setMascota(state, payLoad) {
    //   state.mascota = payLoad;
    // }
  },
  actions: {
    // async getMascota({commit}){
    //   const peticion = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
    //   const data = await peticion.json();
    //   console.log(data);
    //   //commit('setMascotas')
    // }
  },
  modules: {
  }
})
