import { axiosDolarApiServer } from "@/app/api/axios.instance";
import { Dolar, dolarsAdapter } from "@/app/api/dolar/adapter";
import { DolarResponse } from "@/app/api/dolar/dolars/route";

interface Props {
    abortController?: AbortController,
}

/**
 * Service to get dolars from bff
 * @param {GenericAbortSignal}  param.signal Signal to abort api call.
 * @returns {Promise<DolarResponse[]>} Api promise response.
 */

export async function dolars({ abortController }: Props): Promise<Dolar[]> {
    try {
        const response = await axiosDolarApiServer.get<DolarResponse[]>('/dolares', { signal: abortController?.signal }); // Include params object
        const responseAdapted = dolarsAdapter(response.data);
        return responseAdapted;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
