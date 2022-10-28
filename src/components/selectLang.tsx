import React, { FormEvent, useRef } from 'react';
import i18n from '../i18n';

export default function SelectLang() {
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
        KO
      </button>
      <span>|</span>
      <button 
        id='en' 
        onClick={changeLang}
        className={selectLangRef.current === 'en' ? 'select_lang' : ''} 
      >
        EN
      </button>
    </form>
  )
}