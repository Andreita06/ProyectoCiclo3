<template>
  <div class="container text-center">
    <div class="container">
        <img alt="logo" src="../assets/MascotasVacunadas.jpg" />
      </div>
      <Formulario></Formulario>
  </div>
</template>

<script>
import Formulario from "../components/Formulario.vue";

export default {
  name: "Inscripcion",
  components: {
    Formulario,
  },
};
</script>
<style lang="scss">

</style>