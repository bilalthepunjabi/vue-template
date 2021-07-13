<template>
  <div>
    <p>
      My name is Bilal Punjabi so my intials would be :
      {{ initials("Bilal Punjabi") }}
    </p>
    <p>
      This is the example of global components like svg-icon :
      <svg-icon icon="hero-solid-star" />
    </p>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>
<style scoped>
</style>