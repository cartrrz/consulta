<template>
  <div>
    <form action>
      
      <md-card>
        <md-card-header>
          <div class="md-title">Buscador de Militantes</div>
        </md-card-header>
        <md-card-content>
          <md-field>
            <label>Documento de Identidad</label>
            <md-input v-model="documento"></md-input>
          </md-field>
        </md-card-content>
        <md-card-actions>
          <md-button>Buscar</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documento: null
    };
  }
};
</script>

<style scoped>
  
</style>
