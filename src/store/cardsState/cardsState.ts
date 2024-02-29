import { atom, useRecoilState } from "recoil";
import { initialCardsState } from "@/store/cardsState/index";

export const cardsState = atom({
  key: "cards",
  default: initialCardsState,
});

const useCardsState = () => useRecoilState(cardsState);

export default useCardsState;
