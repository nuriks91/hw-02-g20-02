import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ data, setData }) => {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    const getWeather = (city) => {
        if (city.trim() === '') {

            return;
        }

        setLoading(true);

        let KEY = 'f4833cf990dc92ef43563c9b00da2a78';
        let APILink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&lang=ru`;

        axios(APILink)
            .then(({ data }) => {
                setData(data);
                setCity('');
            })
            .catch((error) => {
                console.error('err', error);

            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className='form'>
            <input
                onChange={(event) => {
                    setCity(event.target.value);
                }}
                value={city}
                type='text'
                placeholder='write city'
            />
            <button
                onClick={() => {
                    getWeather(city);
                }}
            >
                {loading ? 'loading' : 'Get'}
            </button>
        </div>
    );
};

export default Form;