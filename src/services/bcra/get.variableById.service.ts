import { BcraVariable } from "./graphql.variableList.service";
import axios from "axios";

interface Props {
    abortController?: AbortController
    params: VariableHistoryParams
}
export interface VariableHistoryParams {
    idVariable: number
}

export const variableById = async ({ abortController, params }: Props) => {
    try {
        const response = await axios.get<BcraVariable>('/api/bcra/variableById', { params, signal: abortController?.signal }); // Include params object
        return response.data
    } catch (error) {
        throw error;
    }
}
