import useCardsState from "@/store/cardsState/cardsState";
import { useCallback, useEffect, useMemo } from "react";

const CardModel = () => {
  const [state, setState] = useCardsState();

  const openedCards = state.filter((el) => el.opened);

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

  const compareTwoCards = useCallback(
    (firstId: number, secondId: number) => {
      const firstElem = state.find((el) => el.id === firstId)!;
      const secondElem = state.find((el) => el.id === secondId)!;

      return firstElem.image === secondElem.image;
    },
    [state],
  );

  const closeAllCards = useCallback(() => {
    setState((s) => s.map((el) => ({ ...el, opened: false })));
  }, []);

  useEffect(() => {
    if (openedCards.length != 2) return;

    const cardsCompare = compareTwoCards(
      openedCards.at(0)!.id,
      openedCards.at(1)!.id,
    );

    if (!cardsCompare) setTimeout(() => closeAllCards(), 1000);
  }, [openedCards, closeAllCards, compareTwoCards]);

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
