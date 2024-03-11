import React, { useCallback } from "react";
import ModalModel from "@/models/ModalModel/ModalModel";
import { AUTH_MODAL_KEY } from "@/components/Modals/AuthModal/AuthModal";

function Header() {
    const { openModalHandler } = ModalModel();

    const openAuthModalHandler = useCallback(() => {
        openModalHandler(AUTH_MODAL_KEY);
    }, [openModalHandler]);

    return (
        <header>
            <span>header</span>

            <button onClick={openAuthModalHandler}>Auth</button>
        </header>
    );
}

export default Header;
