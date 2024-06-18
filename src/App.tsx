import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FruitBox from "./tech-use-transition/FruitBox";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FruitBox />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
