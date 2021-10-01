<template>
<<<<<<< HEAD
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
        <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3">
          <Carta nombreMascota="Maya" ultimaFechaV="31/08/2021" descripcion="Vacuna Séxtuple"></Carta>
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3">
          <Carta nombreMascota="Maya" ultimaFechaV="31/08/2021" descripcion="Vacuna Séxtuple"></Carta>
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3">
          <Carta nombreMascota="Maya" ultimaFechaV="31/08/2021" descripcion="Vacuna Séxtuple"></Carta>
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3">
          <Carta nombreMascota="Maya" ultimaFechaV="31/08/2021" descripcion="Vacuna Séxtuple"></Carta>
        </v-col>
      </v-row>
    </v-card>
  </div>
  </div>
=======
  <div class="consulta">
    <!-- <Navegacion></Navegacion> -->
    <navegacion />
    <v-app>
      <div class="home">
        <img alt="logo" src="../assets/MascotasVacunadas.jpg" />
      </div>

      <v-text-field
        outlined
        label="Buscador"
        append-icon="mdi-magnify"
        @click:append="consultar"
      >
      </v-text-field>

      <v-card elevation="2" class="pa-5 ma-5" min-height="500px">
        <v-row align="center" class="ma-0" justify="space between">
          <Carta
            nombreMascota="Maya"
            ultimaFechaV="31/08/2021"
            descripcion="Vacuna Séxtuple"
          ></Carta>
          <Carta
            nombreMascota="Coco"
            ultimaFechaV="23/12/2020"
            descripcion="Vacuna triple viral"
          ></Carta>
          <Carta
            nombreMascota="Violeta"
            ultimaFechaV="07/10/2020"
            descripcion="Vacuna Contra la Rabia"
          ></Carta>
        </v-row>
      </v-card>
      
    </v-app>
  </div>
>>>>>>> 968d90448ae5d1ad72be45239efe886d7f416c78
</template>

<script>
//import Busqueda from '../components/Busqueda.vue'
<<<<<<< HEAD
import Carta from '../components/Carta.vue'
=======
import Navegacion from "../components/Navegacion.vue";
import Carta from "../components/Carta.vue";
>>>>>>> 968d90448ae5d1ad72be45239efe886d7f416c78

export default {
  name: "Consulta",
  components: {
    //Busqueda,
<<<<<<< HEAD
    Carta  
  },
  methods:{
    consultar(){
      console.log("consulta")
    }
  }
}
=======
    Navegacion,
    Carta,
  },
};
>>>>>>> 968d90448ae5d1ad72be45239efe886d7f416c78
</script>

<style lang="scss">
</style>