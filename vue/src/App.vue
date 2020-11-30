<template>
  <DxButton
    text="Show the message"
    type="success"
    stylingMode="outlined"
    :width="200"
    :height="40"
    icon="comment"
    hint="Click to show the message"
    @click="onClick()"
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
    onClick() {
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
