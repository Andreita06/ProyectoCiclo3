<template>
  <div>
    <v-form ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="primernombre"
              :rules="Rules"
              label="Primer Nombre"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="primerapellido"
              :rules="Rules"
              label="Primer Apellido"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="identificacion"
              :rules="Rules"
              label="Número de identificación"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="correo"
              :rules="Rules"
              label="Correo Electrónico"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="clave"
              :rules="Rules"
              label="Contraseña"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="segundonombre"
              label="Segundo Nombre"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="segundoapellido"
              :rules="Rules"
              label="Segundo Apellido"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="dirección"
              label="Dirección de Residencia"
              outlined
            ></v-text-field>
            <v-text-field v-model="celular" label="Celular" outlined>
            </v-text-field>
            <v-text-field
              v-model="contraseña"
              :rules="Rules"
              label="Repetir contraseña"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn block color="red" @click="cancelar">Cancelar</v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn block color="blue" @click="registar">Registrarse</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      valid: true,
      primernombre: "",
      segundonombre: "",
      primerapellido: "",
      segundoapellido: "",
      identificacion: "",
      correo: "",
      clave: "",
      dirección: "",
      celular: "",
      contraseña: "",
      Rules: [(v) => !!v || "El campo debe ser diligenciado"],
      rcontraseñaRules: [(v) => !!v || "El campo debe ser diligenciado"],
    };
  },

  methods: {
    registar() {
      const datos = {
        identificacion: this.identificacion,
        primernombre: this.primernombre,
        primerapellido: this.primerapellido,
        segundonombre: this.segundonombre,
        segundoapellido: this.segundoapellido,
        direccion: this.dirección,
        correo: this.correo,
        celular: this.celular,
        clave: this.clave,
      };
      if (this.$refs.form.validate()) {
        axios.post("http://localhost:3000/usuario", datos).then (res =>{
          console.log("Usuario registrado");
        }).catch((error)=>{
          console.log("Error")
        })
      }
    },
    cancelar() {
      this.$refs.form.reset();
    },
  },
};
</script>