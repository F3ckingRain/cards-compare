import React, { Fragment, useRef } from "react";
import CardModel from "@/models/CardModel/CardModel";
import Card from "@/components/Card/Card";
import styles from "./CardsContainer.module.scss";

function CardsContainer() {
    const ref = useRef<HTMLDivElement>(null);

    const { cards, toggleCard } = CardModel();

    return (
        <div className={styles.container} ref={ref}>
            {cards.map((el, index) => (
                <Fragment key={`${el.image}_${index + 1}`}>
                    <Card {...el} toggleOpened={toggleCard} />
                </Fragment>
            ))}
        </div>
    );
}

export default CardsContainer;
