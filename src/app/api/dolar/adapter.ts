import { DolarResponse } from "./dolars/route";

const dolarAdapter = (data: DolarResponse): Dolar => {
    const newData: Dolar = {
        currency: data.moneda,
        type: data.casa,
        name: data.nombre,
        buy: data.compra,
        sell: data.venta,
        updateDate: data.fechaActualizacion,
    }
    return newData;
}

const dolarsAdapter = (data: DolarResponse[]): Dolar[] => {
    const newData: Dolar[] = data.map(dolar => (dolarAdapter(dolar)))
    return newData;
}


interface Dolar {
    currency: string,
    type: string,
    name: string,
    buy: number,
    sell: number,
    updateDate: string,
}



export {
    dolarsAdapter,
    dolarAdapter
};
export type { Dolar };

