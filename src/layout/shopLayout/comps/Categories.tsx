import type { MouseEventHandler, PropsWithChildren } from "react"
import type { NavLinkRenderProps } from "react-router"

import { useState } from "react"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router"

interface HeadingProps extends PropsWithChildren {
    onclick: MouseEventHandler<HTMLHeadingElement>
    className: string
    isActive: boolean
}
function Heading({ children, className, isActive, onclick }: HeadingProps) {
    return (
        <h3 className={`flex justify-between items-center bg-zinc-100 py-2 px-4 uppercase ${className}`} onClick={onclick}>
            <span>{children}</span>
            {!isActive ?
                <FontAwesomeIcon icon={faCaretDown} /> :
                <FontAwesomeIcon icon={faCaretUp} />
            }
        </h3>
    )
}

function navLinkStateClass({ isActive }: NavLinkRenderProps) {
    return isActive ? 'link-active px-4 text-zinc-400' : 'px-4 text-zinc-400'
}

function Categories_1() {
    const [height, setHeight] = useState('h-0')
    const isActive = height === 'h-0' ? false : true
    function toggle() {
        setHeight(prev => {
            if (prev === 'h-0') return 'h-28'
            else return 'h-0'
        })
    }
    return (
        <>
            <Heading onclick={toggle} className="hover:cursor-pointer" isActive={isActive} >Iphone & Mac</Heading>
            <div className={`flex flex-col gap-4 overflow-hidden duration-150 ${height}`}>
                <NavLink to='iphone' className={navLinkStateClass}>Iphone</NavLink>
                <NavLink to='ipad' className={navLinkStateClass}>Ipad</NavLink>
                <NavLink to='macbook' className={navLinkStateClass}>Macbook</NavLink>
            </div>
        </>
    )
}

function Categories_2() {
    const [height, setHeight] = useState('h-0')
    const isActive = height === 'h-0' ? false : true

    function toggle() {
        setHeight(prev => {
            if (prev === 'h-0') return 'h-28'
            else return 'h-0'
        })
    }
    return (
        <>
            <Heading onclick={toggle} className="hover:cursor-pointer" isActive={isActive}>Wireless</Heading>
            <div className={`flex flex-col gap-4 overflow-hidden duration-150 ${height}`}>
                <NavLink to='airpod' className={navLinkStateClass}>Airpod</NavLink>
                <NavLink to='watch' className={navLinkStateClass}>Watch</NavLink>
            </div>
        </>
    )
}

function Categories_3() {
    const [height, setHeight] = useState('h-0')
    const isActive = height === 'h-0' ? false : true

    function toggle() {
        setHeight(prev => {
            if (prev === 'h-0') return 'h-28'
            else return 'h-0'
        })
    }
    return (
        <>
            <Heading onclick={toggle} className="hover:cursor-pointer" isActive={isActive}>Other</Heading>
            <div className={`flex flex-col gap-4 overflow-hidden duration-150 ${height}`}>
                <NavLink to='mouse' className={navLinkStateClass}>Mouse</NavLink>
                <NavLink to='keyboard' className={navLinkStateClass}>Keyboard</NavLink>
                <NavLink to='other' className={navLinkStateClass}>Other</NavLink>
            </div>
        </>
    )
}

interface Props {
    className?: string
}
export default function Categories({ className }: Props) {
    return (
        <div className={`hidden md:flex flex-col gap-4 italic ${className}`}>
            <h4 className="uppercase text-2xl">Categories</h4>
            <h1 className="text-white bg-zinc-950 py-2 px-4 uppercase">Apple</h1>
            <NavLink to='' className={navLinkStateClass}>All</NavLink>
            <Categories_1 />
            <Categories_2 />
            <Categories_3 />
        </div>
    )
}