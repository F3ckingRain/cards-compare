import card from "@/assets/cards/1200px-French_suits.svg.png";

type cardItemType = {
  id: number;
  image: string;
  opened: boolean;
};

const initialCardsState: cardItemType[] = [
  { image: card, opened: false, id: 1 },
];

export { cardItemType, initialCardsState };
