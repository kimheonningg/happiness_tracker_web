import { useState } from "react"
import { QuestionMarkCircleIcon, ListBulletIcon } from "@heroicons/react/24/outline"

export default function ThanksListPart() {
  return(
    <div className="flex flex-col border-solid border-2 border-white">
      <ThanksListHeader />
      <ThanksList />
    </div>
  )
}

export function ThanksListHeader() {
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const handleMouseEnter = () => { setShowDescriptionBox(true); };
  const handleMouseLeave = () => { setShowDescriptionBox(false); };

  return (
    <div className="flex flex-row justify-center bg-PinkTheme/Level2 rounded-md mt-1 mx-2">
      <ListBulletIcon className="w-5 h-5" />
      <p className="text-md font-bold ml-1">
        오늘의 감사 목록
      </p>
      <div className = "relative">
        <QuestionMarkCircleIcon
          className = "w-3 h-3 ml-1 hover:bg-PinkTheme/Level5 hover:rounded-lg"
          onMouseEnter = {handleMouseEnter}
          onMouseLeave = {handleMouseLeave}
        />
        {showDescriptionBox &&
          <div className = "absolute top-2">
            <DescriptionBox />
          </div>
        }
      </div>
    </div>
  )
}

export function DescriptionBox() {
  return (
  <div className="bg-PinkTheme/Level1 rounded-sm w-72">
    <p className="text-sm flex justify-center"> 오늘 감사했던 점 최대 3가지를 적는 공간 </p>
  </div>
  )
}

export function ThanksList() {
  return (
    <div className="flex flex-col my-1">
      <EachThanksList listNumber={1} />
      <EachThanksList listNumber={2} />
      <EachThanksList listNumber={3} />
    </div>
  )
}

export function EachThanksList({ listNumber }) {
  return (
    <div className="flex flex-row">
      <p>{listNumber}.</p>
      <input className="w-full mx-2 my-1 bg-transparent border-solid border-b-2 border-PinkTheme/Level5"></input>
    </div>
  )
}
