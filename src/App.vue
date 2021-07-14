<template>
  <div>
    <p>
      My name is {{ provide.data.developer_name }} so my intials would be :
      {{ initials("Bilal Punjabi") }} <!-- PLUGIN  -->
      {{ $filters.initials("Bilal Punjabi") }} <!-- FILTER -->
    </p>
    <p>
      This is the example of global components like svg-icon :
      <svg-icon icon="hero-solid-star" />
    </p>
    <p>This is the example of custom-directives [v-created] on this star svg:
      <svg-icon
        icon="hero-outline-star"
        v-created="directive_called('created')"
      />
      <p>{{ example3 }}</p>
    </p>
    
  </div>
</template>
<script>
export default {
  name: "App",
  inject: ["provide"],
  data() {
    return {
      example3: "",
    };
  },
  components: {},
  methods: {
    directive_called(name) {
      this.example3 = name;
    },
  },
};
</script>
<style scoped>
</style>