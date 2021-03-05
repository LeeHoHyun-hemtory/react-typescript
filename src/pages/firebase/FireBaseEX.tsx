import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from './FireBase';
import mixin from '../../styles/mixin';
import Nav from '../../component/nav/Nav';

interface IPropsUserData {
  id: string;
  user: string;
  age: number;
};

const SCContainer = styled.div`
  ${mixin.flexSet()};
  height: 100vh;
`;

const SCInnerContainer = styled.div`
  width: 80%;
  height: 80%;
  ${mixin.flexSet()};
`;

const SCInfoContainer = styled.div`
  width: 100%;
  ${mixin.flexSet('center', 'center', 'row')};

  margin-bottom: 10px;
`;

const SCButton = styled.button`
  margin-left: 10px;
`;

const FirebaseDB = () => {
  const [datas, setDatas] = useState<IPropsUserData[]>([]);
  const [user, setUser] = useState('');
  const [age, setAge] = useState('');
  const userRef = firebase.database().ref('users');

  useEffect(() => {
    userRef.on('value', (snapshot: any) => {
      const users = snapshot.val();
      const usersData: IPropsUserData[] = [];
      for(let id in users) {
        usersData.push({ ...users[id], id });
      }
      
      setDatas(usersData);
    })
  }, []);

  const onClickAdd = () => {
    const userData = { user, age };
    
    userRef.push(userData);
    setUser('');
    setAge('');
  }
  
  const onClickRemove = (id: string) => {
    userRef.child(id).remove();
  }
  
  const onUpdate = (id: string) => {
    const [user] = datas.filter(el => el.id === id);
    
    userRef.child(id).update({
      age: user.age++
    });
    
    setDatas(datas.map(el => el.id === id ? {...el, age: el.age++} : el));
  };
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'user' ? setUser(e.target.value) : setAge(e.target.value);
  }

  return (
    <SCContainer>
      <Nav />
      <SCInnerContainer>
        <div>
          {datas?.map(data => <SCInfoContainer key={data.id}>
            <div>
              이름: {data.user}
              <br />
              나이: {data.age}
            </div>
            <SCButton onClick={() => onUpdate(data.id)}>수정</SCButton> <SCButton onClick={() => onClickRemove(data.id)}>삭제</SCButton>
          </SCInfoContainer>
          )}
        </div>
        <div>
          <input onChange={onChange} name='user' placeholder='user' value={user}></input>
          <input onChange={onChange} name='age' placeholder='age' value={age}></input>
          <SCButton onClick={onClickAdd}>추가하기</SCButton>
        </div>
      </SCInnerContainer>
    </SCContainer>
  );
};

export default FirebaseDB;