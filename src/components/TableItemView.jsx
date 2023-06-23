import { RowItem } from "./RowItem"
import PropTypes from 'prop-types';


export const TableItemView = ({title, items, handlerDeleteItems}) => {

    return (
        <>
            <h4>{title}</h4>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(({ id, product, precio, quantity }) => {
                        // desestrucuto el objeto item
                        return (
                            // filas de la tabla
                            <RowItem 
                            product={product} 
                            id={id}
                            precio={precio} 
                            quantity={quantity} 
                            key={id} 
                            handlerDeleteItems={id => handlerDeleteItems(id)}
                            />
                        )
                    })}

                </tbody>
            </table>

        </>
    )
}


TableItemView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}