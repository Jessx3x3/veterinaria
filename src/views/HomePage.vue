<template>
    <div id="content">
        <NavBar />
        <Carousel />
        <b-container class="cardServices">
            <p class="h3">Services</p>
            <b-row>
                <b-col><Card /></b-col>
                <b-col><Card /></b-col>
                <b-col><Card /></b-col>
                <b-col><Card /></b-col>
            </b-row>
        </b-container>
        <b-container class="formHour">
            <p class="h3">Hora médica</p>
            <b-row>
                <b-col><ReservaForm /></b-col>
                <b-col><img src="../assets/formVet.jpg" alt=""></b-col>
            </b-row>
        </b-container>
        <b-container class="contacto">
            <p class="h3">Contacto</p>
            <b-row>
                <b-col><Map /></b-col>
                <b-col>
                    <b-row>
                        <Card />
                    </b-row>
                    <b-row>
                        <Card />
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
        <Footer />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Carousel from '@/components/Carousel.vue'
import Card from '@/components/Card.vue'
import ReservaForm from '@/components/ReservaForm.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'

export default {
    components:{
        NavBar,
        Carousel,
        Card,
        ReservaForm,
        Map,
        Footer
    }
}
</script>

<style>
    #content{
        background-image: url("../assets/background.png");
    }
    .h3{
        padding: 2%;
    }
</style>