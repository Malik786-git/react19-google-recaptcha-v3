import { use } from 'react';
import { GoogleReCaptchaContext } from './google-recaptcha-provider';

export const useGoogleReCaptcha = () => use(GoogleReCaptchaContext);
