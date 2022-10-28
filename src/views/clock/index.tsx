import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ClockView() {
  const { t } = useTranslation();
  const [now, setNow] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalKey = setInterval(() => {
      setNow(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalKey);
  }, []);

  const clockEl = t('presentTime');

  return (
    <div>
      <h2>{clockEl}{now}</h2>
    </div>
  )
}