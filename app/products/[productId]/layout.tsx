export default function ProductDetails({
    children,
}: {
    children: React.ReactNode;
}){
    return(
        <>
        {children}
        <h1>Featured products</h1>
        </>
    )
}