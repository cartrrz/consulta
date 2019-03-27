<template>
    <div class=" bus md-layout md-gutter md-alignment-center">
    <div class="md-layout-item  md-large-size-40 md-medium-size-45 md-small-size-50 md-xsmall-size-100">
        <buscador ></buscador>
    </div>
    
    </div>
</template>

<script>
import buscador from "@/components/buscador.vue"
export default {
    components: {
        buscador
    }
}
</script>
<style lang="scss" scoped>
  .bus{
    margin: 30px
}
</style>
