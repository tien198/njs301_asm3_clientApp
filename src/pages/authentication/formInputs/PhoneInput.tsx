import type InputProps from "./InputProps";

export default function PhoneInput({ value, onChangeVal }: InputProps) {
    return (
        <input type="number" placeholder='Phone'
            value={value} onChange={onChangeVal} />
    )
}