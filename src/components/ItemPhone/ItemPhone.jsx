import { Link, useNavigate } from "react-router-dom";
import styles from "./ItemPhone.module.css";
import Price from "./Price";

const ItemPhone = ({ iphone }) => {
    const nav = useNavigate();
    return (
        <div className={styles.item}>
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${iphone.image})`,
                }}
            />
            <div className={styles.info}>
                <h2 className={styles.titleItem}>{iphone.name}</h2>
                <Price price={iphone.price} />
                <button className="btn">Купить</button>
                <Link className="btn" to={`/phone/${iphone.id}`}>
                    Подробней
                </Link>
                <button
                    className="btn1 btn"
                    onClick={() => nav(`/phone/${iphone.id}`)}
                >
                    nav
                </button>
            </div>
        </div>
    );
};

export default ItemPhone;
