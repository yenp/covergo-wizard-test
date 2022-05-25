import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import StepThree from "@/components/wizard/StepThree.vue";
import { createStore } from "vuex";
import dataWizard from './mock.json';
describe("StepThree", () => {
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

  let wrapper = shallowMount(StepThree, {
    mixins: [mixins],
    global: {
      plugins: [mockStore]
    }
  });

  wrapper.setData({
    dataWizard
  });

  it("Display Header Text", () => {
    expect(wrapper.find(".headText").text()).toEqual("Summary");
  });

  it("Display Name Text", () => {
    expect(wrapper.find(".nameText").text()).toEqual("Name: Alex");
  });

  it("Display Age Text", () => {
    expect(wrapper.find(".ageText").text()).toEqual("Age: 50");
  });

  it("Display Where do you live Text", () => {
    expect(wrapper.find(".liveText").text()).toEqual("Where do you live: Hong Kong");
  });

  it("Display Package Text", () => {
    expect(wrapper.find(".packageText").text()).toEqual("Package: Standard");
  });

  it("Display Premium Text", () => {
    expect(wrapper.find(".premiumText").text()).toEqual("Premium: 500HKD");
  });

});
