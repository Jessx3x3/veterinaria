<template>
  <div>
    <b-avatar src="https://placekitten.com/350/350" size="9rem"></b-avatar>
    <b-form v-if="show"><br>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Ingrese su email"
        ></b-form-input>
      </b-form-group>

      <b-form-group>
          <b-form @submit.stop.prevent v-model="form.password">
            <label for="text-password">Password</label>
            <b-input type="password" id="text-password" placeholder="Ingrese contraeña"></b-input>
          </b-form><br>
      </b-form-group>

      <router-link to="/" tag="button" class="w-24 p-3 mb-1 btn bg-danger text-light">Volver</router-link>
      
      <router-link to="/index" tag="button" class="w-24 p-3 mb-1 btn bg-success text-light">Ingresar</router-link>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>

</style>