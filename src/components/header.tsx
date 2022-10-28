import React, { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SelectLang from "./selectLang";

export default function Header() {
  const [targetTheme, setTargetTheme] = useState(localStorage.getItem('THEME') || '🌝');

  function changeThemeTarget() {
    if (targetTheme === '🌝') {
      document.documentElement.setAttribute('color-theme', 'dark');
      setTargetTheme('🌞');
      localStorage.setItem('THEME', '🌞');
    } else {
      document.documentElement.setAttribute('color-theme', 'light');
      setTargetTheme('🌝');
      localStorage.setItem('THEME', '🌝');
    }
  }

  function initTheme() {
    if (targetTheme === '🌝') {
      document.documentElement.setAttribute('color-theme', 'light');
    } else {
      document.documentElement.setAttribute('color-theme', 'dark');
    }
  }

  useEffect(() => {
    initTheme();
  }, []);

  const { t } = useTranslation();

  function onChangeScreen(type: 'full' | 'off') {
    const screenMode = {
      full() {
        document.documentElement.requestFullscreen();
      },
      off() {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      }
    }
    screenMode[type]();
  }

  const fullScreenEl = t('fullScreen');
  const fullScreenOffEl = t('fullScreenOff');
  const clockEl = t('clock');
  const stopwatchEl = t('stopwatch');

  const location = useLocation();

  const linkName = location.pathname === '/' ? stopwatchEl : clockEl;
  
  return (
    <header>
        <Link to='/'><h1>online clock</h1></Link>
        <div className="btn_wrap">
          <Link to={location.pathname === '/' ? '/stop-watch' : '/'}>{linkName}</Link>
          <button onClick={() => onChangeScreen('full')}>{fullScreenEl}</button>
          <button onClick={() => onChangeScreen('off')}>{fullScreenOffEl}</button>
          <SelectLang />
          <button className="theme" onClick={changeThemeTarget}>{targetTheme}</button>
        </div>
    </header>
  )
}