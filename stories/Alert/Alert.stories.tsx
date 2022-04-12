import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "./Alert";

export default {
  title: "Atoms/Alert",
  component: Alert,
  argTypes: {
    show: { control: "checkbox" },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  show: true,
  color: "primary",
  message: "test alert",
};
