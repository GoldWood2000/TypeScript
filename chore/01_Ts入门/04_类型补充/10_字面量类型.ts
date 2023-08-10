//字面量类型的意义配合联合类型
type Aligment = 'left' | 'right' | 'center'

const foo: Aligment = 'left';

type Methed = 'GET' | 'POST'
function request(url: string, methed: Methed) {

}

type foo = {
    url: string,
    methed: Methed
}

let option: foo = {
    url: 'http://www.baidu.com',
    methed: 'POST'
}

//字面量推理
// let option = {
//     url: 'http://www.baidu.com',
//     methed: 'POST'
// } as const
// request(option.url, option.methed as Methed)       //第一种
request(option.url, option.methed)

//readonly
// const payload = {
//     fullName: 'Pandhu Wibowo',
//     characteristics: ["man", 25, "husband"]
// } as const

// payload.characteristics.push('a')

export type PageContent =
    | string
    | {
        url: string;
        thumbnailUrl?: string;
        width?: number;
        height?: number;
    };
export { }