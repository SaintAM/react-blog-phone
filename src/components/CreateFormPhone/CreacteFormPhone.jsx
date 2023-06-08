import { useState } from "react";
import styles from "./CreateFormPhone.module.css";

const CreateFormPhone = ({ setIphone }) => {
    const clearForm = {
        name: "",
        price: "",
        image: "",
    };
    const [data, setData] = useState(clearForm);
    const createPhone = (e) => {
        e.preventDefault();
        setIphone((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
        setData(clearForm);
    };
    return (
        <form className={styles.form}>
            <p>Добавить Iphone</p> 
            <input
                placeholder="Name"
                value={data.name}
                onChange={(e) =>
                    setData((prev) => ({
                        ...prev,
                        name: e.target.value,
                    }))
                }
            />
            <input
                placeholder="Price"
                value={data.price}
                onChange={(e) =>
                    setData((prev) => ({
                        ...prev,
                        price: e.target.value ,
                    }))
                }
            />
            <input
                placeholder="Image"
                value={data.image}
                onChange={(e) =>
                    setData((prev) => ({
                        ...prev,
                        image: e.target.value,
                    }))
                }
            />
            <button onClick={(e) => createPhone(e)} className="btn">
                Создать
            </button>
        </form>
    );
};
export default CreateFormPhone;
