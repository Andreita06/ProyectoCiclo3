<template>
  <v-app>
    <Navegacion></Navegacion>
    <v-main class="container">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navegacion from "./components/Navegacion.vue";
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components:{
    Navegacion
  }
};
</script>
<style>
.app{
  align-items: center;
  text-align: center;
}
</style>
