import type InputProps from "./InputProps";

export default function EmailInput({ value, onChangeVal }: InputProps) {
    return (
        <input type="text" placeholder='Email' name="email"
            value={value} onChange={onChangeVal} />
    )
}
