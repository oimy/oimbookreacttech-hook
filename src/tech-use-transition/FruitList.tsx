import FruitLine from "./FruitLine";
import "./FruitList.scss";
import { Fruit } from "./model";

export default function FruitList({
    fruits,
    slowLevel = "none",
}: {
    fruits: Fruit[];
    slowLevel?: "low" | "high" | "none";
}) {
    const delayMillisecond = (() => {
        switch (slowLevel) {
            case "high":
                return 1000;
            case "low":
                return 5;
            default:
                return 0;
        }
    })();

    return (
        <ul className="list">
            {fruits.map((fruit, index) => (
                <FruitLine
                    key={index}
                    name={fruit.name}
                    url={fruit.url}
                    delayMillisecond={delayMillisecond}
                />
            ))}
        </ul>
    );
}
