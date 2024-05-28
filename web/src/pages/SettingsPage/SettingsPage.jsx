import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { HomeIcon } from '@heroicons/react/24/outline'

const SettingsPage = () => {
  return (
    <div className="relative bg-PinkTheme/Level3 h-screen">
      <Metadata title="Settings" description="Settings page" />
      <Link to={routes.home()}>
        <HomeIcon className="w-5 h-5 absolute right-5 top-2 hover:text-PinkTheme/Level5"/>
      </Link>
      <div className="flex justify-center p-5">
        <p className="text-xl font-bold">Settings</p>
      </div>
      <div className="flex justify-center p-10">
        <div className="grid grid-cols-2 grid-rows-2 w-1/3 h-36">
          <p className="text-left">언어 (Language): </p>
          <div className="text-right">
            <select className="bg-PinkTheme/Level2 p-1 rounded-md">
              <option> 한국어 </option>
              {/* <option> English </option> */}
            </select>
          </div>
          <p className="text-left">테마 (Theme): </p>
          <div className="text-right">
            <select className="bg-PinkTheme/Level2 p-1 rounded-md">
              <option> Pink Theme </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
