import React, { FormEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function SelectLang() {
  const { t } = useTranslation();
  const koEl = t('ko');
  const enEl = t('en');
  const selectLangRef = useRef('ko');

  function changeLang(e: FormEvent) {
    e.preventDefault();
    i18n.changeLanguage(e.currentTarget.id);
    selectLangRef.current = e.currentTarget.id;
  }

  return (
    <form onSubmit={changeLang}>
      <button 
        id='ko' 
        onClick={changeLang}
        className={selectLangRef.current === 'ko' ? 'select_lang' : ''} 
      >
        {koEl}
      </button>
      <button 
        id='en' 
        onClick={changeLang}
        className={selectLangRef.current === 'en' ? 'select_lang' : ''} 
      >
        {enEl}
      </button>
    </form>
  )
}