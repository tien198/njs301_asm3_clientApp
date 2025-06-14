import type IUser from "../interfaces/IUser";

export default class User implements IUser {
    static fromObject(user: any) {
        return new User(user?.email, user?.name, user?.phone)
    }
    constructor(email: string, name?: string, phone?: string | number) {
        this.email = email
        this.name = name || ''
        this.phone = phone || ''
    }
    email: string
    password?: string
    name?: string
    phone?: string | number | undefined;
}