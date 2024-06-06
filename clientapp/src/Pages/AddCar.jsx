import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddCar = () => {

    const navigate = useNavigate();
    const { personId } = useParams();

    const [car, setCar] = useState({
        make: '',
        model: '',
        year: ''
    });

    const [person, setPerson] = useState({
        firstName: '',
        lastName: ''
    });

    useEffect(() => {
        const getPerson = async () => {
            const { data } = await axios.get(`/api/people/get/${personId}`);
            setPerson(data);
        }

        getPerson();
    }, []);

    const onTextChange = e => {
        const copy = { ...car };
        copy[e.target.name] = e.target.value;
        setCar(copy);
    }

    const onSubmitClick = async () => {
        const { make, model, year } = car;
        await axios.post('/api/cars/add', { make, model, year, personId });
        navigate('/');
    }

    const { make, model, year } = car;
    const { firstName, lastName } = person;

    return (
        <div style={{ minHeight: 1000, paddingTop: 200 }}>
            <div className="row">
                <div className='col-md-6 offset-md-3 card bg-light p-4'>
                    {firstName && <h2>Add a car for {firstName} {lastName.toUpperCase()}</h2>}
                    <input type="text" className='form-control' name='make' value={make} onChange={onTextChange} placeholder="Make" />
                    <br />
                    <input type="text" className='form-control' name='model' value={model} onChange={onTextChange} placeholder="Model" />
                    <br />
                    <input type="text" className='form-control' name='year' value={year} onChange={onTextChange} placeholder="Year" />
                    <br />
                    <button className='btn btn-primary btn-lg btn-block' onClick={onSubmitClick}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddCar;