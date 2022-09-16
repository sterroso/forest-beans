import './CartButton.css';

const CartButton = (componentId) => {
    return (
        <button className='CartButton' type='button'>
            <span className='CartButton-materialSymbolsOutlined'>shopping-cart</span>
        </button>
    );
}

export default CartButton;