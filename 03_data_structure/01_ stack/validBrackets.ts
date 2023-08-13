import ArrayStack from './ArrayStack';

const stack = new ArrayStack<string>()

//({}){}[]
const validBrackets = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    switch (true) {
      case char === '(':
        stack.push(')')
        break;
      case char === '{':
        stack.push('}')
        break;
      case char === '[':
        stack.push(']')
        break;
      default:
        const reverse = stack.pop()
        if (reverse !== char) return false
    }
  }
  return stack.isEmpty()
}

console.log(validBrackets('({}){}[]'));
