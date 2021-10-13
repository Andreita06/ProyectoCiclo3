<template>
  <v-card class="mx-auto" max-width="344" border>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{ nombreMascota }}
        </div>
        <v-list-item-title class="mb-1">
          {{ descripcion }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ ultimaFechaV }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-avatar size="125">
        <img src="../assets/MascotasVacunadas.jpg" alt="Mascota" />
      </v-avatar>
    </v-list-item>

    <v-card-actions class="j-center">
      <v-btn color="primary" outlined tile text> Editar </v-btn>
      <v-btn color="error" outlined tile text v-on:click='eliminar'> Eliminar </v-btn>
    </v-card-actions>

    <v-switch
      color="purple"
      v-model="AlertaNotificacion"
      label="Alerta De Notificación"
    ></v-switch>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      AlertaNotificacion: true
    };
  },
//   methods: {},
//   created: () => {
//     //Acceder a las acciones del store
//     store.dispatch("getMascota");
//   },
//   //Propiedad computada
//   computed: {
//     mascota: () => {
//       return store.state.mascota; //Se cargan las tarjetas con la información de las mascotas.
//     },
//   },
// };


  props: {
    nombreMascota: String,
    ultimaFechaV: String,
    descripcion: String,
    id: String
  },
  methods: {
    editar() {
      data={
        //datos a actualizar
      }
      console.log("editar");
       let url = "http://localhost:3000/mascota/" + this.id
       axios.put(url,data).then(res =>{
       console.log(res.data)
       location.reload()
     }).catch(err =>{
       console.log(err)
     })
     this.dialog = false
    },
    
    eliminar() {
     console.log("eliminar");
     let url = "http://localhost:3000/mascota/" + this.id
     axios.delete(url).then(res =>{
       console.log(res.data)
       location.reload()
     }).catch(err =>{
       console.log(err)
     })
     this.dialog = false
    },
  },
};
</script>

<style>
.j-center {
  justify-content: center;
}
</style>