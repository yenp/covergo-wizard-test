<template>
  <div class="container mx-auto mt-20">
    <div
      class="flex mx-auto bg-slate-200 w-580px min-h-fit py-8 items-center justify-center"
    >
      <div>
        <h1 class="headText text-3xl text-center w-full font-bold mb-6">
          Tell us about yourself
        </h1>

        <form class="form" ref="form" @submit.prevent="nextStepThree">

          <div class="w-260px mx-auto">

          
            <div class="mb-4">
              <label for="name" class="block">Name</label>
              <input
                required
                v-model="dataWizard.name"
                id="name"
                placeholder="Add text"
                class="w-full form-input rounded"
              />
            </div>

            <div class="mb-4">
              <label for="age" class="block">Age</label>
              <input
                required
                type="number"
                min="1"
                id="age"
                v-model="dataWizard.age"
                placeholder="Add age"
                  @change="onAgeChange"
                class="w-full form-input rounded"
              />
            </div>

            <div class="mb-4">
              <label for="whereDoYouLive" class="block"
                >Where do you live</label
              >

              <select
                required
                v-model="dataWizard.countryName"
                id="whereDoYouLive"
                class="w-full rounded"
                @change="onCountryChange"
              >
                <option v-for="(country, i) in countries" :key="i">
                  {{ country.name }}
                </option>
              </select>
            </div>

            <div class="mb-4">
              <div
                class="form-check mb-2"
                v-for="(pack, i) in packages"
                :key="i"
              >
                <input
                  required
                  v-model="dataWizard.packageType"
                  :value="pack.type"
                  @change="onPackageChange"
                  class="align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer mt-1 mr-2"
                  type="radio"
                  name="packageRadio"
                />
                <label class="form-check-label inline-block text-gray-800">
                  {{ pack.type }} {{getExtraText(pack)}}
                </label>
              </div>
            </div>

          </div>
          

          <h1 v-if="dataWizard.premium" class="text-2xl text-center w-full font-bold mb-10 mt-10">
            Your premium is : {{dataWizard.premium}}{{dataWizard.countryObject.currency}}
          </h1>

         <div class="w-48 mx-auto">
           <div class="flex">
            <button
              @click="backStepOne"
              type="button"
              class="w-24 bg-white text-black rounded border border-gray-800 p-2 mr-1"
            >
              Back
            </button>
            <button
              type="submit"
              class="w-24 bg-black hover:bg-slate-700 text-white rounded p-2 ml-1"
            >
              Next
            </button>
          </div>
         </div>
          
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { packages, countries, standardValue} from "../../constants";
import _ from 'lodash';
export default {
  name: "WizardStepTwo",
  data() {
    return {
      standardValue,
      packages,
      countries,
      dataWizard: {...(this.$store.getters["wizard/dataWizard"] || {})}
    };
  },
  
  methods: {
    getExtraText(pack){
      const {age,packageType,countryName,countryObject} = this.dataWizard;
      if(!age || isNaN(age) || !packageType || !countryName){
        return null;
      }
      var percent = (pack.percent - 1)*100;
      var standardPremium = this.standardValue * Number(age) * countryObject.rate;
      var extraPremium = (standardPremium * percent)/100; 
      return percent ? `(+${extraPremium}${countryObject.currency}, ${percent}%)` : null;
    },
    saveDataWizardToStore(){
      this.$store.dispatch("wizard/SetDataWizard", JSON.parse(JSON.stringify(this.dataWizard)));
    },
    nextStepThree(e) {
      this.saveDataWizardToStore();
      const {age} = this.dataWizard;
      if(Number(age)>100){
        return this.$router.push('/age-error');
      }
      this.moveStep(3);
    },
    backStepOne(){
      this.saveDataWizardToStore();
      this.moveStep(1);
    },
    onCountryChange(){
      const countryObject = _.find(this.countries,{name:this.dataWizard.countryName});
      this.dataWizard.countryObject = countryObject;
      this.calculatePremium();
    },
    onPackageChange(){
       const packageObject = _.find(this.packages,{type:this.dataWizard.packageType});
       this.dataWizard.packageObject = packageObject;
       this.calculatePremium();
    },
    onAgeChange(){
       this.calculatePremium();
    },
    calculatePremium() {
      const {age, packageType, countryName, countryObject, packageObject} = this.dataWizard;
      if(isNaN(age) || !packageType || !countryName){
        return;
      }

      this.dataWizard.premium =  this.standardValue * Number(age) * countryObject.rate * packageObject.percent;

      this.saveDataWizardToStore();

    }
  },
};
</script>
