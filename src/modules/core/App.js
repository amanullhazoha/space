import "./style/sass/index.scss";
import Header from "./components/header.component";
import { Home } from "../user";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
            </Routes>
        </>

    );
}
 
export default App;
