import type { Meta, StoryObj } from '@storybook/react';
import {MySelect} from "./MySelect";
const meta={
    title: 'SelectComponent',
    component: MySelect,
    argTypes: {toSelect: {action: 'selected:'}}
} satisfies Meta<typeof MySelect>
export default meta
type Story = StoryObj<typeof meta>;

export const WithHeader:Story = {
    args: {
        head: 'The head of Select',
        items: ['item1','item2','item3','item4','item5']
    }
}