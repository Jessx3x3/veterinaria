<template>
    <div id="content">
        <NavBar />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
    components:{
        NavBar
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