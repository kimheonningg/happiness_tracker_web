import { useState } from "react"
import { QuestionMarkCircleIcon, ListBulletIcon } from "@heroicons/react/24/outline"
import { everydayTrackerTexts } from "./everydayTracker_content";

export default function TouchedListPart({language}) {

  const texts = (language == "korean") ? everydayTrackerTexts.touchedListPart.korean : everydayTrackerTexts.touchedListPart.english;

  return(
    <div className="flex flex-col border-solid border-2 border-white">
      <TouchedListHeader texts={texts}/>
      <TouchedList />
    </div>
  )
}

export function TouchedListHeader({texts}) {
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const handleMouseEnter = () => { setShowDescriptionBox(true); };
  const handleMouseLeave = () => { setShowDescriptionBox(false); };

  return (
    <div className="flex flex-row justify-center bg-PinkTheme/Level2 rounded-md mt-1 mx-2">
      <ListBulletIcon className="w-5 h-5" />
      <p className="text-md font-bold ml-1">
        {texts.touchedListPartTitle}
      </p>
      <div className = "relative">
        <QuestionMarkCircleIcon
          className = "w-3 h-3 ml-1 hover:bg-PinkTheme/Level5 hover:rounded-lg"
          onMouseEnter = {handleMouseEnter}
          onMouseLeave = {handleMouseLeave}
        />
        {showDescriptionBox &&
          <div className = "absolute top-2">
            <DescriptionBox texts={texts}/>
          </div>
        }
      </div>
    </div>
  )
}

export function DescriptionBox({texts}) {
  return (
  <div className="bg-PinkTheme/Level1 rounded-sm w-72">
    <p className="text-sm flex justify-center">
      {texts.touchedListPartDescription}
    </p>
  </div>
  )
}

export function TouchedList() {
  return (
    <div className="flex flex-col my-1">
      <EachTouchedList listNumber={1} />
      <EachTouchedList listNumber={2} />
      <EachTouchedList listNumber={3} />
    </div>
  )
}

export function EachTouchedList({ listNumber }) {
  return (
    <div className="flex flex-row">
      <p>{listNumber}.</p>
      <input className="w-full mx-2 my-1 bg-transparent border-solid border-b-2 border-PinkTheme/Level5"></input>
    </div>
  )
}
