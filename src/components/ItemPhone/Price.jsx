import styles from "./ItemPhone.module.css";

const Price = ({ price }) => {
    return (
        <p className={styles.price}>
            {new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "USD",
            }).format(price)}
        </p>
    );
};
export default Price;
