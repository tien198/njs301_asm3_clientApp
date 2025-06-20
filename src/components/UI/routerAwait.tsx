import { Suspense, type PropsWithChildren } from "react";
import Fallback from "./Fallback";
import { Await } from "react-router";

type Props = {
    resolve: Promise<any>
} & PropsWithChildren

export default function ({ resolve, children }: Props) {

    return (
        <Suspense fallback={<Fallback />}>
            <Await resolve={resolve}>
                {children}
            </Await>
        </Suspense>
    )
}