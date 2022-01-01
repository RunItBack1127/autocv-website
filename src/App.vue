<template>
  <div class="pa-alt-wh" id="site--background-container">
    <Background/>
  </div>
  <section class="pa-alt-wh" id="site--submission-form-container">
    <SubmissionForm/>
  </section>
</template>

<script>
import Background from './components/Background.vue';
import SubmissionForm from './components/SubmissionForm.vue';

export default {
  name: 'App',
  components: {
    Background,
    SubmissionForm
  }
}
</script>

<style>
body {
  overflow: hidden;
}

#app {
  font-family: 'Radian', sans-serif;
  font-size: 16px;
  width: 100vw;
  height: 100vh;
}

#site--background-container {
  z-index: -1;
}

#site--submission-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

/* UTILITY CLASSES */
.pa-alt-wh {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@font-face {
  src: url('https://raw.githubusercontent.com/RunItBack1127/main/src/assets/fonts/Radian/Radian.ttf');
  font-family: 'Radian';
}

@font-face {
  src: url('https://raw.githubusercontent.com/RunItBack1127/main/src/assets/fonts/Radian/Radian_Bold.ttf');
  font-family: 'Radian Bold';
}
</style>
