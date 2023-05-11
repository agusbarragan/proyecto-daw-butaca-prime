import React from 'react';
import NavigationBar from './Navbar';
import { DataProvider } from '../context/DataContext';
import FormSearch from './FormSearch';
import Movies from './Movies';
import { Footer } from './Footer';

const MainPage = () => {
    return (
        <>
            <DataProvider>
                <NavigationBar />
                <FormSearch />
                <Movies />
                <Footer />
            </DataProvider>
        </>
    );
};

export default MainPage;