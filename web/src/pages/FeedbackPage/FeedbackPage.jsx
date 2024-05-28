import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import { Metadata } from '@redwoodjs/web'
import { HomeIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { TextField } from '@mui/material'
import { feedbackTexts } from './feedback_content'
import { useLanguage } from 'src/LanguageContext'

const feedbackBoxTextFieldStyles = {
  width:'50%',
  backgroundColor: 'transparent',
};


const FeedbackPage = () => {

  const [feedback, setFeedback] = useState("")

  const {language} = useLanguage();

  if (language == null)
    language = "korean";

  const texts = (language == "korean") ? feedbackTexts.korean : feedbackTexts.english;

  return (
    <div className="relative bg-PinkTheme/Level3 h-screen">
      <Metadata title="Feedback" description="Feedback page" />
      <Link to={routes.home()}>
        <HomeIcon className="w-5 h-5 absolute right-5 top-2 hover:text-PinkTheme/Level5"/>
      </Link>
      <div className="flex justify-center p-5">
        <p className="text-xl font-bold">{feedbackTexts.feedBackTitle}</p>
      </div>
      <div className="flex flex-row justify-center mt-5 underline decoration-PinkTheme/Level5">
        <EnvelopeIcon className="w-5 h-5 m-1"/>
        <p className="text-lg"> {texts.feedbackDescription} </p>
      </div>
      <div className="flex justify-center mt-10">
        <TextField
          id="feedback"
          value={feedback}
          onChange={(e)=>setFeedback(e.target.value)}
          label={texts.feedbackTextBox}
          maxRows="10"
          style={feedbackBoxTextFieldStyles}
          size="small"
        />
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="mx-auto py-1 mb-10 rounded-md bg-PinkTheme/Level5 w-1/4 hover:bg-PinkTheme/Level4 font-bold"
          onClick={()=>{alert(texts.feedbackSuccessMessage);}}
        >
          {texts.feedbackSubmit}
        </button>
      </div>
    </div>
  )
}

export default FeedbackPage
