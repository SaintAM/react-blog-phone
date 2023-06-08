import ItemPhone from "../ItemPhone/ItemPhone";
import styles from "./Home.module.css";
// import { iphone as iphoneData } from "../../../data";
import CreateFormPhone from "../CreateFormPhone/CreacteFormPhone";
import { useEffect, useState } from "react";
import { PhoneService } from "../../services/phone.service";
import { useNavigate } from "react-router";

const Home = () => {
    const [iphone, setIphone] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await PhoneService.getAll();
            setIphone(data);
        };
        fetchData();
    }, []);
    

    return (
        <div className={styles.wrapper}>
            <CreateFormPhone setIphone={setIphone} />
            <div className={styles.screens}>
                <h1 className={styles.title}>Iphone catalog</h1>
                {iphone.length ? (
                    iphone.map((item) => (
                        <ItemPhone key={item.id} iphone={item} />
                    ))
                ) : (
                    <p>There are no phone</p>
                )}
            </div>
        </div>
    );
};
export default Home;
