<template>
  <!-- Contenedor principal de vista -->
  <!-- -->
  <v-form ref="form">
  <div class="login">
    <v-card id="card" class="mx-auto" width="350">
      <!-- -->
      <h1>INICIO SESIÓN</h1>
      <v-img src="../assets/MascotasVacunadas.jpg" height="180" contain></v-img>
      <!-- -->
      <v-card-text>
        <v-form class="mx-5">
          <v-text-field
            v-model="identificacion"
            label="Usuario"
            placeholder="Número Identificación"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="clave"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            label="Contraseña"
            placeholder="Contraseña"
            outlined
             @click:append="show1 = !show1"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <!-- -->
      <div class="contenedor">
        <!-- -->
        <v-card-actions id="bt1">
          <v-btn depressed color="error" elevation="2" block @click="login"
            >INICIAR SESIÓN</v-btn
          >
        </v-card-actions>
        <!-- -->
        <v-card-actions id="bt1">
          <v-btn depressed color="primary" elevation="2" block @click="registro"
            >REGISTRARME</v-btn
          >
        </v-card-actions>
      </div>
      <!-- -->
      <router-link to="/recuperarContraseña" class="span"
        >¿Olvidaste tu contraseña?</router-link
      >
    </v-card>
  </div>
  </v-form>
</template>

<script>
import axios from "axios";
import store from "../store/index.js";
export default {
  // Para datos
  data: () => {
    return{
      identificacion: "",
      clave: "",
      show1: false,
    // numberr: 0,
      // datos: {}
    } 
    
  },
  // Los diferentes metodos
  methods: {
    // 
    // login() {
    //   console.log("Vereficando credenciales..");
    //   this.$router.push("/consulta");
    // },

    async login() {
      const numberr = parseInt(this.identificacion, 10);
      const datos = {
        id: numberr,
        contrasena: this.clave,
      };
      if (this.$refs.form.validate()) {
        console.log(datos)
        axios.post("http://localhost:3000/login", datos).then (res =>{
          alert("" + res.data.mensaje);          
          
          if (res.data.mensaje != "exito"){
            
            alert("Datos Incorrectos")

          }else{
            alert("Bienvenido")
            console.log("sesion iniciada");
            localStorage.setItem("usuario_id", res.data.data._id);
            this.$router.push("/consulta");
          }
          
        }).catch((error)=>{
          console.log("Error: " + error.message);
          
        })
      }
    },
  
    registro() {
      console.log("Verificando credenciales..");
      this.$router.push("/inscripcion");
    },
  },
  created: ()=>{

  }
};
</script>

<style>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#card {
  height: fit-content;
  justify-content: center;
}
h1 {
  text-align: center;
}

#bt1 {
  justify-content: center;
}
.contenedor {
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 70%;
}
.span {
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  padding: 1.3rem;
  color: blue;
  text-decoration: none;
}
</style>