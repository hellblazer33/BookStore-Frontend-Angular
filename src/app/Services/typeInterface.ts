export interface Ilogin {
    email: string,
    password: string
}
export interface Iregister {
    fullname: string,
    email: string,
    password: string,
    mobileNumber: string
}
export interface IaddToCart {
    bookId: Number,
    quantity: Number
}
export interface IdeleteFromCart {
    cartId: Number
}
export interface IupdateCartQty {
    cartId: Number,
    bookQuantity: 1
}
export interface IdeleteFromWishlist {
    wishlistId: Number
}
export type IaddToWishlist = {
    bookId: Number
}
export interface IaddOrder {
    userId:Number
    addressId: Number,
    bookId: any
    quantity: Number
}
export interface IaddAddress {
    // fullName: string,
    // mobilileNumber: string,
    address: string,
    city: string,
    state: string,
    typeId: Number
}

export interface IaddFeedback {
    comment: string,
    bookId: Number
}
export interface IaddBook {
    bookTitle: string,
    author: string,
    rating: Number,
    ratedCount: Number,
    discountedPrice: Number,
    actualPrice: Number,
    description: string,
    bookQuantity: Number,
    image: string,
}
export interface IdeleteBook {
    bookId: number
}
export interface IforgetPassword{
    emailId:string
}
export interface IresetPassword{
    newPassword:string,
    confirmPassword:string
}
