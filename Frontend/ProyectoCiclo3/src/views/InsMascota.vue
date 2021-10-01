<template>
 <div class="container">
    <div class="container text-center">
        <img alt="logo" src="../assets/MascotasVacunadas.jpg">
    </div>
    <Mascota></Mascota>
 </div>
   
</template>

<script>
import Mascota from '../components/Mascota.vue'

export default {
  
  name: 'InsMascota',
  components: {
    Mascota,  
  }
}
</script>
<style lang="scss">
</style>