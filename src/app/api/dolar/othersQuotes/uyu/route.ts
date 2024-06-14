import { NextRequest } from "next/server";
import { dolarAdapter } from "./../../adapter";
import { axiosDolarApiServer } from "./../../../axios.instance";
import { DolarResponse } from "../../dolars/route";

const GET = async (req: NextRequest) => {
    const responseUyu = await axiosDolarApiServer.get<DolarResponse>('/cotizaciones/uyu');
    // Check for successful response status code
    if (responseUyu.status === 200) {
        const responseAdapted = dolarAdapter(responseUyu.data);
        return Response.json(responseAdapted, { status: 200 })
    } else {
        return Response.json(`API request failed with status: ${responseUyu.status}`, { status: responseUyu.status });
    }
}
export { GET };

