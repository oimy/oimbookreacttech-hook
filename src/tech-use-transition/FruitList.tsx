import FruitLine from "./FruitLine";
import "./FruitList.scss";
import { Fruit } from "./model";

export default function FruitList({
    fruits,
    slowLevel,
}: {
    fruits: Fruit[];
    slowLevel: "low" | "high" | "none";
}) {
    const delayMillisecond =
        slowLevel === "low" ? 2 : slowLevel === "high" ? 1000 : 0;

    return (
        <ul className="list">
            {fruits.map((fruit) => (
                <FruitLine
                    name={fruit.name}
                    url={fruit.url}
                    delayMillisecond={delayMillisecond}
                />
            ))}
        </ul>
    );
}
