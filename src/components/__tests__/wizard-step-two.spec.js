import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import StepTwo from "@/components/wizard/StepTwo.vue";
import { createStore } from "vuex";
import dataWizard from './mock.json';

describe("StepTwo", () => {
  const mockStore = createStore({
    modules: {
      wizard: {
        namespaced: true,
      },
    },
  });

  let mixins = {
    methods: {
      moveStep(step) {
        vi.fn();
      },
    },
  };

  let wrapper = shallowMount(StepTwo, {
    mixins: [mixins],
    global: {
      plugins: [mockStore]
    }
  });

  wrapper.setData({
    dataWizard
  });

  it("Display Header Text", () => {
    expect(wrapper.find('.headText').text()).toEqual('Tell us about yourself')
  });


  it("Test Name Input Value", () => {
    let input = wrapper.find('input#name');
    expect(input.element.value).toBe(dataWizard.name)
  });

  it("Test Age Input Value", () => {
    let input = wrapper.find('input#age');
    expect(Number(input.element.value)).toBe(dataWizard.age)
  });


  it("Test Where Do You Live Select Value", () => {
    let input = wrapper.find('select#whereDoYouLive');
    expect(input.element.value).toBe(dataWizard.countryName)
  });

  it("Test Package Radio Input Value", () => {
    let input = wrapper.find(`input[value=${dataWizard.packageType}]`);
    expect(input.element.checked).toBeTruthy()
  });


  it("Test Call Function calculatePremium()", () => {
    wrapper.vm.calculatePremium()
    expect(wrapper.vm.dataWizard.premium).toBe(dataWizard.premium)
  });

});
