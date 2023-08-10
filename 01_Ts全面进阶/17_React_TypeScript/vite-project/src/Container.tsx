import React, { useState, useReducer, useRef } from 'react';
import type { PropsWithChildren } from 'react';

interface IContainerProps {
  visible: boolean;
  controller: () => void;
}


// type RFC = (props: IContainerProps) => JSX.Element
// type T = (props: IContainerProps) => void
// const a: T = () => {

// }


// const Container: React.FC<IContainerProps> = ({
//   visible = false,
//   controller = () => { }
// }: IContainerProps): JSX.Element => {
//   return <div>leo</div>
// }


// function Foo<T>(r: T) {

// }
// Foo('leo')

interface IData {
  name: string;
  age: number
}

const Container: React.FC<PropsWithChildren<IContainerProps>> = ({
  visible = false,
  controller = () => { },
  children
}) => {
  // 推导为 string 类型
  const [name, setName] = useState('leo');
  // 此时类型为 string | undefined
  const [state2, setState2] = useState<string>();

  const [state3, setState3] = useState<IData>({} as IData);

  const [state4, setState4] = useState<Partial<IData>>({} as IData);

  const domRef = useRef<HTMLDivElement>(null)
  const valueRef = useRef<number>(18)


  return <div ref={domRef}>
    leo
    {children}
    <button onClick={() => {
      setState3({
        name: 'leo',
        age: 1
      })
    }}>setState3</button>
  </div>
}

export default Container