import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AddPerson from './Pages/AddPerson';
import AddCar from './Pages/AddCar';
import DeleteCars from './Pages/DeleteCars';
import Layout from './components/Layout';

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addperson' element={<AddPerson />} />
                    <Route path='/addcar/:personId' element={<AddCar />} />
                    <Route path='/deletecars/:personId' element={<DeleteCars />} />
                </Routes>
            </Layout>
        );
    }

};

export default App;