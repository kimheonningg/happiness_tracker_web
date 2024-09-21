import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import { Metadata } from '@redwoodjs/web'
import { HomeIcon } from '@heroicons/react/24/outline'
import { useLanguage } from 'src/LanguageContext'

const SettingsPage = () => {

  const { language, changeLanguage } = useLanguage();
  const [theme, setTheme] = useState("pink");

  const handleLanguageChange = (e) => { changeLanguage(e.target.value); }
  const handleThemeChange = (e) => { setTheme(e.target.value); }

  return (
    <div className="relative bg-PinkTheme/Level3 h-screen">
      <Metadata title="Settings" description="Settings page" />
      <Link to={routes.home()}>
        <HomeIcon className="w-5 h-5 absolute right-5 top-2 hover:text-PinkTheme/Level5"/>
      </Link>
      <div className="flex justify-center p-5">
        <p className="text-xl font-bold">Settings</p>
      </div>
      <div className="flex justify-center lg:px-10 pt-10">
        <div className="grid grid-cols-2 grid-rows-2 lg:w-1/3 lg:h-36 gap-5 md:gap-0">
          <p className="text-left">언어 (Language): </p>
          <div className="text-right">
            <select
              className="bg-PinkTheme/Level2 p-1 rounded-md"
              value = {language}
              onChange = {handleLanguageChange}
            >
              <option value="korean"> 한국어 </option>
              <option value="english"> English </option>
            </select>
          </div>
          <p className="text-left">테마 (Theme): </p>
          <div className="text-right">
            <select
              className="bg-PinkTheme/Level2 p-1 rounded-md"
              onChange = {handleThemeChange}
            >
              <option value="pink"> Pink Theme </option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="mx-auto px-3 py-1 mb-10 rounded-md bg-PinkTheme/Level5 lg:w-1/4 hover:bg-PinkTheme/Level4 font-bold"
          onClick={()=>{alert("변경되었습니다 (Saved).");}}
        >
          변경하기 (Save)
        </button>
      </div>
    </div>
  )
}

export default SettingsPage
