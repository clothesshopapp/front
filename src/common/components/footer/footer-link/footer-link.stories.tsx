
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FooterLink } from "./footer-link.component";




export default {
  title: "Common/Footer Link",
  component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
    <ul>
    <FooterLink {...args} />
    </ul>
);


export const View = Template.bind({});
View.args = {
    href:"mailto:info@clothesshop",
    children:"mailto:info@clothesshop"
  };
  
