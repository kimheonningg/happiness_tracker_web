import {TextField} from '@mui/material';
import { createAccountTexts } from './createaccount_content';
import { useLanguage } from 'src/LanguageContext';

const createAccountBoxTextFieldStyles = {
  width:'100%',
  backgroundColor: 'white',
  marginTop: '10px',
  marginBottom: '10px',
};

export default function CreateAccountBox () {

  const {language} = useLanguage();

  if (language == null)
    language = "korean";

  const texts = (language == "korean") ? createAccountTexts.korean : createAccountTexts.english;

  return (
    <div className="bg-gray-100 w-64 md:w-72 h-72 mx-auto px-2 py-2 rounded-md">
      <div>
        <p className="text-center mt-2 text-xl font-bold">{texts.createAccountBoxTitle}</p>
      </div>
      <div className="mt-3"></div>
      <TextField
        id="id"
        label={texts.createAccountBoxId}
        maxRows="1"
        style={createAccountBoxTextFieldStyles}
        validation={{required: texts.createAccountBoxId}}
        size="small"
      />
      <TextField
        id="password"
        label={texts.createAccountBoxPw}
        maxRows="1"
        style={createAccountBoxTextFieldStyles}
        validation={{required: texts.createAccountBoxPw}}
        size="small"
        type="password"
      />
      <div className="flex justify-center">
        <button
          className="bg-white px-6 py-1 rounded-md hover:text-PinkTheme/Level5 mt-8"
          onClick={()=>{alert(texts.createAccountBoxSuccessMessage);}}
        >
          {texts.createAccountBoxCreate}
        </button>
      </div>
    </div>
  )
}
