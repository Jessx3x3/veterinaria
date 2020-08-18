<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Título del artículo" label-for="input-2">
        <b-form-input
          id="input-1"
          v-model="form.tituloArt"
          required
          placeholder="Ingresa título del artículo"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Subtítulo del artículo" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.subArt"
          required
          placeholder="Ingresa subtítulo del artículo"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Contenido del artículo" label-for="input-2">
        <b-form-textarea
          id="input-3"
          v-model="form.contArt"
          required
          placeholder="Ingresa contenido del artículo"
          
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="danger">Crear</b-button>

    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          tituloArt: '',
          subArt: '',
          contArt: ''
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
        this.form.tituloArt = ''
        this.form.subArt = ''
        this.form.contArt = ''
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>