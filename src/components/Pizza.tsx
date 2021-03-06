import React from "react";

import styles from "./pizza.module.css";
interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}
interface Props {
  pizza: Pizza;
}
const Pizza: React.FC<Props> = ({ pizza }) => {
  return (
    <li className={styles.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
    </li>
  );
};

export default Pizza;
