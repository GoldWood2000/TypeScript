interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}


interface IAction extends ISwim, IFly {
  action: () => void
}

const action: IAction = {
  action() {

  },

  swimming() {

  },
  flying() {

  }
}

export { }

