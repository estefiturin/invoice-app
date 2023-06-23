import { instanceOf } from 'prop-types';
import { invoice } from '../data/invoice';

export const getInvoice = () => {
    // invoice inicial. realiza la sumatoria total del invoice inicial
    const total = calcularTotal(invoice.items)

    // devuelve todo el objeto invoice y una copia del total        
    return {...invoice, total};
}

export const calcularTotal = (items = []) => { // se le pasa un arreglo de items
    return items
        .map(item => item.precio * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
}