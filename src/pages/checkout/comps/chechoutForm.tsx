import type { FormEvent } from "react";
import type { ICartItem } from "../../../interfaces/cartItem";

import { useState } from "react";
import useTwoWayBinding_Validate from "../../../hooks/useTwoWayBinding_Validate";
import { isNotNull } from "../../../ultil/inputValidationUltil/validate";
import { AddressInput, EmailInput, NameInput, PhoneNumberInput } from "../formInputs/Inputs";
import DarkButton from "../../../components/UI/DarkButton";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useSubmit } from "react-router";


function createOrder(fullName: string, email: string, phoneNumber: number, address: string, cartItems: ICartItem[]) {
    return {
        shippingTracking: {
            fullName, email, phone: String(phoneNumber), address,
        },
        items: cartItems.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
        }))
    }
}


interface Props {
    className: string
}
export default function CheckoutForm({ className }: Props) {
    const [fullName, onChangeFullName, errorNameMsg] = useTwoWayBinding_Validate<string>('Full name', [isNotNull])
    const [email, onChangeEmail, errorEmailMsg] = useTwoWayBinding_Validate<string>('Email', [isNotNull])
    const [phoneNumber, onChangePhoneNumber, errorPhoneNumberMsg] = useTwoWayBinding_Validate<number>('Phone number', [isNotNull])
    const [address, onChangeAddress, errorAddressMsg] = useTwoWayBinding_Validate<string>('Address', [isNotNull])

    const cartItems = useAppSelector(state => state.cart.items)

    const [isSubmited, setIsSubmited] = useState(false)
    const submit = useSubmit()
    function onSubmit(e: FormEvent) {
        e.preventDefault()
        setIsSubmited(true)

        // Call API
        if (errorNameMsg || errorEmailMsg || errorPhoneNumberMsg || errorAddressMsg)
            return null

        const order = createOrder(fullName, email, phoneNumber, address, cartItems)

        submit(order, {
            method: 'post', encType: 'application/json'
        })

    }
    return (
        <form onSubmit={onSubmit} className={`flex flex-col gap-5 ${className}`}>
            <NameInput val={fullName} onChangeVal={onChangeFullName} invalidMsg={isSubmited ? errorNameMsg : ''} />
            <EmailInput val={email} onChangeVal={onChangeEmail} invalidMsg={isSubmited ? errorEmailMsg : ''} />
            <PhoneNumberInput val={phoneNumber} onChangeVal={onChangePhoneNumber} invalidMsg={isSubmited ? errorPhoneNumberMsg : ''} />
            <AddressInput val={address} onChangeVal={onChangeAddress} invalidMsg={isSubmited ? errorAddressMsg : ''} />
            <div>
                <DarkButton className="py-3 px-10 italic text-lg">Place order</DarkButton>
            </div>
        </form >
    );
}




