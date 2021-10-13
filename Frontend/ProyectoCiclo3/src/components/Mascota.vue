<template ref="Mascota">
  <div class="mascota">
    <v-card id="card" class="mx-auto" width="550">
      <v-card-text>
        <v-form ref="form" class="mx-5">
          <v-text-field
            v-model="nombre"
            label="Nombre de tu mascota"
            outlined
          ></v-text-field>
          <v-row align="center" class="ma-0" >
            <v-text-field
            v-model="edad"
            label="Años"
            outlined
            ></v-text-field>
            <v-text-field
            v-model="meses"
            label="Meses"
            outlined
            ></v-text-field>
          </v-row>
          <v-row align="center" class="ma-auto">
              <v-autocomplete
                v-model="tipo"
                
                :items="tipos"
                label="Tipo de mascota"
                outlined
            ></v-autocomplete>
              <v-autocomplete
                v-model="raza"
                :items="razas"
                Mini
                Pincher
                Samoyedo
                Bulldog
                Sin raza
                San Bernardo
                Coccer Spanic
                label="Raza"
                outlined
              ></v-autocomplete>
          </v-row>
          <v-row align="center" class="ma-0">
          <v-switch
            label="Alerta Notificación"
            color="purple"
            v-model="AlertaNotificacion"
          ></v-switch>
          </v-row>
          <v-text-field
            v-model="ultimavacuna"
            label="Ultima vacuna aplicada"
            outlined
          ></v-text-field>
          <v-row align="center" class="ma-0">
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Fecha de ultima vacuna"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        :active-picker.sync="activePicker"
        :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>
    </v-row> 
      <v-card-actions class="j-center">
        <v-btn color="success" outlined tile text @click="Guardar"> Guardar </v-btn>
      </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>     
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    tipo: null,
    raza: null,
    AlertaNotificacion: true,
    ultimavacuna: "",
    nombre_vacuna: "",
    nombre: "",
    meses: "",
    edad: "",
    activePicker: null,
    date: null,
    menu: false,
    tipos: ["Perro", "Gato"],
    razas: [
     // "mini Pincher",
      "Samoyedo",
      "Bulldog",
      "Sin raza",
      "San Bernardo",
      "Coccer Spanic",
    ],
  }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      Guardar() {
      const datos = {
        nombre_mascota: this.nombre,
        edad_mascota: this.edad,
        meses: this.meses,
        tipo_mascota: this.tipo,
        raza_mascota: this.raza,  
        usuario_id: localStorage.getItem("usuario_id")      
      };
      const vacuna ={
        nombre_vacuna: this.nombre_vacuna,
        fecha_ult_vacuna: this.ultimavacuna,
        notificacion: this.AlertaNotificacion,
      }
      if (this.$refs.form.validate()) {
        axios.post("http://localhost:3000/mascota", datos).then (res =>{
          console.log("mascota registrada");
        }).catch((error)=>{
          console.log("Error")
        })
      }
    },
    },
};
</script>

<style>
.j-center {
  justify-content: center;
}
</style>
