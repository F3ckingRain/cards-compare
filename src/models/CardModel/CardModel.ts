import useCardsState from "@/store/cardsState/cardsState";
import { useCallback, useMemo } from "react";

const CardModel = () => {
  const [state, setState] = useCardsState();

  const toggleCard = useCallback(
    (id: number) => {
      const currentCard = state.findIndex((el) => el.id === id);
      const newArr = state.map((el, index) => {
        if (index !== currentCard) return el;

        return { ...el, opened: !el.opened };
      });

      return setState(newArr);
    },
    [state],
  );

  const model = useMemo(
    () => ({
      cards: state,
      toggleCard,
    }),
    [state],
  );

  return { ...model };
};

export default CardModel;
