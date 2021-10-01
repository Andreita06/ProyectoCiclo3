<template>
  <v-container>
    <v-container class="d-flex mascota">
      <v-row>
        <v-col cols="8" sm="8" align-self="center">
          <v-text-field v-model="first" label="Nombre" outlined></v-text-field>
        </v-col>
        <v-col cols="4" sm="4">
          <v-text-field
            v-model="first"
            label="Edad (Meses)"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="6" md="4">
          <v-autocomplete
            v-model="tipo_mas_selec"
            @change="tipoMascota"
            :items="items"
            label="Tipo de mascota"
            outlined
          ></v-autocomplete>
        </v-col>
        <v-col cols="6" md="5">
          <v-autocomplete
            v-model="values"
            change="mostrarRes"
            :items="raza"
            label="Raza"
            outlined
          ></v-autocomplete>
        </v-col>
        <v-col cols="4" md="3">
          <h3>Sufre de alergias</h3>
          
      <v-radio-group id="centrar" v-model="alergias" row>
        <v-radio label="Si" value="true"></v-radio>
        <v-radio label="No" value="false"></v-radio>
      </v-radio-group>
        </v-col>
        <v-col cols="8" sm="12">
        <v-text-field v-model="first" label="Descripción" outlined>
        </v-text-field>
      </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <h2>Fecha de la ultima vacuna</h2>
          <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="first"
            label="Nombre de la ultima vacuna aplicada"
            outlined
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-switch
        color="purple"
        v-model="AlertaNotificacion"
        label="Alerta De Notificación"
      ></v-switch>
    </v-container>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    tipo_mas_selec: "",
    items: ["Perro", "Gato"],
    raza: [],
    values: ["foo", "bar"],
    value: null,
  }),
  methods: {
    tipoMascota() {
      if (this.tipo_mas_selec === "Perro") {
        this.raza = [
          "mini Pincher",
          "Samoyedo",
          "Bulldog",
          "Sin raza",
          "San Bernardo",
          "Coccer Spanic",
        ];
      } else {
        this.raza = ["razagato"];
      }
    },
    mostrarRes() {
      console.log(this.tipoMascota);
    },
  },
};
</script>
<style scoped>
.mascota{
  flex-direction: column;
  max-width: 900px;
  justify-content: center;
}
#centrar{justify-content: center  !important;}
</style>