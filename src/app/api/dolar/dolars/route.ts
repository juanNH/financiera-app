import { NextRequest } from "next/server";
import { dolarsAdapter } from "../adapter";
import { axiosDolarApiServer } from "../../axios.instance";

const GET = async (req: NextRequest) => {
    const response = await axiosDolarApiServer.get<DolarResponse[]>('/dolares');
    // Check for successful response status code
    if (response.status === 200) {
        const responseAdapted = dolarsAdapter(response.data);
        return Response.json(responseAdapted, { status: 200 })
    } else {
        return Response.json(`API request failed with status: ${response.status}`, { status: response.status });
    }
}

interface DolarResponse {
    moneda: string,
    casa: string,
    nombre: string,
    compra: number,
    venta: number,
    fechaActualizacion: string,
}
export { GET };
export type { DolarResponse };

