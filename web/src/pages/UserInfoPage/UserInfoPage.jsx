import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { HomeIcon } from '@heroicons/react/24/outline'

const UserInfoPage = () => {
  return (
    <div className="relative bg-PinkTheme/Level3 h-screen">
      <Metadata title="UserInfo" description="UserInfo page" />
      <Link to={routes.home()}>
        <HomeIcon className="w-5 h-5 absolute right-5 top-2 hover:text-PinkTheme/Level5"/>
      </Link>
      <div className="flex justify-center p-5">
        <p className="text-xl font-bold">회원정보</p>
      </div>
      <div className="flex justify-center p-10">
        <div className="grid grid-cols-2 grid-rows-3 w-1/3 h-36">
          <p className="text-left">이름</p>
          <p className="text-right">unknown</p>
          <p className="text-left">아이디</p>
          <p className="text-right">unknown</p>
          <p className="text-left">비밀번호</p>
          <p className="text-right">unknown</p>
        </div>
      </div>
    </div>
  )
}

export default UserInfoPage
