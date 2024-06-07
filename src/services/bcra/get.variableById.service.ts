import { axiosInstanceClient } from "@/app/api/axios.instance";
import axios from "axios";
import { BcraVariable } from "./graphql.variableList.service";

interface Props {
    abortController?: AbortController
    params: VaraibleHistoryParams
}
interface VaraibleHistoryParams {
    idVariable: number
}

export const variableById = async ({ abortController, params }: Props) => {
    try {
        const response = await axiosInstanceClient.get<BcraVariable>('/bcra/variable', { params, signal: abortController?.signal }); // Include params object
        return response.data
    } catch (error) {
        throw error;
    }
}
