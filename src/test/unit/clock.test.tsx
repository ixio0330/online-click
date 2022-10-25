import React from 'react';
import { render, screen } from '@testing-library/react';
import ClockView from '../../views/clock';

describe('<ClockView />', () => {
  it('현재 시간을 보여준다.', () => {
    render(<ClockView />);

    const now = new Date();
    const clock = screen.getByText('현재 시간', { exact: false });
    expect(clock).toHaveTextContent(now.toLocaleString());
  });
});
