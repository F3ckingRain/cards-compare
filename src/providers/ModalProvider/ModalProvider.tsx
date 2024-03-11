import React, { lazy, Suspense } from "react";
import { createPortal } from "react-dom";

import styles from "./ModalProvider.module.scss";
import ModalModel from "@/models/ModalModel/ModalModel";
import { AUTH_MODAL_KEY } from "@/components/Modals/AuthModal/AuthModal";

const AuthModal = lazy(() => import("@/components/Modals/AuthModal/AuthModal"));

function ModalProvider() {
    const { closeModalHandler, modalState } = ModalModel();
    const { name, opened } = modalState;

    const root = document.getElementById("root")!;

    const isAuthModalOpened = name === AUTH_MODAL_KEY && opened;

    if (!opened) return null;

    return createPortal(
        <Suspense fallback={"Загрузка модального окна"}>
            <dialog
                className={styles.modalContainer}
                onClick={closeModalHandler}
            >
                <AuthModal
                    opened={isAuthModalOpened}
                    closeHandler={closeModalHandler}
                />
            </dialog>
        </Suspense>,
        root,
    );
}

export default ModalProvider;
