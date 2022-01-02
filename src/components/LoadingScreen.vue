<template>
    <div id="loading-screen-container"></div>
</template>

<script>
export default {
    name: 'LoadingScreen'
};
</script>

<style scoped>
#loading-screen-container {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #f00;
  animation: spin 0.5s infinite;
}

@keyframes spin {
  100% {
      transform: rotate(360deg);
  }
}
</style>