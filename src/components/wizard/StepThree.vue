<template>
  <div class="container mx-auto mt-20">
    <div
      class="flex mx-auto bg-slate-200 w-580px h-480px py-5 items-center justify-center"
    >
      <div>
        <h1 class="headText text-3xl text-center w-full font-bold mb-6">
          Summary
        </h1>

        <div class="w-full text-center" v-if="dataWizard">
          <p class="mb-3 nameText">Name: {{ dataWizard.name }}</p>

          <p class="mb-3 ageText">Age: {{ dataWizard.age }}</p>

          <p class="mb-3 liveText">
            Where do you live: {{ dataWizard.countryName }}
          </p>

          <p class="mb-3 packageText">Package: {{ dataWizard.packageType }}</p>

          <p class="mb-3 premiumText">
            Premium: {{ dataWizard.premium
            }}{{ dataWizard.countryObject.currency }}
          </p>
        </div>

        <div class="w-48 mx-auto mt-10">
          <div class="flex">
            <button
              @click="backStepTwo"
              type="button"
              class="w-24 bg-white text-black rounded border border-gray-800 p-2 mr-1"
            >
              Back
            </button>
            <button
              @click="buyAction"
              class="w-24 bg-black hover:bg-slate-700 text-white rounded p-2 ml-1"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WizardStepThree",
  data() {
    return {
      dataWizard: this.$store.getters["wizard/dataWizard"],
    };
  },
  mounted() {
    if (!this.dataWizard) {
      this.moveStep(1);
    }
  },
  methods: {
    buyAction() {
      this.$store.dispatch("wizard/RemoveDataWizard");
      this.moveStep(1);
    },
    backStepTwo() {
      this.moveStep(2);
    },
  },
};
</script>
