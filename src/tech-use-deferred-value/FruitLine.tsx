export default function FruitLine({ name, url }: { name: string; url: string | null }) {
    const startTime = performance.now();
    while (performance.now() - startTime < 2) {}

    return url ? (
        <p>
            <a href={url} rel="noreferrer" target="_blank">
                {name}
            </a>
        </p>
    ) : (
        <p>{name}</p>
    );
}
