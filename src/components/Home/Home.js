import "./Home.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home =()=>{
    // const baseUrl = `${process.env.PUBLIC_URL}/assets/`;
    const baseUrl = `${process.env.PUBLIC_URL}`;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products/get');
                setProducts(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mt-4">
            <div className="row">
            {products.map(product => (
        <div className="col-md-3 mb-4 item"  key={product.id}>
            <div className="card" style={{ width: '18rem' }}>
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><strong>{product.price}</strong></p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
     </div>
            ))}
        </div>
        </div>
    );
};

export default Home;