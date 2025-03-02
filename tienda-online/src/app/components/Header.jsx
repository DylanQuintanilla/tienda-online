import React from "react";
import { Invoice } from "./Invoice";

export const Headers = ({ allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal }) => {
    const [active, setActive] = React.useState(false);//estado para mostrar u ocultar el carrito
    const [showInvoice, setShowInvoice] = React.useState(false);//estado para mostrar u ocultar la factura


    const onDeleteProduct = (product) => {
        if (window.confirm(`Esta seguro de eliminar ${product.title} del carrito?`)) {
            const results = allProducts.filter(item => item.id !== product.id);//se filtran los productos que no sean iguales al producto seleccionado
            setTotal(total - product.price * product.quantity);//se resta el precio del producto seleccionado al total
            setCountProducts(countProducts - product.quantity);//se resta la cantidad de productos seleccionados
            setAllProducts(results);
        }
    };

    const onCleanCart = () => {
        
        if (window.confirm("Esta seguro de vaciar el carrito?")) {
            setAllProducts([]);
            setTotal(0);
            setCountProducts(0);

        }
    };

    return (
        <header className="bg-light p-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="text-primary">Tienda Eppa</h1>
                <div className="position-relative">
                    <button className="btn btn-outline-primary" onClick={() => setActive(!active)}>
                        <img 
                            src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png" 
                            alt="carrito" 
                            style={{ width: "30px" }} 
                        />
                        <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                            {countProducts}
                        </span>
                    </button>
                    <div className={`card mt-2 ${active ? '' : 'd-none'}`} style={{ width: "300px" }}>
                        {allProducts.length > 0 ? (
                            <>
                                <ul className="list-group list-group-flush">
                                    {allProducts.map(product => (
                                        <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            
                                            <div class="row">
                                                <div class="col-4">
                                                    <img src={product.urlImage} alt={product.title} style={{ width: "50px", marginRight: "10px" }} />
                                                </div>
                                                <div class="col-8">
                                                    <span>{product.title}</span>
                                                </div>
                                                <div class="col-7">
                                                    <span>${product.price}</span>
                                                </div>
                                                <div class="col-5">
                                                    <button className="btn btn-sm btn-danger ms-2" onClick={() => onDeleteProduct(product)}>Eliminar</button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="card-footer d-flex justify-content-between">
                                    <strong>Total: ${total}</strong>
                                    <button className="btn btn-danger" onClick={onCleanCart}>Vaciar Carrito</button>
                                </div>
                                <button className="btn btn-success mt-3" onClick={() => setShowInvoice(true)} disabled={allProducts.length === 0}>Generar Factura</button>
                            </>
                        ) : (
                            <p className="text-center">El carrito está vacío</p>
                        )}
                    </div>
                </div>
            </div>
            {showInvoice && <Invoice allProducts={allProducts} total={total} />}
        </header>
    );
};