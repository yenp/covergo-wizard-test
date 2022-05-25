import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import AgeError from "@/components/wizard/AgeError.vue";

describe("AgeError", () => {
  it("Display Header Text", () => {
    const wrapper = shallowMount(AgeError);
    expect(wrapper.find(".headText").text()).toEqual("Ooops");
  });

  it("Display Text 1", () => {
    const wrapper = shallowMount(AgeError);
    expect(wrapper.find(".lineText1").text()).toEqual(
      "Your age is over our accepted limit"
    );
  });

  it("Display Text 2", () => {
    const wrapper = shallowMount(AgeError);
    expect(wrapper.find(".lineText2").text()).toEqual(
      "We are sorry but we canot insure you now"
    );
  });

  it("Display Button Text", () => {
    const wrapper = shallowMount(AgeError);
    expect(wrapper.find(".btnText").text()).toEqual("Ok :(");
  });
});
