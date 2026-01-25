import React from 'react';
import './banner.css';

export default function Banner({ children }) {
  return (
    <section className="banner-container">
      {/* direkte Kinder für gap */}
      <div></div>
      <div>*</div>
      <div></div>
      <div>*</div>
      <div></div>
      {children}
    </section>
  );
}