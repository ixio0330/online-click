import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StopwatchView from "../../views/stopwatch";

describe('<StopwatchView />', () => {
  it.only('시간과 시작 버튼을 보여준다.', () => {
    render(<StopwatchView />);

    const timeEl = screen.getByText('00:00.00');
    const startButton = screen.getByRole('button', { name: '시작' });

    expect(timeEl).toBeInTheDocument();
    expect(startButton).toBeInTheDocument();
  });

  it('시작을 누르면 시간 숫자가 올라가고 중지 버튼을 보여준다.', async () => {
    render(<StopwatchView />);

    const timeEl = screen.getByText('00:00.00');
    const startButton = screen.getByRole('button', { name: '시작' });
    await userEvent.click(startButton);

    setTimeout(() => {
      expect(timeEl).toHaveTextContent('00:01');
    }, 1000);

    const stopButton = screen.getByRole('button', { name: '중지' });

    expect(stopButton).toBeInTheDocument();
  });

  it('중지 버튼을 누르면 시간 숫자가 멈추고, 초기화와 시작 버튼을 보여준다.', async () => {
    render(<StopwatchView />);

    const startButton = screen.getByRole('button', { name: '시작' });
    await userEvent.click(startButton);
    
    const stopButton = screen.getByRole('button', { name: '중지' });
    await userEvent.click(stopButton);

    const resetButton = screen.getByRole('button', { name: '초기화' });
    expect(startButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  it('초기화를 누르면 숫자가 00:00.00으로 바뀌고 시작 버튼을 보여준다.', async () => {
    render(<StopwatchView />);

    const timeEl = screen.getByText('00:00.00');

    const startButton = screen.getByRole('button', { name: '시작' });
    await userEvent.click(startButton);
    
    const stopButton = screen.getByRole('button', { name: '중지' });
    await userEvent.click(stopButton);

    const resetButton = screen.getByRole('button', { name: '초기화' });
    await userEvent.click(resetButton);

    expect(timeEl).toHaveTextContent('00:00.00');
    expect(startButton).toBeInTheDocument();
  });
});