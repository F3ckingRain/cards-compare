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
        [state, setState],
    );

    const compareTwoCards = useCallback(
        (firstImage: string, secondImage: string) => {
            return firstImage === secondImage;
        },
        [],
    );

    const closeAllCards = useCallback(() => {
        setState((s) => s.map((el) => ({ ...el, opened: false })));
        setOpenedCards([]);
    }, [setState]);

    useEffect(() => {
        if (openedCards.length < 2 || openedCards.length % 2 !== 0) return;

        const cardsCompare = compareTwoCards(
            openedCards.at(-1)!.image,
            openedCards.at(-2)!.image,
        );

        if (!cardsCompare) setTimeout(() => closeAllCards(), 1000);
    }, [openedCards, compareTwoCards, closeAllCards]);

    const model = useMemo(
        () => ({
            cards: state,
            toggleCard,
        }),
        [state, toggleCard],
    );

    return { ...model };
};

export default CardModel;
