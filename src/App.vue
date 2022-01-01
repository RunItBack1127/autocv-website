<template>
  <div class="pa-alt-wh" id="site--background-container">
    <Background/>
  </div>
  <section class="pa-alt-wh" id="site--submission-form-container">
    <div id="submission-form-container">
      <h1>AutoCV</h1>
      <SubmissionForm/>
    </div>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 16px;
}

#app {
  font-family: 'Radian', sans-serif;
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

#submission-form-container {
  width: 80%;
  max-width: 800px;
}

#submission-form-container h1 {
  font-family: "Radian Bold", sans-serif;
  font-size: 7.5rem;
  line-height: 7.5rem;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2.75rem;
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
  src: url('https://raw.githubusercontent.com/RunItBack1127/autocv-website/main/src/assets/fonts/Radian/Radian.ttf');
  font-family: 'Radian';
}

@font-face {
  src: url('https://raw.githubusercontent.com/RunItBack1127/autocv-website/main/src/assets/fonts/Radian/Radian_Bold.ttf');
  font-family: 'Radian Bold';
}

@font-face {
  src: url('https://raw.githubusercontent.com/RunItBack1127/autocv-website/main/src/assets/fonts/Radian/Radian_Light.ttf');
  font-family: 'Radian Light';
}

@media screen and (max-width: 576px) {
  #submission-form-container h1 {
    font-size: 4rem;
  }
}
</style>
