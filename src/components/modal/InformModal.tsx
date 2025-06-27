import type { ModalImplementProps } from "./types/modalImplementProps"

import informModalStyle from './InformModal.module.css'

import Modal from "./Modal"
import { useCallback, type PropsWithChildren } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { hide, type ModalType } from "../../store/slices/modalSlice"



type Props = ModalImplementProps & PropsWithChildren

export default function InformModal({ truthyFnc, falsyFnc, oncloseFnc, children }: Props) {
    const dispatch = useAppDispatch()

    const defTruthyFnc = useCallback(function () {
        dispatch(hide())
        truthyFnc?.()
    }, [truthyFnc, dispatch])

    const defFalsyFnc = useCallback(function () {
        dispatch(hide())
        falsyFnc?.()
    }, [falsyFnc, dispatch])

    const modalType = useAppSelector(state => state.modal.type)
    if (modalType !== 'inform' as ModalType)
        return <></>

    return (
        <Modal onCloseFnc={oncloseFnc}>
            <div className={informModalStyle["container"]}>
                {children}
                <div className='flex justify-between items-center gap-10'>
                    <span><button className="text-white bg-gray-800 px-10 py-1.5 hover:bg-gray-950 hover:rounded" onClick={defTruthyFnc}>Ok</button></span>
                    <span><button className="px-6 py-1.5 border border-white hover:border hover:border-gray-800" onClick={defFalsyFnc}>Cancel</button></span>
                </div>
            </div>

        </Modal>
    )
}