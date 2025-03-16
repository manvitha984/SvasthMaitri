import React, { useEffect } from 'react';
import './Translate.css';

function Translate() {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.querySelector('#google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    window.loadGoogleTranslate = () => {
      if (!document.querySelector('.skiptranslate')) {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
      }
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div className="translate-container">
      <div className="translate-label">Translate:</div>
      <div id="google_translate_element"></div>
    </div>
  );
}

export default Translate;
