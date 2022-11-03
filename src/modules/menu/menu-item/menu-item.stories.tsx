import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MenuItem } from "./menu-item.component";

export default {
  title: "Menu/Menu Item",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const View = Template.bind({});

View.args = {
  imagePath: "/assets/images/cloth.png",
  title: "Худі Name it",
  price: 999,
  size: "M",
};
