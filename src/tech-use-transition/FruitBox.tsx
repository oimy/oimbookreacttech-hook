import { startTransition, useState } from "react";
import { useMount } from "../hooks/use-mount";
import "./FruitBox.scss";
import FruitList from "./FruitList";
import { Fruit } from "./model";

type Tab = "a-to-j" | "k-to-y" | "z-to-z";

export default function FruitBox() {
    const [tab, setTab] = useState<Tab>("a-to-j");
    const [aToJFruits, setAToJFruits] = useState<Fruit[]>([]);
    const [kToYFruits, setKToYFruits] = useState<Fruit[]>([]);
    const [zToZFruits, setZToZFruits] = useState<Fruit[]>([]);

    useMount(() => {
        import("./dataset/fruits.json").then((fruits) => {
            const sortedFruits = fruits.default.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            setAToJFruits(
                sortedFruits.filter((fruit) => /^[a-j]/i.test(fruit.name))
            );
            setKToYFruits(
                sortedFruits.filter((fruit) => /^[k-y]/i.test(fruit.name))
            );
            setZToZFruits(
                sortedFruits.filter((fruit) => /^[z-z]/i.test(fruit.name))
            );
        });
    });

    function handleClickTab(tab: Tab) {
        startTransition(() => {
            setTab(tab);
        });
    }

    return (
        <div className="tech-use-transition">
            <div className="container">
                <div className="box">
                    <p className="title">Fruits</p>
                    {/* <div className="background" aria-hidden>
                        <img className="logo" src="logo192.png" />
                    </div> */}
                    <div className="tab">
                        <button
                            className={tab === "a-to-j" ? "active" : ""}
                            onClick={() => handleClickTab("a-to-j")}
                        >
                            A - J
                        </button>
                        <button
                            className={tab === "k-to-y" ? "active" : ""}
                            onClick={() => handleClickTab("k-to-y")}
                        >
                            K - Y
                        </button>
                        <button
                            className={tab === "z-to-z" ? "active" : ""}
                            onClick={() => handleClickTab("z-to-z")}
                        >
                            Z - Z
                        </button>
                    </div>
                    {tab === "a-to-j" && (
                        <FruitList fruits={aToJFruits} slowLevel="none" />
                    )}
                    {tab === "k-to-y" && (
                        <FruitList fruits={kToYFruits} slowLevel="low" />
                    )}
                    {tab === "z-to-z" && (
                        <FruitList fruits={zToZFruits} slowLevel="high" />
                    )}
                </div>
            </div>
        </div>
    );
}
