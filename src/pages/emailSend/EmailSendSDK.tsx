import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import mixin from '../../styles/mixin';
import dotenv from 'dotenv';

dotenv.config();

const SCContainer = styled.div`
  ${mixin.flexSet()};
  position: relative;
`;

const SCFormContainer = styled.div`
  ${mixin.flexSet('center', 'center', 'row')};
  & + & {
    margin-top: 20px;
  }
`;

const SCInfo = styled.p`
  margin: 0 20px 0 0;
  padding: 0;
  font-size: 20px;
`;

const SCInput = styled.input`
  width: 400px;
`;

const SCButton = styled.button`
  height: 70px;
  margin-top: 50px;
  font-size: 20px;
  border-radius: 35px;
`;

const SCResponse = styled.div`
  font-size: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const EmailSendSDK = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'name') {
      setName(e.target.value);
    }
    else {
      setText(e.target.value);
    }
  }

  const onClick = (name: string, text: string) => {
    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID!, process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, { name, text })
    .then(res => setResponse(res.text === 'OK' ? '전송 성공' : '전송 실패'));
  }

  return (
    <SCContainer>
      <SCFormContainer>
        <SCInfo>이름: </SCInfo>
        <SCInput name='name' onChange={onChange}/>
      </SCFormContainer>

      <SCFormContainer>
        <SCInfo>내용: </SCInfo>
        <SCInput name='text' onChange={onChange}/>
      </SCFormContainer>

      <SCButton onClick={() => onClick(name, text)}>이메일 보내기 - SDK</SCButton>
      
      <SCResponse>{response}</SCResponse>
    </SCContainer>
  );
};

export default EmailSendSDK;