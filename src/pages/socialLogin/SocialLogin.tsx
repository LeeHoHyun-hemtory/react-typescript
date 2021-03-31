import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'dotenv/config'
import KakaoLogin from 'react-kakao-login';
import Nav from '../../component/nav/Nav';
import mixin from '../../styles/mixin';

const SCContainer = styled.div`
  height: 100vh;
`;

const SCSocialContainier = styled.div`
  height: 100%;
  ${mixin.flexSet()};
`;

const SCLoginContainer = styled.div`
  width: 80%;
  height: 50%;
  ${mixin.flexSet()};
  background: #c2ddc2;
`;

const SCKakao = styled(KakaoLogin)`
  width: 200px;
  height: 50px;
`;

const SocialLogin = () => {
  const success = () => {
    console.log('성공');
  }

  const fail = () => {
    console.log('실패');
  }

  const click = () => {
    fetch(`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAOAPPKEY}&redirect_uri=http://localhost:3000/socialLogin`)
    .then(res => console.log(res))
  }

  return (
    <SCContainer>
      <Nav />

      <SCSocialContainier>
        <SCLoginContainer>
          {/* <SCKakao token={process.env.KAKAORESTKEY!} onSuccess={success} onFail={fail}/> */}
          <button onClick={click}>로그아웃</button>
        </SCLoginContainer>
      </SCSocialContainier>
    </SCContainer>
  );
};

export default SocialLogin;