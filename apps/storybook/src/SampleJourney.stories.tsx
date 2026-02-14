// apps/storybook/src/SampleJourney.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { SampleJourney } from '@dn/journeys';

const meta: Meta<typeof SampleJourney> = {
  title: 'Journeys/SampleJourney',
  component: SampleJourney,
};

export default meta;
type Story = StoryObj<typeof SampleJourney>;

export const Default: Story = {};
