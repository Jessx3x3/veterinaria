<template>
    <div id="content">
        <NavBar />
        <b-container>
            <p class="h3">Blogs</p>
            <b-row>
                <b-col>
                    <CardArticulo />
                </b-col>
                <b-col>
                    <CardArticulo />
                </b-col>
                <b-col>
                    <CardArticulo />
                </b-col>
            </b-row><br>
            <b-row>
                <b-col>
                    <Articulo />
                </b-col>
            </b-row><br>
            <b-row><p class="h2">¿Te gustó el artículo?</p></b-row>
            <b-row><p class="h3">¡Déjanos un comentario!</p></b-row>
            <b-row>
                <b-col>
                    <b-card>
                        <ComentarioForm />
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
                <Footer />
            </b-row>
        </b-container>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CardArticulo from '@/components/CardArticulo.vue'
import Articulo from '@/components/Articulo.vue'
import ComentarioForm from '@/components/ComentarioForm.vue'
import Footer from '@/components/Footer.vue'
export default {
    components:{
        NavBar,
        CardArticulo,
        Articulo,
        ComentarioForm,
        Footer
    }
}
</script>

<style>
    #content{
        background-image: url("../assets/background.png");
    }
    .h3, .h2{
        padding: 2%;
    }
</style>