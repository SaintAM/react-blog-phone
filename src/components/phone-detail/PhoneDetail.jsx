import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemPhone from "../ItemPhone/ItemPhone";
import { PhoneService } from "../../services/phone.service";

const PhoneDetail = () => {
    const { id } = useParams();
    const [phone, setPhone] = useState({});

    useEffect(() => {
        if (!id) return;
        
        const fetchData = async () => {
            const data = await PhoneService.getById(id);
            setPhone(data);
        };
        fetchData();
    }, [id]);

    if (!phone?.name) return <p>Loading...</p>;

    return (
        <div>
            <Link to='/' className="btn">Назад</Link>
            <ItemPhone iphone={phone} />
        </div>
    );
};

export default PhoneDetail;
