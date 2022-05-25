<template>
  <div class="container mx-auto mt-20">
  <div class="flex mx-auto bg-slate-200 w-580px h-480px items-center">
    <div class="w-full text-center">
      <h1 class="headText text-3xl font-bold mb-6">
        Hello There!
      </h1>

      <p class="lineText">Let’s buy some insurance. It is going to take only a few steps</p>

      <button @click="nextStepTwo" class="btnText w-32 bg-black hover:bg-slate-700 text-white rounded p-2 mt-6"> 
        Start
      </button>

    </div>
  </div>
  </div>
</template>
<script>

export default {
  name: "WizardStepOne",
  methods: {
    nextStepTwo(){
      this.moveStep(2)
    }
  }
};
</script>
