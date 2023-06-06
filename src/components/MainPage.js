import React from 'react';
import NavigationBar from './Navbar';
import { DataProvider } from '../context/DataContext';
import FormSearch from './FormSearch';
import Movies from './Movies';
import { Footer } from './Footer';

const MainPage = () => {
    return (
        <>
        {/* Con DataProvider se proporciona datos a los componentes hijos
            lo que permite acceder a los datos
        */}
            <DataProvider>
                {/* Y renderizamos estos 4 componentes, 
                es la pantalla principal del buscador de peliculas */}
                <NavigationBar />
                <FormSearch />
                <Movies />
                <Footer />
            </DataProvider>
        </>
    );
};

export default MainPage;