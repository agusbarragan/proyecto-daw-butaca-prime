import React from 'react';
import NavigationBar from './Navbar';
import { DataProvider } from '../context/DataContext';
import FormSearch from './FormSearch';
import Movies from './Movies';

const MainPage = () => {
    return (
        <>
            <DataProvider>
                <NavigationBar />
                <FormSearch />
                <Movies />
            </DataProvider>
        </>
    );
};

export default MainPage;