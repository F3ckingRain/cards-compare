import React, { memo, useCallback } from "react";

import styles from "./Card.module.scss";
import { cardItemType } from "@/store/cardsState";
import { CallbackType } from "@/types/default";

interface CardProps extends cardItemType {
  toggleOpened: CallbackType<(id: number) => void>;
}

function Card({ image, opened, toggleOpened, id }: CardProps) {
  const clickHandler = useCallback(() => {
    toggleOpened(id);
  }, [id, toggleOpened]);

  return (
    <button
      className={opened ? `${styles.card} ${styles.card__opened}` : styles.card}
      type={"button"}
      onClick={clickHandler}
    >
      <img className={styles.img} alt={""} src={image} />
    </button>
  );
}

export default memo(Card);
