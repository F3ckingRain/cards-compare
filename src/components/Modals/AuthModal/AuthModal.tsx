import React from "react";
import styles from "./AuthModal.module.scss";
import { ModalDefaultProps } from "@/components/Modals/types";

interface AuthModalProps extends ModalDefaultProps {}

export const AUTH_MODAL_KEY = "authModal";

function AuthModal({ opened, closeHandler }: AuthModalProps) {
    if (!opened) return null;

    return (
        <div className={styles.authModal} onClick={(e) => e.stopPropagation()}>
            <span>modal</span>

            <button onClick={closeHandler}>X</button>
        </div>
    );
}

export default AuthModal;
