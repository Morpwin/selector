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
<style scoped>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
