//tuple 元组: 多种元素的组合
const t: [string, number, number] = ['leo', 18, 1.8]
console.log(t);

function useState<T>(state: T): [T, (newState: T) => void] {
    let current = state;

    const setState = (newState: T) => {
        current = newState;
    }

    const tuple: [T, (newState: T) => void] = [current, setState];

    return tuple
}


const [state, setState] = useState(10);
