import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loader from "./Loader";

export default {
  title: "Atoms/Loader",
  component: Loader,
  argTypes: {
    loader: { control: "checkbox" },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  show: true,
};
