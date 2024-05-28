import EmojiPart from "../emoji_part/EmojiPart"
import ThanksListPart from "../list_part/ThanksListPart"
import TouchedListPart from "../list_part/TouchedListPart"
import DiaryPart from "../diary_part/DiaryPart"
import PhotoPart from "../photo_part/PhotoPart"

export default function EverydayTracker({ today }) {
  return(
    <div className="flex flex-col">
      <div className="flex justify-center text-lg font-semibold border-double border-b-8 border-PinkTheme/Level5"> {today}의 기록 </div>
      <div className="mt-10">
        <EmojiPart/>
      </div>
      <div className="grid grid-cols-2 mt-10">
        <div>
          <ThanksListPart />
        </div>
        <div>
          <TouchedListPart />
        </div>
      </div>
      <div className="mt-10">
        <DiaryPart />
      </div>
      <div className="mt-10">
        <PhotoPart />
      </div>
    </div>
  )
}
