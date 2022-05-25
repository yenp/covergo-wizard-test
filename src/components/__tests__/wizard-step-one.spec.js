import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import StepOne from "@/components/wizard/StepOne.vue";

describe("StepOne", () => {
  it("Display Header Text", () => {
    const wrapper = shallowMount(StepOne);
    expect(wrapper.find('.headText').text()).toEqual('Hello There!')
  });

  it("Display Line Text", () => {
    const wrapper = shallowMount(StepOne);
    expect(wrapper.find('.lineText').text()).toEqual('Let’s buy some insurance. It is going to take only a few steps')
  });

  it("Display Button Text", () => {
    const wrapper = shallowMount(StepOne);
    expect(wrapper.find('.btnText').text()).toEqual('Start')
  });

  
});
