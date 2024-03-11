import { Nullable } from "@/types/default";

type modalStateType = {
    name: Nullable<string>;
    opened: boolean;
};

const initialModalState: modalStateType = {
    name: null,
    opened: false,
};

export { modalStateType, initialModalState };
