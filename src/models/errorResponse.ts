import type { IRes } from "../interfaces/response";

export default class ErrorRes<T extends object = Record<string, any>> implements IRes {
    status?: number;
    statusText?: string;
    data?: T;

    constructor(status?: number, statusText?: string, data?: T) {
        this.status = status;
        this.statusText = statusText;
        this.data = data;
    }
}