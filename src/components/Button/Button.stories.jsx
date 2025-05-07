import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

// 👇 Each story is just a function that returns JSX
export const Primary = () => <Button label="Click Me" />;
export const Secondary = () => <Button label="Cancel" />;
