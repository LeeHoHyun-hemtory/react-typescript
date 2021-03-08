import React from 'react';
import styled from 'styled-components';
import { init } from 'emailjs-com';
import Nav from '../../component/nav/Nav';
import EmailSendSDK from './EmailSendSDK';
import EmailSendAPI from './EmailSendAPI';
import mixin from '../../styles/mixin';
import emailConfig from './emailConfig';

const SCContainer = styled.div`
  height: 100vh;
  ${mixin.flexSet()};
`;

const SCEmailFormContainer = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid black;
  ${mixin.flexSet()};
`;

const SCEmailFormInnerContainer = styled.div`
  width: 80%;
  height: 40%;
  border: 1px solid black;
  ${mixin.flexSet()};

  & + & {
    margin-top: 50px;
  }
`;

const EmailSend = () => {
  init(emailConfig.userId!);

  return (
    <SCContainer>
      <Nav />
      <SCEmailFormContainer>
        <SCEmailFormInnerContainer>
          <EmailSendSDK />
        </SCEmailFormInnerContainer>

        <SCEmailFormInnerContainer>
          <EmailSendAPI />
        </SCEmailFormInnerContainer>
      </SCEmailFormContainer>
    </SCContainer>
  );
};

export default EmailSend;