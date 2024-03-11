import { useCallback, useMemo } from "react";

import useModalState from "@/store/modalState/modalState";
import { initialModalState } from "@/store/modalState";

const ModalModel = () => {
    const [state, setState] = useModalState();

    const openModalHandler = useCallback(
        (name: string) => {
            setState({ name, opened: true });
        },
        [setState],
    );

    const closeModalHandler = useCallback(() => {
        setState(initialModalState);
    }, [setState]);

    const result = useMemo(
        () => ({
            modalState: state,
            openModalHandler,
            closeModalHandler,
        }),
        [state, openModalHandler, closeModalHandler],
    );

    return { ...result };
};

export default ModalModel;
