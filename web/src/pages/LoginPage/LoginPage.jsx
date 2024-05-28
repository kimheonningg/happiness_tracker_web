import { Metadata } from '@redwoodjs/web'
import LoginBox from 'src/pages/LoginPage/LoginBox'

const LoginPage = () => {
  return (
    <div className="bg-PinkTheme/Level3 py-10 h-screen">
      <Metadata title="Login" description="Login page" />
      <LoginBox />
    </div>
  )
}

export default LoginPage
