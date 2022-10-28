import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function SelectLang() {
  const { t } = useTranslation();
  const langEl = t('lang')
  const koEl = t('ko');
  const enEl = t('en');

  function changeLang(e: ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div>
      <label htmlFor="select_lang">{langEl}</label>
      <select name="select_lang" id="select_lang" onChange={changeLang}>
        <option value="ko">{koEl}</option>
        <option value="en">{enEl}</option>
      </select>
    </div>
  )
}