import { useState } from "react";


export const FormItemsView = ({handler}) => {
    
    const [invoiceItemState, setInvoiceItemState] = useState({
        product: '',
        precio: '',
        quantity: '',
    });

    const { product, precio, quantity } = invoiceItemState;

    //--------------------------onInputChange--------------------------------------------------//
    const onInputChange = ({ target: { name, value } }) => {
        console.log(name);
        console.log(value);

        setInvoiceItemState({
            ...invoiceItemState,
            [name]: value  // name y value deben de estener el mismo nombre
        })
    }
    //-------------------------onInvoiceItemsSubmit--------------------------------------------------------//
    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();

        if (product.trim().length <= 1) return;
        if (precio.trim().length <= 1) return;
        if (isNaN(precio.trim())) {
            alert('Error el precio no es un número')
            return;
        }
        if (quantity.trim().length < 1) {
            alert('Error la cantidad tiene que ser mayor de 0')
            return;
        }
        if (isNaN(quantity.trim())) {
            alert('Error la cantidad no es un numero')
            return;
        }

        // pasa los items que se agregaran al form
        handler(invoiceItemState);// con esta funcion le estamos pasando los datos al padre


        // reiniciamos los datos una vez que se guardan
        setInvoiceItemState({
            product: '',
            precio: '',
            quantity: '',
        });
    }
    //----------------------------------------------------------------------------------------//


    return (<>
        <form className="mx -4" onSubmit={onInvoiceItemsSubmit}>
            <input
                type="text"
                name="product"
                value={product}
                placeholder="Producto"
                className="form-control m-3"
                onChange={onInputChange}
            />

            <input
                type="text"
                name="precio"
                value={precio}
                placeholder="Precio"
                className="form-control m-3"
                onChange={event => onInputChange(event)}
            />

            <input
                type="text"
                name="quantity"
                value={quantity}
                placeholder="Cantidad"
                className="form-control m-3"
                onChange={onInputChange}
            />

            <button type="submit" className="btn btn-primary m-3">Crear item</button>

        </form>

    </>)
}