export default function ProfumeDetails({
    params,
}:{
    params: {productId: string};
}) {
    return <h1>Profume detail {params.productId}</h1>;
}