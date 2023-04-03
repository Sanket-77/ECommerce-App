import React from 'react'
import { useSelector } from 'react-redux'

export default function cart() {

    
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    
    const state = useSelector((state));

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/ ${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6">
                    <Skeleton height={400} width={600} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} width={100} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className='lead fw-bold'>
                                {product.qty} X ${product.price} = $
                                {product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={() => { handleButton(product) }}>
                                <i className='fa fa-minus'></i>
                            </button>
                            <button className="btn btn-outline-dark me-4" onClick={() => { handleButton(product) }}>
                                <i className='fa plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {console.log("Product in cart ", product)}
            <div className="container py-5">
                <div className="row py-5">
                    {Loading ? <ShowProduct /> : <Loading />}
                </div>
            </div>
        </>
    )
}
