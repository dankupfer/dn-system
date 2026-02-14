// packages/components/src/ActionButton/ActionButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './index';

const meta: Meta<typeof ActionButton> = {
  title: 'Components/ActionButton',
  component: ActionButton,
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: {
    label: 'Continue',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Continue',
    disabled: true,
  },
};
