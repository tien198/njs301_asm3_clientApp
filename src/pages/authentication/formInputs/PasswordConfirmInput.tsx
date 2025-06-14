import type InputProps from "./InputProps";

export default function PasswordConfirmInput({ value, onChangeVal }: InputProps) {
    return (
        <input type="password" placeholder='Confirm Password'
            value={value} onChange={onChangeVal} />
    )
}
