import { useState } from "react";
import { BookOpenIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { everydayTrackerTexts } from "./everydayTracker_content";

export default function DiaryPart({language}) {

  const texts = (language == "korean") ? everydayTrackerTexts.diaryPart.korean : everydayTrackerTexts.diaryPart.english;

  return(
    <div className="flex flex-col border-solid border-2 border-white">
      <DiaryPartHeader texts = {texts}/>
      <input className="w-full my-1 bg-transparent border-solid border-b-2 border-PinkTheme/Level5"></input>
    </div>
  )
}

export function DiaryPartHeader({texts}) {
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const handleMouseEnter = () => { setShowDescriptionBox(true); };
  const handleMouseLeave = () => { setShowDescriptionBox(false); };

  return (
    <div className="flex flex-row justify-center bg-PinkTheme/Level2 rounded-md my-1">
      <BookOpenIcon className="w-5 h-5" />
      <p className="text-md font-bold pl-1">
        {texts.diaryPartTitle}
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
      {texts.diaryPartDescription}
    </p>
  </div>
  )
}
