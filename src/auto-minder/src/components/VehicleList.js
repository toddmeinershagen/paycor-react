import React from 'react';

class VehicleList extends React.Component {
    _renderVehicleList() {
        const vehicles = [
            { make: "Honda", model: "CR-V", year: 2013 },
            { make: "Hyundai", model: "Elantra", year: 2014 },
            { make: "Toyota", model: "Avalon", year: 2001 },
        ]
        return (
            <table>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(v => (
                        <tr>
                            <td>{v.make}</td>
                            <td>{v.model}</td>
                            <td>{v.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div>
                {this._renderVehicleList()}
            </div>
        )
    }
}

export default VehicleList;