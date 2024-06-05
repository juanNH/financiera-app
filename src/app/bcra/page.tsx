
import { variableListBcra } from '@/services/bcra/graphql.variableList.service';
import React from 'react'
import { VariablesList } from './components/VariablesList';



const page = async () => {
    const data = await variableListBcra();
    return (
        <>
            <VariablesList data={data || []} />
        </>
    )
}

export default page