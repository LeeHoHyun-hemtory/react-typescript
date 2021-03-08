import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs, { init } from 'emailjs-com';
import mixin from '../../styles/mixin';

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

const EmailSendAPI = () => {
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
    setResponse('');
    
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user_id: 'user_23XqyzEM8MpAgcVkK58kp',
        service_id: 'hemtory',
        template_id: 'template_z9iyu2t',
        template_params: {
          name,
          text,
          from_name: 'hemtory',
          email_addr: 'qwer@qwer.net'
        }
      })
    }).then(res => setResponse(res.ok ? '전송 성공' : '전송 실패'));
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

      <SCButton onClick={() => onClick(name, text)}>이메일 보내기 - API</SCButton>
      
      <SCResponse>{response}</SCResponse>
    </SCContainer>
  );
};

export default EmailSendAPI;