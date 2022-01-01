<template>
    <div id="background-display-container"></div>
</template>

<script>
export default {
    name: 'Background'
}
</script>

<style scoped>
#background-display-container {
    background: center / 40% no-repeat url('cover-letter-background.png');
    width: 100%;
    height: 100%;
    opacity: 0.25;
}
</style>