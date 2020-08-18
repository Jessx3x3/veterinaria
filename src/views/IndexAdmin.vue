<template>
  <div id="content">
      <b-container >
          <b-row id="nav">
              <b-col>
                  <router-link to="/" tag="button" class="w-24 p-1 mb-1 btn bg-danger text-light">Cerrar Sesión</router-link>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                  <img src="../assets/pig.jpg" alt="">
              </b-col>
          </b-row>
      </b-container>
      <b-container id="box">
          <b-row>
              <b-col>
                  <b-card>
                      <TablaArticulo />
                  </b-card>
              </b-col>
              <b-col>
                  <b-card>
                      <CrearArticulo />
                  </b-card>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import TablaArticulo from '@/components/TablaArticulo.vue'
import CrearArticulo from '@/components/CrearArticulo.vue'
export default {
    components: {
        TablaArticulo,
        CrearArticulo
    }
}
</script>

<style>
    #content{
        background-image: url("../assets/background.png");
        max-width: 1920px;
        height: 920px;
    }
    #box{
        padding-top: 2%;
    }
    #nav{
        padding-top: 2%;
        margin-left: 82%;
    }
</style>