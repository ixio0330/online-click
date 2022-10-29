import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  const goHome = t('goHome');
  return (
    <section className="notfound_view">
      <h3>404</h3>
      <h2>Not Found</h2>
      <Link to='/'>{goHome}</Link>
    </section>
  )
}