/*
 * @Author: Molly Pan
 * @Date: 2022-07-13 16:56:27
 * @LastEditTime: 2022-07-13 17:30:44
 * @FilePath: /pinia-examples/src/api/shop.ts
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */
export interface IProduct {
    id: number
    title: string
    price: number
    inventory: number
}

const _products: IProduct[] = [
    { id: 1, title: 'iPad 4 mini', price: 500, inventory: 2 },
    { id: 2, title: 'muji T-shirt White', price: 10.99, inventory: 10 },
    { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 }
]

export const getProducts = async () => {
    await wait(100)
    return _products
}

export const buyProducts = async () => {
    await wait(100)
    return Math.random() > 0.5
}

async function wait(delay: number) {
    return new Promise(resolve => setTimeout(resolve, delay))
}