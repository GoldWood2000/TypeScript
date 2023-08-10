export namespace RealCurrency {
  export class WeChatPaySDK { }

  export class ALiPaySDK { }

  export class MeiTuanPaySDK { }

  export class CreditCardPaySDK { }

  export function leo() { }
}

export namespace VirtualCurrency {
  export class QQCoinPaySDK { }

  export namespace BlockChainCurrency {
    export class BitCoinPaySDK { }

    export class ETHPaySDK { }
  }
}

const weChatPaySDK = new RealCurrency.WeChatPaySDK()
const leo = RealCurrency.leo()

const ethPaySDK = new VirtualCurrency.BlockChainCurrency.ETHPaySDK();