<template>
  <gmaps-map>
    <gmaps-marker :position="{ lat: -27, lng: 153 }" />
  </gmaps-map>
</template>

<script>
import { gmapsMap, gmapsMarker } from 'x5-gmaps'

export default {
  components: { gmapsMap, gmapsMarker },
}
</script>

<style>

</style>