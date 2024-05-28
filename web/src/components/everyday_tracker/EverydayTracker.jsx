import EmojiPart from "./EmojiPart"
import ThanksListPart from "./ThanksListPart"
import TouchedListPart from "./TouchedListPart"
import DiaryPart from "./DiaryPart"
import PhotoPart from "./PhotoPart"
import { useLanguage } from "src/LanguageContext"

export default function EverydayTracker({ today }) {

  const {language} = useLanguage();

  return(
    <div className="flex flex-col">
      <div className="flex justify-center text-lg font-semibold border-double border-b-8 border-PinkTheme/Level5"> {today}의 기록 </div>
      <div className="mt-10">
        <EmojiPart language={language}/>
      </div>
      <div className="grid grid-cols-2 mt-10">
        <div>
          <ThanksListPart language={language}/>
        </div>
        <div>
          <TouchedListPart language={language}/>
        </div>
      </div>
      <div className="mt-10">
        <DiaryPart language={language}/>
      </div>
      <div className="mt-10">
        <PhotoPart language={language}/>
      </div>
    </div>
  )
}
