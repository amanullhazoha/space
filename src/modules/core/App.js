import "./style/scss/index.scss";
import Header from "./components/header.component";
import { Home } from "../user";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer.component";
import NotFound from "./components/not-found.component";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
            <Footer />
        </>

    );
}
 
export default App;
