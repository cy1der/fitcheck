// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Camera from './Camera'

const meta: Meta<typeof Camera> = {
  component: Camera,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Camera>

export const Primary: Story = {}
