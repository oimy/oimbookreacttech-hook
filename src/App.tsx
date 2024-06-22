import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UseDeferredValueruitBox from "./tech-use-deferred-value/FruitBox";
import UseTransitionFruitBox from "./tech-use-transition/FruitBox";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UseDeferredValueruitBox />} />
                    <Route path="/use-transition" element={<UseTransitionFruitBox />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
