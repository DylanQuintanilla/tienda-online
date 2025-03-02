import React from "react";

export const Invoice = ({ allProducts, total }) => {
    return (
        <div className="container mt-4">
            <h2 className="text-center">Factura</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.quantity}</td>
                            <td>${product.price}</td>
                            <td>${product.price * product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3" className="text-end">Total:</th>
                        <th>${total}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};