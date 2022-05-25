<template>
  <WizardStepOne v-if="stepId==1"/>
  <WizardStepTwo v-if="stepId==2"/>
  <WizardStepThree v-if="stepId==3"/>
</template>
<script>

export default {
  name: "WizardPage",
  computed: {
    stepId() {
      return this.$route?.params?.stepId;
    },
  }
};
</script>
