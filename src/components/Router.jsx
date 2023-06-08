import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import PhoneDetail from "./phone-detail/PhoneDetail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<PhoneDetail />} path="/phone/:id" />
                <Route path="*" element={<div>Not found</div>} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
