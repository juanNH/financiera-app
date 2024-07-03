import { axiosDolarApiServer } from "@/app/api/axios.instance";
import { Dolar, dolarAdapter } from "@/app/api/dolar/adapter";
import { DolarResponse } from "@/app/api/dolar/dolars/route";

interface Props {
    abortController?: AbortController,
}

/**
 * Service to get peso uruguay from DolarApi.com
 * @param {GenericAbortSignal}  param.signal Signal to abort api call.
 * @returns {Promise<DolarResponse>} Api promise response.
 */

export async function uyuQuote({ abortController }: Props): Promise<DolarResponse> {
    try {
        const { data } =  await axiosDolarApiServer.get<DolarResponse>('/cotizaciones/uyu', { signal: abortController?.signal }); 
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
