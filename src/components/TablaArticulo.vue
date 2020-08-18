<template>
  <div>
    <b-table :fields="fields" :items="items" responsive="sm" outlined>
      <template v-slot:cell(title)="data"> 
        <!-- `data.value` is the value after formatted by the Formatter -->
        <a v-b-modal.modal-1 :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">{{ data.value }}</a>
      </template>
    </b-table>
    <Modal />
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
  export default {
    components:{
        Modal
    },
    data() {
      return {
        fields: [
          {
            key: 'title',
            label: 'Nombre',
            formatter: 'fullTitle'
          },
          // A regular column
          'contenido',
         
        ],
        items: [
          { title: { fullTitle: 'Cómo Adoptar: ', subtitle: 'Perros o Gatos' }, contenido: 'Artículo' },
          { title: { fullTitle: 'Vacunas: ', subtitle: 'Animales Domésticos' }, contenido: 'Artículo' },
          { title: { fullTitle: 'Alergias en Primavera: ', subtitle: '¿Cómo prevenir?' }, contenido: 'Artículo' },
          { title: { fullTitle: 'Quemaduras: ', subtitle: '¿Cuándo preocuparse?' }, contenido: 'Artículo' },
          { title: { fullTitle: 'Garrapatas: ', subtitle: '¿En qué época atacan?' }, contenido: 'Artículo' }
        ]
      }
    },
    methods: {
      fullTitle(value) {
        return `${value.fullTitle} ${value.subtitle}`
      }
    }
  }
</script>

<style>

</style>