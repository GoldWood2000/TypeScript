interface IQueue<T> {
  enqueue: (v: T) => void;
  dequque(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number
}


export default IQueue