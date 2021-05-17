import { createContext, ReactNode, useState } from "react";
import { IData } from "../../model/data";

type DataContextData = {
    data: IData
};

export const DataContext = createContext({} as DataContextData);

type DataContextProviderProps = {
  children: ReactNode;
};
