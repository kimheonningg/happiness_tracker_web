import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import {PencilIcon, FaceSmileIcon, HomeIcon} from '@heroicons/react/24/outline'

const AboutPage = () => {
  return (
    <div className="relative bg-PinkTheme/Level3 h-screen">
      <Metadata title="About" description="About page" />
      <Link to={routes.home()}>
        <HomeIcon className="w-5 h-5 absolute right-5 top-2 hover:text-PinkTheme/Level5"/>
      </Link>
      <div className="flex justify-center p-5">
        <p className="text-xl font-bold">About</p>
      </div>
      <div className="flex flex-row justify-center mt-5 underline decoration-PinkTheme/Level5">
        <PencilIcon className="w-5 h-5 m-1"/>
        <p className = "text-lg"> 기록을 통해 일상 속 행복 찾기 .. </p>
        <FaceSmileIcon className="w-5 h-5 m-1"/>
      </div>
      <div className="flex justify-center mt-10">
        <p> 어제가 오늘 같고 오늘이 어제 같은 요즘, <br/>
        매일매일의 소중함을 느끼고 그 속의 행복을 찾고자 시작하게 되었습니다.</p>
      </div>
      <div className="flex justify-center mt-12">
        <p className="text-xs">
          제작자: <a href="https://www.linkedin.com/in/kimheonningg/" className="hover:text-PinkTheme/Level5" >김희원</a>
        </p>
      </div>
    </div>
  )
}

export default AboutPage
