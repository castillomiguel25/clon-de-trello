<template>
  <main>
    <b-navbar toggleable="lg" type="dark" id="tamaño">
      <template>
        <div class="btn-header">
          <router-link to="/"
            ><b-button variant="success">Mis paneles</b-button></router-link
          >
          <template v-if="user">
            <div class="userinfo">
              <img :src="user.photoURL" :alt="user.displayName" />
              <span>{{ user.displayName }}</span>
              <button >Cerrar sesiòn</button>
            </div>
          </template>
          <template v-else>
            <router-link to="/auth" class="ml-2"
              ><b-button class="iniciar" variant="danger">Iniciar sesiòn</b-button></router-link
            >
          </template>
        </div>
      </template>
    </b-navbar>
  </main>
</template>

<script>
export default {

  
  name: "app-header",

  props: {
    user: Object
  }
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
.iniciar{
  margin-top: 5px;
} 
}
.btn-header {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

#tamaño {
  height: 150px;
  background: black;
}

#tamaño a {
  color: white;
}
</style>
