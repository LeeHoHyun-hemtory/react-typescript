import React from 'react';

interface Param {
  (name: string,
  age?: number,
  language?: string,): string
}

const Test = () => {
  function makeArr(defalutValue: number | string, size: number): number[] | string[]
  // function makeArr(defalutValue: string, size: string): string[]
  // @ts-ignore
  function makeArr(defalutValue, size) {
    const arr = [];
    for(let i = 0; i < size; i++) {
      arr.push(defalutValue);
    }
    return arr;
  }
  const arr1 = makeArr(1, 10)
console.log(arr1)
  return (
    <div>
      
    </div>
  );
};

export default Test;