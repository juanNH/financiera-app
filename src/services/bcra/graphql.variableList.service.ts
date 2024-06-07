import { getClient } from '@/lib/apolloClient'
import { gql } from '@apollo/client'
export async function variableListBcra(): Promise<BcraVariable[] | undefined> {
    const query = gql`
    query{  
        variablesList{
            idVariable
            cdSerie
            descripcion
            fecha
            valor
        }
    } 
`
    try {
        const { data, errors } = await getClient().query({ query })
        console.log('ss', data, errors)
        if (errors) {
            console.error('GraphQL errors:', errors);
            return undefined; // Handle errors appropriately
        }

        return data.variablesList as BcraVariable[];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export interface BcraVariable {
    idVariable?: number;
    cdSerie?: number;
    descripcion?: string;
    fecha?: string;
    valor?: string;
}