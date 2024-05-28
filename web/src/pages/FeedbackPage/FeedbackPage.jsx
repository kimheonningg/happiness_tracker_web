import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import { Metadata } from '@redwoodjs/web'
import { HomeIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { TextField } from '@mui/material'

const feedbackBoxTextFieldStyles = {
  width:'50%',
  backgroundColor: 'transparent',
};


const FeedbackPage = () => {

  const [feedback, setFeedback] = useState("")

  return (
    <div className="relative bg-PinkTheme/Level3 h-screen">
      <Metadata title="Feedback" description="Feedback page" />
      <Link to={routes.home()}>
        <HomeIcon className="w-5 h-5 absolute right-5 top-2 hover:text-PinkTheme/Level5"/>
      </Link>
      <div className="flex justify-center p-5">
        <p className="text-xl font-bold">Feedbacks</p>
      </div>
      <div className="flex flex-row justify-center mt-5 underline decoration-PinkTheme/Level5">
        <EnvelopeIcon className="w-5 h-5 m-1"/>
        <p className="text-lg"> 더 나은 서비스를 위해 개선할 점을 제안해주세요. </p>
      </div>
      <div className="flex justify-center mt-10">
        <TextField
          id="feedback"
          value={feedback}
          onChange={(e)=>setFeedback(e.target.value)}
          label="피드백을 입력해주세요"
          maxRows="10"
          style={feedbackBoxTextFieldStyles}
          size="small"
        />
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="mx-auto py-1 mb-10 rounded-md bg-PinkTheme/Level5 w-1/4 hover:bg-PinkTheme/Level4 font-bold"
          onClick={()=>{alert("제출되었습니다.")}}
        >
          제출하기
        </button>
      </div>
    </div>
  )
}

export default FeedbackPage
