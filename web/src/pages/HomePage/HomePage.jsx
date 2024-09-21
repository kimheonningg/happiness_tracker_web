import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { QuestionMarkCircleIcon, UserCircleIcon, ChatBubbleLeftRightIcon, Cog8ToothIcon} from '@heroicons/react/24/outline'
import EverydayTracker from 'src/components/everyday_tracker/EverydayTracker'
import CalendarPart from 'src/components/calendar_part/CalendarPart'
import { useState } from 'react'
import { homeTexts } from './home_content'
import { useLanguage } from 'src/LanguageContext'

const HomePage = () => {

  const {language} = useLanguage();

  const today = new Date()
  const[selectedDate, setSelectedDate] = useState(today)
  const handleDateSelect = (date) => { setSelectedDate(date) }

  if (language == null)
    language = "korean";

  const texts = (language == "korean") ? homeTexts.korean : homeTexts.english;

  return (
    <div className="relative bg-PinkTheme/Level3">
      <Metadata title="Home" description="Home page" />
      <div className="absolute right-5 top-2 flex flex-row">
        {/* <Link to={routes.userInfo()}>
          <UserCircleIcon className="w-5 h-5 hover:text-PinkTheme/Level5" />
        </Link> */}
        <Link to={routes.settings()}>
          <Cog8ToothIcon className="w-5 h-5 hover:text-PinkTheme/Level5" />
        </Link>
        <Link to={routes.feedback()}>
          <ChatBubbleLeftRightIcon className="w-5 h-5 hover:text-PinkTheme/Level5"/>
        </Link>
        <Link to={routes.about()}>
          <QuestionMarkCircleIcon className="w-5 h-5 hover:text-PinkTheme/Level5"/>
        </Link>
      </div>
      <div className= "flex justify-center p-5">
        <p className= "text-xl font-bold"> {texts.homeTitle} </p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="md:grid md:grid-cols-2 md:grid-rows-1 flex flex-col">
          <div>
            <CalendarPart onSelectDate={handleDateSelect}/>
          </div>
          <div className="flex flex-col mx-3 mt-5 lg:mx-0 lg:mt-0">
            <EverydayTracker today={selectedDate.toDateString()} />
            <button
              className="mx-auto py-1 mt-10 mb-10 rounded-md bg-PinkTheme/Level5 w-1/4 hover:bg-PinkTheme/Level4 font-bold"
              onClick={()=>{alert(texts.homeSaveSuccessMessage)}}
            >
              {texts.homeSaveButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
