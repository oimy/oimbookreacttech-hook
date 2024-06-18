export default function FruitLine({
    name,
    url,
    delayMillisecond,
}: {
    name: string;
    url: string | null;
    delayMillisecond: number;
}) {
    const startTime = performance.now();
    while (performance.now() - startTime < delayMillisecond) {}

    return url ? (
        <p>
            <a href={url} target="_blank">
                {name}
            </a>
        </p>
    ) : (
        <p>{name}</p>
    );
}
