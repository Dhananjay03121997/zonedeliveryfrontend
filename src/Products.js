import React, { useEffect } from 'react';

const Products = () => {

    useEffect(() => {
        console.log("In UseEffect Products");
    }, []);

    return (
        <div>
            Product
        </div>
    );
}

export default Products;
