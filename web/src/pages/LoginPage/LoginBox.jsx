import {TextField} from '@mui/material';
import { routes } from '@redwoodjs/router';
import { useState } from 'react';
import { loginTexts } from 'src/pages/LoginPage/login_content';
import { useLanguage } from 'src/LanguageContext';

const loginBoxTextFieldStyles = {
  width:'100%',
  backgroundColor: 'white',
  marginTop: '10px',
  marginBottom: '10px',
};

export default function LoginBox () {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const {language} = useLanguage();

  if (language == null)
    language = "korean";

  const texts = (language == "korean") ? loginTexts.korean : loginTexts.english;

  return (
    <div className="bg-gray-100 w-64 md:w-72 h-72 mx-auto px-2 py-2 rounded-md">
      <div className="flex justify-center">
        <p className="mt-2 text-xl font-bold">{texts.loginTitle}</p>
      </div>
      <div className="mt-3"></div>
      <TextField
        id="id"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        label={texts.loginId}
        maxRows="1"
        style={loginBoxTextFieldStyles}
        validation={{required: texts.loginId}}
        size="small"
      />
      <TextField
        id="id"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        label={texts.loginPw}
        maxRows="1"
        style={loginBoxTextFieldStyles}
        validation={{required: texts.loginPw}}
        size="small"
        type="password"
      />
      <div className="text-center mt-2">
        <a className="text-xs hover:text-PinkTheme/Level5" href={routes.createAccount()}>
          {texts.loginNoAccount}
        </a>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-white px-6 py-1 rounded-md hover:text-PinkTheme/Level5 mt-6"
          type="submit"
          onClick={()=>{alert(texts.loginSuccessMessage);}}
        >
          {texts.loginButton}
        </button>
      </div>
    </div>
  )
}
