import type { IUser } from "../../../../interfaces/user";

export type UserRegister = IUser & {
    password: string;
    confirmPassword: string;
}
