import { memo, useState } from "react";
import { useMount } from "../hooks/use-mount";
import FruitLine from "./FruitLine";
import "./FruitList.scss";
import { Fruit } from "./model";

const FruitList = memo(({ query }: { query: string }) => {
    const [fruits, setFruits] = useState<Fruit[]>([]);
    useMount(() => {
        import("./dataset/fruits.json").then((fruits) => {
            const sortedFruits = fruits.default.sort((a, b) => a.name.localeCompare(b.name));
            setFruits(sortedFruits);
        });
    });

    console.log("FruitList is Rendering");

    // const [filteredFruits, setFilteredFruits] = useState<Fruit[]>([]);
    // useEffect(() => {
    //     new Promise<Fruit[]>((resolve) => {
    //         setTimeout(() => {
    //             resolve(
    //                 fruits.filter((fruit) => fruit.name.toLowerCase().includes(query.toLowerCase()))
    //             );
    //         }, 1000);
    //     }).then((fruits: Fruit[]) => setFilteredFruits(fruits));
    // }, [fruits, query]);
    let filteredFruits: Fruit[] = [];
    if (query !== "") {
        filteredFruits = fruits.filter((fruit) =>
            fruit.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    return (
        <ul className="list">
            {filteredFruits.map((fruit, index) => (
                <FruitLine key={index} name={fruit.name} url={fruit.url} />
            ))}
        </ul>
    );
});

export default FruitList;
