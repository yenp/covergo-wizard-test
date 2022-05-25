export default {
  methods: {
    _log(a) {
       console.log(a);
    },
    moveStep(step) {
      this.$router.push('/wizard-page/'+step);
    }
  }
};
