<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Ingresa tu Email"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="name@example.com"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Ingresa tu nombre" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Tu nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Mascota:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.mascota"
          :options="mascotas"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Servicio:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.servicio"
          :options="servicios"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>

    </b-form>
    <!--
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          mascota: null,
          servicio: null
        },
        mascotas: [{ text: 'Selecciona tu mascota', value: null }, 'Aves', 'Exótico', 'Gatos', 'Perros', 'Roedores'],
        servicios: [{ text: 'Selecciona el servicio', value: null }, 'Control Médico', 'Consulta', 'Peluquería', 'Quirurgico', 'Vacunación'],
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
        this.form.name = ''
        this.form.mascota = null
        this.form.servicio = null
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>