import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home/home";
import TableChampions from "../Components/Pages/faccion/TableChampions";
import Faccion from "../Components/Pages/faccion";

const IndexRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/WELCOME" element={<Faccion />} />
                <Route path="/CHAMPIONS" element={<TableChampions />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default IndexRoutes
