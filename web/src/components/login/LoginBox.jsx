import {TextField} from '@mui/material';
import { routes } from '@redwoodjs/router';
import { useState } from 'react';

const loginBoxTextFieldStyles = {
  width:'100%',
  backgroundColor: 'white',
  marginTop: '10px',
  marginBottom: '10px',
};

export default function LoginBox () {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-gray-100 w-64 md:w-72 h-72 mx-auto px-2 py-2 rounded-md">
      <div className="flex justify-center">
        <p className="mt-2 text-xl font-bold">로그인</p>
      </div>
      <div className="mt-3"></div>
      <TextField
        id="id"
        value={id}
        onChange={(e)=>setId(e.target.value)}
        label="아이디를 입력해 주세요."
        maxRows="1"
        style={loginBoxTextFieldStyles}
        validation={{required: "아이디를 입력해 주세요."}}
        size="small"
      />
      <TextField
        id="id"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        label="비밀번호를 입력해 주세요."
        maxRows="1"
        style={loginBoxTextFieldStyles}
        validation={{required: "비밀번호를 입력해 주세요."}}
        size="small"
        type="password"
      />
      <div className="text-center mt-2">
        <a className="text-xs hover:text-PinkTheme/Level5" href={routes.createAccount()}> 계정이 없으신가요? </a>
      </div>
      <div className="flex justify-center">
        <button className="bg-white px-6 py-1 rounded-md hover:text-PinkTheme/Level5 mt-6" type="submit">
          로그인하기
        </button>
      </div>
    </div>
  )
}
