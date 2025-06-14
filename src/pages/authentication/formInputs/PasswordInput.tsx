import type InputProps from "./InputProps";

export default function PasswordInput({ value, onChangeVal }: InputProps) {
    return (
        <input type="password" placeholder='Password'
            value={value} onChange={onChangeVal} />
    )
}