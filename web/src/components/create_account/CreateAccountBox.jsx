import {TextField} from '@mui/material';

const createAccountBoxTextFieldStyles = {
  width:'100%',
  backgroundColor: 'white',
  marginTop: '10px',
  marginBottom: '10px',
};

export default function CreateAccountBox () {
  return (
    <div className="bg-gray-100 w-64 md:w-72 h-72 mx-auto px-2 py-2 rounded-md">
      <div>
        <p className="text-center mt-2 text-xl font-bold">회원 가입</p>
      </div>
      <div className="mt-3"></div>
      <TextField
        id="id"
        label="아이디를 입력해 주세요."
        maxRows="1"
        style={createAccountBoxTextFieldStyles}
        validation={{required: "아이디를 입력해 주세요."}}
        size="small"
      />
      {/* <input className="my-3 text-black w-full h-7 rounded-sm p-2"></input> */}
      <TextField
        id="id"
        label="비밀번호를 입력해 주세요."
        maxRows="1"
        style={createAccountBoxTextFieldStyles}
        validation={{required: "비밀번호를 입력해 주세요."}}
        size="small"
        type="password"
      />
      <div className="flex justify-center">
        <button className="bg-white px-6 py-1 rounded-md hover:text-PinkTheme/Level5 mt-8">
          계정 만들기
        </button>
      </div>
    </div>
  )
}
