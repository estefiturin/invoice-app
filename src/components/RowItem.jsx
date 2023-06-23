import PropTypes from 'prop-types';

export const RowItem = ({id, product, precio, quantity, handlerDeleteItems}) => {

    return (
        <>
            <tr>
                <td>{product}</td>
                <td>{precio}</td>
                <td>{quantity}</td>
                <td><button 
                className='btn btn-danger'
                onClick={() => handlerDeleteItems(id)}>Eliminar</button></td>
            </tr>
        </>
    )
}



RowItem.propTypes = {
    product: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}