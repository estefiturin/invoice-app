import { getInvoice, calcularTotal } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { TableItemView } from "./components/TableItemView";
import { TotalView } from "./components/TotalView";
import { useEffect, useState } from "react";
import { FormItemsView } from "./components/FormItemsView";

export const InvoiceApp = () => {

    const invoiceInitial = {
        id: 0,
        name: '',
        client: {
            name: '',
            lastName: '',
            address: {
                country: '',
                city: '',
                street: '',
                number: 0
            },
        },
        company: {
            name: '',
            fiscalNumber: 0,

        },
        items: []
    };

    //--------------------------------------Constantes--------------------------------------------//


    // // se captura la informacion agregada en el formulario
    // const [productValue, setProductValue] = useState('');
    // const [precioValue, setPrecioValue] = useState('');
    // const [quantityValue, setQuantityValue] = useState('');

    

    //--------------------------------useState-------------------------------------------------------//

    const [activeForm, setActiveForm] = useState(false);

    const [invoice, setInvoice] = useState(invoiceInitial);


    const [total, setTotal] = useState(0);

    // manejador del formulario. guardar información. Usamo otros useState pero para guardar en items la informacion
    const [items, setItems] = useState([]); // con setItem podemos agregar un nvo item a la lista.

    
     // desestrucuturo invoicce
     const { id, name, client, company, items: itemsInitial } = invoice;

    const [counter, setCounter] = useState(4); // en este caso empezamos a asignar el valor de id en 4

    

    //---------------------------------useEffect---------------------------------------------------//
    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items); // le paso a setItems los items que hay en el json
    }, []);

    // useEffect(() => {
    //     console.log('El precio cambio');
    // }, [precio]);


    // actualiza el precio total de la factura
    useEffect(() => {
        setTotal(calcularTotal(items)); // le pasamos los items que se agregan a calcularTotal
    }, [items]);


    
    // funcion que maneja los items. El proceso hijo debe de pasarnos los datos
    const handlerAddItems = ({ product, precio, quantity}) => {
        // creamos un arreglo con los items + un item nuevo
        setItems([...items,
        {
            id: counter,
            product: product,
            precio: +precio,  // dos formas de convertir en entero: + y parseInt
            quantity: parseInt(quantity, 10)
        }]);

        // manteniendo los valores anteriores, agregamos los nuevos.
        setCounter(counter + 1) // se increment el contador al finalizar 

    }
    // funcion para eliminar item
    const handlerDeleteItems = (id) => {
        setItems(items.filter(item => item.id !== id ))
    }

    // newItem recibe los datos del hijo y los pasamos a la funcion handlerAddItem

    // funcion de button para mostrar form. AL hacer click, su estado pasa a true
    const onActiveForm = () => {
        setActiveForm(!activeForm);
    }

    return (
        <>
            <div className="container">
                <div className="card my-4">
                    <div className="card-header text-bg-secondary">
                        Ejemplo de Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />
                        <div className="row my-4">
                            <div className="col">
                                <ClientView title={"Datos del cliente"} client={client} />
                            </div>

                            <div className="col">
                                <CompanyView title={"Datos de la empresa"} company={company} />
                            </div>
                        </div>

                        <TableItemView title={"Productos de la factura"} items={items} handlerDeleteItems={id => handlerDeleteItems(id)} />

                        <TotalView total={total} />

                        <button className="btn btn-secondary" onClick={ onActiveForm}>{ !activeForm ? 'Agregar item' : 'Ocultar' }</button>
                        { !activeForm? '' : <FormItemsView handler={(newItem) => handlerAddItems(newItem)} /> }

                    </div>
                </div>
            </div>
        </>
    )
}