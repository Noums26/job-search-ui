import axios from "axios";
import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useDataProvider = () => useContext(DataContext);

export const DataProvider = ({ children }) => {

    const instance = axios.create({baseURL: 'http://localhost:8080'})
  
    const getAllOffers = async () => {
        const res = await instance.get('/offers')
        return await res.data;
    }

    const getAllDomain = async () => {
        const res = await instance.get('/domains')
        return await res.data;
    }

    const getUserById = async (id) => {
        const res = await instance.get(`/users/${id}`)
        return await res.data
    }

    const login = async (username, password) => {
        const res = await instance.get(`/users/login?username=${username}&password=${password}`)
        return await res.data
    }

    const dataValue = {
        getAllOffers,
        getAllDomain,
        getUserById,
        login
    };

    return (
        <DataContext.Provider value={dataValue}>
            {children}
        </DataContext.Provider>
    );
  };