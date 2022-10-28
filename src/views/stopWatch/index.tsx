import React, { useState } from 'react';
import useStopWatch, { StopWatchStatus } from '../../hooks/useStopWatch';

export default function StopWatchView() {
  const [status, setStatus] = useState('reset' as StopWatchStatus);
  const { watch } = useStopWatch({ status });

  function handleStatus(status: StopWatchStatus) {
    setStatus(status);
  }

  const buttonElement = 
  status === 'reset' ? <button onClick={() => handleStatus('start')}>시작</button> : 
  status === 'start' ? <button onClick={() => handleStatus('stop')}>중지</button> : 
  <>
    <button onClick={() => handleStatus('start')}>재시작</button>
    <button onClick={() => handleStatus('reset')}>초기화</button>
  </>

  return (
    <div>
      <p>{ watch }</p>
      { buttonElement }
    </div>
  );
}