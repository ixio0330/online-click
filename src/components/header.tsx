import React from "react";
import { useTranslation } from 'react-i18next';
import SelectLang from "./selectLang";

export default function Header() {
  const { t } = useTranslation();

  function onChangeScreen(type: 'full' | 'off') {
    const screenMode = {
      full() {
        document.documentElement.requestFullscreen();
      },
      off() {
        document.exitFullscreen();
      }
    }
    screenMode[type]();
  }

  const fullScreenEl = t('fullScreen');
  const fullScreenOffEl = t('fullScreenOff');
  
  return (
    <header>
      <h1>⌚️</h1>
      <div className="control_wrap">
        <div className="btn_wrap">
          <button onClick={() => onChangeScreen('full')}>{fullScreenEl}</button>
          <button onClick={() => onChangeScreen('off')}>{fullScreenOffEl}</button>
        </div>
        <SelectLang />
      </div>
    </header>
  )
}