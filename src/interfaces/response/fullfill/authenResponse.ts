import type { IUser } from "../../user"

export interface IAuthenResponse {
    message: string
    user: IUser
}