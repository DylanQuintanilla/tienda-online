"use client";//avisa que este codigo se ejecutara en el navegador y no en el servidor
import { useState } from 'react';
import { Headers } from './components/Header';
import { ProductList } from './components/ProductList';

export default function Home() {
    const [allProducts, setAllProducts] = useState([]);//estado para guardar los productos seleccionados
    const [total, setTotal] = useState(0);//estado para guardar el total de la compra
    const [countProducts, setCountProducts] = useState(0);//estado para guardar la cantidad de productos seleccionados

    return (
        <>
            <Headers 
                allProducts={allProducts} 
                setAllProducts={setAllProducts} 
                total={total} 
                setTotal={setTotal} 
                countProducts={countProducts} 
                setCountProducts={setCountProducts} 
            />
            <ProductList 
                allProducts={allProducts} 
                setAllProducts={setAllProducts} 
                total={total} 
                setTotal={setTotal} 
                countProducts={countProducts} 
                setCountProducts={setCountProducts} 
            />
        </>
    );
}