import { type PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setHideClass } from "../../store/slices/modalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// css
import styles from './Modal.module.css'


export function useHideModal() {
    const dispatch = useAppDispatch()
    return () => dispatch(setHideClass('fading-hidden'))

}



type Props = {
    onCloseFnc?: () => void
} & PropsWithChildren

function Modal({ children, onCloseFnc }: Props) {
    const hidden = useAppSelector(({ modal }) => modal.hiddenClass)

    const hide = useHideModal()

    const closeModal = () => {
        onCloseFnc?.()
        hide()
    }

    useEffect(() => {
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape')
                hide()
        })
    }, [])

    return createPortal(
        <div className={hidden}>
            <div className={styles['backdrop']} onClick={() => closeModal()}></div>
            <div className={`${styles['modal']} `}>
                <FontAwesomeIcon icon={faXmark} onClick={() => closeModal()} className="fixed top-4 right-10 text-3xl lg:top-7 lg:text-4xl hover:cursor-pointer" />
                {children}
            </div>
        </div>,
        document.getElementById('modal')!
    );
}

export default Modal;