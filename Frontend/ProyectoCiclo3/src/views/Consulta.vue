<template>
  <div class="container text-center">
    <div class="container">
    <img class="logo" alt="logo" src="../assets/MascotasVacunadas.jpg">
    
    
    <v-card elevation="2" class="pa-5 ma-5" min-height="500px">
      <h1 class="my-2 text-center">Mis mascotas</h1>
      <v-text-field
            outlined
            label="Buscador"
            append-icon="mdi-magnify"
            @click:append="consultar"
 >        
    </v-text-field>
      <v-row align="center" class="ma-0" justify="center">
        <v-col v-for="mascota in mascotas" :key="mascota._id"
        cols="12"
        sm="6"
        md="4"
        lg="3">
          <Carta :id="mascota._id" :nombreMascota="mascota.nombre_mascota" ultimaFechaV="31/08/2021" descripcion="Vacuna Séxtuple"></Carta>
        </v-col>
        
      </v-row>
    </v-card>
  </div>
  </div>
</template>

<script>
//import Busqueda from '../components/Busqueda.vue'
import Carta from '../components/Carta.vue'
import axios from "axios"

export default {
  name: "Consulta",
  components: {
    //Busqueda,
    Carta  
  },

  data(){
    return{
      mascotas: []
    }
  },

  mounted(){ 
    axios.get("http://localhost:3000/mascota_usuario/" + localStorage.getItem("usuario_id")).then(res =>{
      this.mascotas = res.data
    }).catch(error =>{
      console.log("Error", error)
    })
  },

  methods:{
    consultar(){
      console.log("consulta")
    }
  }
}
</script>

<style lang="scss">
</style>