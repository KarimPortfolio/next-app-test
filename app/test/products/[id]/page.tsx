
const  ProductDetailPage = (
    {params} : {
        params: {id: number}
    }
) => {

    return(
        <div>
            <h1 className="mt-5 text-center text-sky-600">Details for product with id: {params.id} </h1>
        </div>
    )
}

export default ProductDetailPage;