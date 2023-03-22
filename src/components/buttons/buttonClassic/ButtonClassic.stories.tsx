import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonClassic from "./ButtonClassic";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/Button",
  component: ButtonClassic,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    label: { control: "text" },
    isBold: {
      control: "boolean",
    },
  },
} as ComponentMeta<typeof ButtonClassic>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonClassic> = (args) => (
  <ButtonClassic {...args} />
);

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "HelloWorld",
  backgroundColor: "#eb56bd",
  color: "white",
  isBold: true,
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me !",
  backgroundColor: "#eb56bd",
  color: "white",
  isBold: false,
};
