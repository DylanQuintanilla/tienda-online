import React from "react";
import { data } from "../data";

export const ProductList = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {
    const onAddProduct = (product) => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price);
            setCountProducts(countProducts + 1);
            return setAllProducts([...products]);
        }

        setTotal(total + product.price);
        setCountProducts(countProducts + 1);
        setAllProducts([...allProducts, product]);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {data.map(product => (
                    <div key={product.id} className="col-md-3 mb-4">
                        <div className="card h-100">
                            <img src={product.urlImage} alt={product.title} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "black" }}>{product.title}</h5>
                                <p className="card-text" style={{ color: "black" }}>${product.price}</p>
                                <button className="btn btn-primary w-100" onClick={() => onAddProduct(product)} style={{ backgroundColor: "rgb(253,222,0)", borderColor: "rgb(253,222,0)", color: "black" }}>Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};