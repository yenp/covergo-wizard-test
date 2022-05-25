<template>
  <div class="container mx-auto mt-20">
    <div
      class="flex mx-auto bg-slate-200 w-580px h-480px py-5 items-center justify-center"
    >
      <div>
        <h1 class="headText text-3xl text-center w-full font-bold mb-6">
          Ooops
        </h1>

        <div class="w-full text-center">
          <p class="lineText1">Your age is over our accepted limit</p>
          <p class="lineText2">We are sorry but we canot insure you now</p>
        </div>

        <div class="w-40 mx-auto mt-10">
          <button
            @click="backStepTwo"
            class="btnText w-full bg-black hover:bg-slate-700 text-white rounded p-2 ml-1"
          >
            Ok :(
          </button>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "WizardAgeError",
  methods: {
    backStepTwo() {
      this.moveStep(2);
    },
  },
};
</script>
