import { useState } from "react";
import { PhotoIcon, QuestionMarkCircleIcon, PlusCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { everydayTrackerTexts } from "./everydayTracker_content";

export default function PhotoPart({language}) {

  const texts = (language == "korean") ? everydayTrackerTexts.photoPart.korean : everydayTrackerTexts.photoPart.english;

  return (
    <div className="flex flex-col border-solid border-2 border-white h-52">
      <PhotoPartHeader texts={texts}/>
      <PhotoUploadBox />
    </div>
  )
}


export function PhotoPartHeader({texts}) {
  const [showDescriptionBox, setShowDescriptionBox] = useState(false);
  const handleMouseEnter = () => { setShowDescriptionBox(true); };
  const handleMouseLeave = () => { setShowDescriptionBox(false); };

  return (
    <div className="flex flex-row justify-center bg-PinkTheme/Level2 rounded-md my-1">
      <PhotoIcon className="w-5 h-5" />
      <p className="text-md font-bold pl-1">
        {texts.photoPartTitle}
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
      {texts.photoPartDescription}
    </p>
  </div>
  )
}

export function PhotoUploadBox() {
  return(
    <div className="flex flex-row">
      <EachPhotoUploadBox photoNumber={1}/>
      <EachPhotoUploadBox photoNumber={2}/>
      <EachPhotoUploadBox photoNumber={3}/>
    </div>
  )
}

export function EachPhotoUploadBox({ photoNumber }) {
  const [image, setImage] = useState(null)
  const [isCircleClicked, setIsCircleClicked] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if(file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
        setIsCircleClicked(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleClickUpload = () => {setIsCircleClicked(true)}
  const handleClickDelete = () => {
    setImage(null);
    setIsCircleClicked(false);
  }

  return (
    <div className="border-solid border-1 border-PinkTheme/Level2 m-1 w-full h-32">
      <p>{photoNumber}.</p>
      {
        image ? (
        <div className="relative w-full h-full">
          <XCircleIcon
            className="absolute top-[-10px] right-[-5px] w-5 h-5 hover:text-PinkTheme/Level2"
            onClick={handleClickDelete}
          />
          <img src={image} alt={`image${photoNumber}`} className="w-full h-full object-cover" />
        </div>
        ) : (
        <div className="bg-PinkTheme/Level4 rounded-md w-full h-full flex justify-center items-center">
          <PlusCircleIcon
            className="w-6 h-6 hover:text-PinkTheme/Level2"
            onClick={handleClickUpload}
          />
        </div>
        )
      }
      {
        isCircleClicked && (
          <input
            type = "file"
            accept = "image/*"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
        )
      }
    </div>
  )
}
