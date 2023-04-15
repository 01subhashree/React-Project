import { atom } from 'recoil'

export const cartData = atom({
    key: "cartData",
    default: [],
})
export const selectedProductData = atom({
    key: "selectedProductData",
    default: "",
})
export const Quantity = atom({
    key: "Quantity",
    default: ""
})