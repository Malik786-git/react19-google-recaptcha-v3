import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleReCaptchaProvider } from '../src/google-recaptcha-provider';
import { GoogleRecaptchaExample } from './google-recaptcha-example';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found. Make sure there's a <div id='root'></div> in your HTML.");
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LeyPeohAAAAAENHm2TkWTgQyTU9M0ZoJ_JvK5I_">
      <GoogleRecaptchaExample />
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
