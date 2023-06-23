
// datos que se usaran. En este caso el proyecto no cuenta con conexion a una base de datos por lo tanto le proporcionaremos lodatos a utilizar
export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Andres Agustin',
        lastName: 'Milano',
        address: {
            country: 'Argentina',
            city: 'Córdoba',
            street: 'Vicente Lopez y Planes',
            number: 200
        },
    },
    company: {
        name: 'Mi Empresa',
        fiscalNumber: 123456,

    },
    items: [
        {
            id: 1,
            product:'Cpu Intel i7',
            precio:499,
            quantity:1,
        },
        {
            id: 2,
            product:'Consair keyboard Mecanico',
            precio:150,
            quantity:1,
        },
        {
            id: 3,
            product:'Monitor Asus',
            precio:350,
            quantity:1,
        },
    ]
}