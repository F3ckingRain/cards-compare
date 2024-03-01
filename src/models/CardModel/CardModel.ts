import useCardsState from "@/store/cardsState/cardsState";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cardItemType } from "@/store/cardsState";

const CardModel = () => {
  const [state, setState] = useCardsState();

  const [openedCards, setOpenedCards] = useState<cardItemType[]>([]);

  const toggleCard = useCallback(
    (id: number) => {
      const currentCard = state.findIndex((el) => el.id === id);
      setOpenedCards((cards) => [...cards, state[currentCard]]);

      const newArr = state.map((el, index) => {
        if (index !== currentCard) return el;

        return { ...el, opened: !el.opened };
      });

      return setState(newArr);
    },
    [state],
  );

  const compareTwoCards = useCallback(
    (firstImage: string, secondImage: string) => {
      return firstImage === secondImage;
    },
    [state],
  );

  const closeAllCards = useCallback(() => {
    setState((s) => s.map((el) => ({ ...el, opened: false })));
    setOpenedCards([]);
  }, []);

  useEffect(() => {
    if (openedCards.length < 2 || openedCards.length % 2 !== 0) return;

    const cardsCompare = compareTwoCards(
      openedCards.at(-1)!.image,
      openedCards.at(-2)!.image,
    );

    if (!cardsCompare) setTimeout(() => closeAllCards(), 1000);
  }, [openedCards, compareTwoCards]);

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
