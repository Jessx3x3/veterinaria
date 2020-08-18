<template>
  <div id="content">
      <b-container id="box">
          <b-row>
              <b-col></b-col>
              <b-col>
                  <b-card>
                    <Login />
                </b-card>
              </b-col>
              <b-col></b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
    components: {
        Login
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
        padding-top: 5%;
    }
</style>