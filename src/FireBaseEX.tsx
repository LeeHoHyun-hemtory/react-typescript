import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from './FireBase';
import mixin from './styles/mixin';

interface IPropsUserData {
  id: string;
  user: string;
  age: number;
};

const STDContainer = styled.div`
  ${mixin.flexSet()};
  height: 100vh;
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'user' ? setUser(e.target.value) : setAge(e.target.value);
  }

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
  
  return (
    <STDContainer>
      <div>
        {datas?.map(data => <div key={data.id}>
          <div>
            이름: {data.user}
            <br />
            나이: {data.age}
          </div>
          <button onClick={() => onUpdate(data.id)}>수정</button> <button onClick={() => onClickRemove(data.id)}>삭제</button>
        </div>
        )}
      </div>
      <div>
        <input onChange={onChange} name='user' placeholder='user' value={user}></input>
        <input onChange={onChange} name='age' placeholder='age' value={age}></input>
        <button onClick={onClickAdd}>추가하기</button>
      </div>
    </STDContainer>
  );
};

export default FirebaseDB;