<template>
  <DxButton
    text="Click me!"
    @click="showMessage()"
    styling-mode="outlined"
    type="success"
    icon="comment"
  />
</template>

<script>
import DxButton from 'devextreme-vue/button';
import notify from 'devextreme/ui/notify';

export default {
  name: 'App',
  components: {
    DxButton
  },
  methods: {
    showMessage() {
      notify("The button was clicked");
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
