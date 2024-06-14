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

export async function uyuQuote({ abortController }: Props): Promise<Dolar> {
    try {
        const response = await axiosDolarApiServer.get<DolarResponse>('/cotizaciones/uyu', { signal: abortController?.signal }); // Include params object
        const responseAdapted = dolarAdapter(response.data);
        return responseAdapted;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
