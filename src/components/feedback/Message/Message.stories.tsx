import * as React from "react";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Message } from "src/components/feedback/Message/Message";
import { Button } from "src/components/general/Button/Button";

const meta: Meta<typeof Message> = {
  title: "Aquarium/Feedback/Message",
  component: Message,

  args: {
    children: <Button>Show Message</Button>,
    className: undefined,
    content: "Message content",
    duration: 3,
    icon: undefined,
    key: undefined,
    style: undefined,
    onClick: undefined,
    onClose: undefined,
  },
};
export default meta;


type Story = StoryObj<typeof Message>


/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {};

export const Short: Story = {
  args: {
    duration: 1,
  },
};

export const CustomStyle: Story = {
  args: {
    style: { fontSize: "24px", color: "#959ee6" },
  },
};

export const Clickable: Story = {
  args: {
    onClick: () => alert("Message clicked"),
  },
};