import { useState } from 'react';
import { useTodoDispatch } from '../App';

interface Props {
  // onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();
  // useState라는 메서드에 초기값으로 전달한 인수에 따라
  // state 변수와 state 변화함수의 타입을 자동으로 추론해준다.
  // useState같은 함수를 제네릭 함수라고 한다.
  const [text, setText] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput}></input>
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
