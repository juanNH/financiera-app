import { CalculateLoanFrenchSystem } from "@/app/api/loan/adapter";
import axios, { GenericAbortSignal } from "axios";

interface Props {
    params: CalculateLoanParams,
    signal?: GenericAbortSignal,
}
export interface CalculateLoanParams {
    loanDebth: number,
    yearlyInterest: number,
    totalYears: number,
}

/**
 * 
 * @param {CalculateLoanParams  } param.param Params to api.
 * @param {GenericAbortSignal}  param.signal Signal to abort api call.
 * @returns {Promise<CalculateLoan>} Api promise response.
 */

export async function calculateLoanFrenchSystem({ params, signal }: Props): Promise<CalculateLoanFrenchSystem> {
    try {
        const response = await axios.get<CalculateLoanFrenchSystem>('/api/loan/french-system', { params, signal }); // Include params object
        return { ...response.data }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
