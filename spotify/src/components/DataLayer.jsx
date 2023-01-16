import React , { createContext , useContext , useReducer} from 'react'

export const StateContext = createContext();

export const DataLayer = ({initialState , reducer , children })=>
(
    <DataLayerContext.provider value = {useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.provider>
)
 
export const  useDataLayer = () => useContext(DataLayerContext)