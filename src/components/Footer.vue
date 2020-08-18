<template>
  <!-- Footer -->
  <mdb-footer color="blue" class="font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="6">
          <h5 class="title">Veterinaria</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, atque obcaecati. A ipsum temporibus, voluptas sint labore unde delectus non aut dolores voluptatem consequuntur omnis nisi reiciendis iure itaque illo.</p>
        </mdb-col>
        <mdb-col sm="6">
          <h5 class="title">Links de interés</h5>
          <ul>
            <li class="list-unstyled"><a href="/blog">Blog</a></li>
            <li class="list-unstyled"><a href="/#contacto">Contáctanos</a></li>
            <li class="list-unstyled"><a href="/#cardServices">Servicios</a></li>
            <li class="list-unstyled"><a href="/#formHour">Reserva Hora</a></li>
            <li class="list-unstyled"><a href="/admin">Administrador</a></li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>
  <!-- Footer -->
</template>
<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>