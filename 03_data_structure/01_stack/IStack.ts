interface IStack<T> {
  push: (v: T) => void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number
}


export default IStack