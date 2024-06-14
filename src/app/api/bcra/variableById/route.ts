import { NextRequest } from "next/server";
import { axiosInstanceServer } from "../../axios.instance";
import { BcraVariable } from "@/services/bcra/graphql.variableList.service";
import { VariableHistoryParams } from "@/services/bcra/get.variableById.service";

const GET = async (req: NextRequest) => {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const params: VariableHistoryParams = {
        idVariable: Number(searchParams.get('idVariable')) as number,
    }
    const response = await axiosInstanceServer.get<BcraVariable>('/bcra/variable', { params });

    // Check for successful response status code
    if (response.status === 200) {
        return Response.json({ ...response.data }, { status: 200 })
    } else {
        return Response.json(`API request failed with status: ${response.status}`, { status: response.status });
    }
}

export { GET };
