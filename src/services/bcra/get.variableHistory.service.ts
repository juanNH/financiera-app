import axios from "axios";

interface Props {
    abortController?: AbortController
    params: VaraibleHistoryParams
}
interface VaraibleHistoryParams {
    id: number
    startDate: string,
    endDate: string,
}

export const variableHistory = async ({ abortController, params }: Props) => {
    try {
        const response = await axios.get<VariableHistoryResponse>(`https://api.bcra.gob.ar/estadisticas/v1/datosvariable/${params.id}/${params.startDate}/${params.endDate}`, { signal: abortController?.signal });
        return response.data.results
    } catch (error) {
        throw error;
    }
}

interface VariableHistoryResponse {
    results: VariableHistory[],
    status: number,
    errorMessages: string[]
}

export interface VariableHistory {
    idVariable: number,
    fecha: string,
    valor: string
}