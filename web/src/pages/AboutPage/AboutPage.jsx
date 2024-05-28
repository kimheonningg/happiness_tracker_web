import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import {PencilIcon, FaceSmileIcon, HomeIcon} from '@heroicons/react/24/outline'
import { aboutTexts } from './about_content'
import { useLanguage } from 'src/LanguageContext'

const AboutPage = () => {

  const {language} = useLanguage();

  if (language == null)
    language = "korean";

  const texts = (language == "korean") ? aboutTexts.korean : aboutTexts.english;

  return (
    <div className="relative bg-PinkTheme/Level3 h-screen">
      <Metadata title="About" description="About page" />
      <Link to={routes.home()}>
        <HomeIcon className="w-5 h-5 absolute right-5 top-2 hover:text-PinkTheme/Level5"/>
      </Link>
      <div className="flex justify-center p-5">
        <p className="text-xl font-bold">{aboutTexts.aboutPageTitle}</p>
      </div>
      <div className="flex flex-row justify-center mt-5 underline decoration-PinkTheme/Level5">
        <PencilIcon className="w-5 h-5 m-1"/>
        <p className = "text-lg"> {texts.aboutPageMainDescription} </p>
        <FaceSmileIcon className="w-5 h-5 m-1"/>
      </div>
      <div className="flex justify-center mt-10">
      <p dangerouslySetInnerHTML={{ __html: texts.aboutPageSubDescription }}></p>
      </div>
      <div className="flex justify-center mt-12">
        <p className="text-xs">
          {texts.aboutPageCreatorTitle}: <a href={aboutTexts.aboutPageCreatorUrl} className="hover:text-PinkTheme/Level5" > {texts.aboutPageCreator} </a>
        </p>
      </div>
    </div>
  )
}

export default AboutPage
