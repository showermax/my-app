import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating'
import {useState} from "react";


const meta = {
    title: 'Rating Stories',
    component: Rating
} satisfies Meta<typeof Rating>
export default meta
type Story = StoryObj<typeof meta>;
export const ZeroRating:Story = {
    args: {
      value: 0
    }
}
export const ThreeStarRating:Story = {
    args: {
      value: 3
    }
}

export const LiveRating = () => {
    const [rating, setRating] = useState(0)
    return <Rating value={rating} onStarClick={setRating}/>
}