import type { ModalImplementProps } from "./types/modalImplementProps"



import informModalStyle from './InformModal.module.css'

import Modal from "./Modal"
// import modalStore from "./store"
import { memo, useCallback } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { hide } from "../../store/modalSlice"




export default memo(function ErrorModal({ truthyFnc, falsyFnc, oncloseFnc }: ModalImplementProps) {
    const res = useAppSelector(state => state.response)
    const dispatch = useAppDispatch()

    const defTruthyFnc = useCallback(function () {
        dispatch(hide())
        truthyFnc?.()
    }, [])

    const defFalsyFnc = useCallback(function () {
        dispatch(hide())
        falsyFnc?.()
    }, [])

    let errorEntries: [string, string][] = []
    if (res?.data)
        errorEntries = Object.entries(res.data)

    return (
        <Modal onCloseFnc={oncloseFnc}>
            <div className={informModalStyle["container"]}>
                <span className={informModalStyle["status"]}>{res?.status}</span>
                <span>{res?.statusText}</span>
                <span className={informModalStyle['error-list']}>{
                    errorEntries.map(i =>
                        <span key={i[0]} >{i[1]}</span>
                    )
                }</span>
                <div className='flex justify-between items-center gap-10'>
                    <span><button className="text-white bg-gray-800 px-10 py-1.5 hover:bg-gray-950 hover:rounded" onClick={defTruthyFnc}>Ok</button></span>
                    <span><button className="px-6 py-1.5 border border-white hover:border hover:border-gray-800" onClick={defFalsyFnc}>Cancel</button></span>
                </div>
            </div>
        </Modal>
    )
})