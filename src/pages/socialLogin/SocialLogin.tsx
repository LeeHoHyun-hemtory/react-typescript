import React from 'react';
import styled from 'styled-components';
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
  background: #709970;
`;

const SocialLogin = () => {
  return (
    <SCContainer>
      <Nav />

      <SCSocialContainier>
        <SCLoginContainer>

        </SCLoginContainer>
      </SCSocialContainier>
    </SCContainer>
  );
};

export default SocialLogin;