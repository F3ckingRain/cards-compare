import card from "@/assets/cards/cardFirstType.png";
import otherCard from "@/assets/cards/cardSecondType.png";

type cardItemType = {
    id: number;
    image: string;
    opened: boolean;
};

const initialCardsState: cardItemType[] = [
    { image: card, opened: false, id: 1 },
    { image: otherCard, opened: false, id: 2 },
    { image: card, opened: false, id: 3 },
    { image: otherCard, opened: false, id: 4 },
    { image: card, opened: false, id: 5 },
    { image: otherCard, opened: false, id: 6 },
];

export { cardItemType, initialCardsState };
