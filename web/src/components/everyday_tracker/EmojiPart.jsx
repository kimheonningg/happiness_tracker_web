import { useState } from "react";
import { QuestionMarkCircleIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { everydayTrackerTexts } from "./everydayTracker_content";

const Emoji = {
  HAPPY: '😊',
  EXCITED: '😆',
  TIRED: '🥱',
  SAD: '😢',
  ANGRY: '😡'
};

export default function EmojiPart({language}) {

  const texts = (language == "korean") ? everydayTrackerTexts.emojiPart.korean : everydayTrackerTexts.emojiPart.english;

  return(
    <div className="flex flex-col">
      <EmojiPartHeader texts={texts}/>
      <EmojiList/>
    </div>
  )
}

export function EmojiList() {
  const [selectedEmoji, setSelectedEmoji] = useState(null)

  const eachEmojiStyles = "flex justify-center hover:bg-gray-400 hover:rounded-xl";
  const clickedEmojiStyle = "bg-gray-400 rounded-xl";

  const handleEmojiClick = (emoji) => { setSelectedEmoji(emoji); }

  return(
    <div className="w-full h-7 bg-white rounded-md grid grid-cols-5 place-content-evenly px-1">
      {Object.values(Emoji).map((emoji, index) => (
        <div
          key={index}
          className={`${eachEmojiStyles} ${selectedEmoji === emoji ? clickedEmojiStyle : ''}`}
          onClick={() => handleEmojiClick(emoji)}
        >
          {emoji}
        </div>
      ))}
    </div>
  )
}

export function EmojiPartHeader({texts}) {
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const handleMouseEnter = () => { setShowDescriptionBox(true); };
  const handleMouseLeave = () => { setShowDescriptionBox(false); };

  return (
    <div className="flex flex-row justify-center bg-PinkTheme/Level2 rounded-md my-1">
      <FaceSmileIcon className="w-5 h-5" />
      <p className="text-md font-bold pl-1">
        {texts.emojiPartTitle}
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
      {texts.emojiPartDescription}
    </p>
  </div>
  )
}
