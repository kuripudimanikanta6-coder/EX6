import React from 'react'

export default function ProductList() {
    return (
    <div>ProductList
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {products.map((product) => (
                <productCard key={product.id} product={product} />
            ))}
        </div>
    </div>
    )
}
