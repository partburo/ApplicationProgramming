// 2_7_2 Remove an item from the shopping cart 
/*
    В этой корзине есть рабочая кнопка "+", но кнопка "-" ничего не делает. Вам нужно добавить обработчик события, чтобы нажатие на нее уменьшало count соответствующего товара. Если вы нажмете "-", когда счетчик будет равен 1, товар должен автоматически удалиться из корзины. Убедитесь, что он никогда не показывает 0.
*/

import { useState } from 'react';

const initialProducts = [
    {
        id: 0,
        name: 'Baklava',
        count: 1,
    },
    {
        id: 1,
        name: 'Cheese',
        count: 5,
    },
    {
        id: 2,
        name: 'Spaghetti',
        count: 2,
    },
];

export default function ShoppingCart() {
    const [products, setProducts] = useState(
        initialProducts
    );

    function handleIncreaseClick(productId: number) {
        setProducts(
            products.map((product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        count: product.count + 1,
                    };
                } else {
                    return product;
                }
            })
        );
    }

    function handleDecreaseClick(productId: number) {
        setProducts(
            products.map((product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        count: product.count === 0 ? 0 : product.count - 1
                    }
                } else {
                    return product
                }
            })
        )
    }

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} (<b>{product.count}</b>)
                    <button
                        onClick={() => {
                            handleIncreaseClick(product.id);
                        }}
                    >
                        +
                    </button>
                    <button
                        onClick = { () => {
                            handleDecreaseClick(product.id)
                        }}
                    >
                        –
                    </button>
                </li>
            ))}
        </ul>
    );
}