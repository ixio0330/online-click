import React, { useState } from 'react';
import useStopWatch, { StopWatchStatus } from '../../hooks/useStopWatch';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function StopWatchView() {
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
  status === 'start' ? <button onClick={() => handleStatus('stop')}>{stopEl}</button> : 
  <>
    <button onClick={() => handleStatus('reset')}>{resetEl}</button>
    <button onClick={() => handleStatus('start')}>{restartEl}</button>
  </>

  return (
    <div>
      <p>{ watch }</p>
      { buttonElement }
    </div>
  );
}