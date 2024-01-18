import React from 'react';

const Table = ({ data }) => {
    const convertKelvinToCelsius = (kelvin) => {
        return kelvin - 273.15;
    };

    return (
        <div>
            {JSON.stringify(data) === '{}' ? (
                ''
            ) : (
                <table>
                    <tr>
                        <td>Temperature C</td>
                        <td>{convertKelvinToCelsius(data.main.temp).toFixed(2)} °C</td>
                    </tr>
                    <tr>
                        <td>Weather</td>
                        <td>{data.weather[0].description}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{data.sys.country}</td>
                    </tr>
                </table>
            )}
        </div>
    );
};

export default Table;