import type { ButtonHTMLAttributes } from "react";


export default function DarkButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} className={`bg-zinc-900 text-white ${props.className}`}>
        {props.children}
    </button>
}
