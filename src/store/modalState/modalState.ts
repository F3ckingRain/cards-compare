import { atom, useRecoilState } from "recoil";
import { initialModalState } from "@/store/modalState/index";

export const modalState = atom({
    key: "modal",
    default: initialModalState,
});

const useModalState = () => useRecoilState(modalState);

export default useModalState;
