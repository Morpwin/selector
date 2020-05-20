<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {

    }
  },
  methods: {

  },
  created() {
    window.addEventListener("beforeunload", () => {     
      sessionStorage.setItem("events", JSON.stringify(this.$store.state.events))
    })
    if(sessionStorage.getItem("events") ) {
      console.log(JSON.parse(sessionStorage.getItem("events")))
      this.$store.dispatch("initEvents", JSON.parse(sessionStorage.getItem("events")))    
      sessionStorage.removeItem("events")
    }
  }
}

</script>
<style lang="less">
  #app {
    width: 100%;
    height: 100%;
  }
  #app .loading {
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      animation: loading 1s ease infinite;
    }
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
