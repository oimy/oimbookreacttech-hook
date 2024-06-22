import { useDeferredValue, useState } from "react";
import "./FruitBox.scss";
import FruitList from "./FruitList";

export default function FruitBox() {
    // const nameInputRef = useRef<HTMLInputElement>(null);
    const [inputtedName, setInputtedName] = useState<string>("");
    const deferredInputtedName = useDeferredValue<string>(inputtedName);

    console.log(`deferred input : ${deferredInputtedName}`);

    return (
        <div className="tech-use-deferred-value">
            <div className="container">
                <div className="box">
                    <p className="title">Fruits</p>
                    <input
                        className="name"
                        value={inputtedName}
                        onChange={(e) => {
                            setInputtedName(e.target.value);
                        }}
                    />
                    <FruitList query={deferredInputtedName} />
                </div>
            </div>
        </div>
    );
}
