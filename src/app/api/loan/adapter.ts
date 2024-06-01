import { CalculateLoanFrenchSystemResponse } from "./french-system/route";

const calculateLoanAdapter = (data: CalculateLoanFrenchSystemResponse): CalculateLoanFrenchSystem => {
    const newData: CalculateLoanFrenchSystem = {
        totalToPay:data.totalToPay,
        monthlyPayment: data.monthlyPayment,
        amortizationTable: [],
    }
    for (const item of data.amortizationTable) {
        newData.amortizationTable.push({
            month: item.month,
            payment: item.payment,
            interestPaid: item.interestPaid,
            principalPaid: item.principalPaid,
            remainingBalance: item.remainingBalance
        })
    }
    return newData;
}


interface CalculateLoanFrenchSystem {
    totalToPay:number;
    monthlyPayment: number;
    amortizationTable: AmortizationTableFrenchSystem[];
}

interface AmortizationTableFrenchSystem {
    month: number;
    payment: number;
    interestPaid: number;
    principalPaid: number;
    remainingBalance: number;
}

export {
    calculateLoanAdapter
};
export type { CalculateLoanFrenchSystem, AmortizationTableFrenchSystem };
