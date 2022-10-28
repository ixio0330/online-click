import React, { useState } from 'react';
import useStopWatch, { StopWatchStatus } from '../../hooks/useStopWatch';
import { useTranslation } from 'react-i18next';

export default function StopwatchView() {
  const [status, setStatus] = useState('reset' as StopWatchStatus);
  const { watch } = useStopWatch({ status });
  const { t } = useTranslation();

  function handleStatus(status: StopWatchStatus) {
    setStatus(status);
  }

  const startEl = t('start');
  const restartEl = t('restart');
  const stopEl = t('stop');
  const resetEl = t('reset');

  const buttonElement = 
  status === 'reset' ? <button onClick={() => handleStatus('start')}>{startEl}</button> : 
  status === 'start' ? <button className='negative' onClick={() => handleStatus('stop')}>{stopEl}</button> : 
  <div className='btn_wrap'>
    <button className='negative' onClick={() => handleStatus('reset')}>{resetEl}</button>
    <button onClick={() => handleStatus('start')}>{restartEl}</button>
  </div>

  return (
    <section className='stopwatch_view'>
      <h2>{ watch }</h2>
      { buttonElement }
    </section>
  );
}