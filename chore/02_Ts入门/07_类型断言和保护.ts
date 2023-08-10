interface Dog {
  fly: boolean;
  wang: () => {};
}

interface cat {
  fly: boolean;
  miao: () => {};
}

function foo(x: Dog | cat) {
  "wang" in x ? x.wang : x.miao();
}

export {};
