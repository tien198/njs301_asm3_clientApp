import type IUser from "../../user"

export default interface IAuthenResponse {
    message: string
    user: IUser
}