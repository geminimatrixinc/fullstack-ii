import React, { useState } from 'react';
import { faker } from '@faker-js/faker';

// step #3 - instal faker npm package
const EthereumAddressList = () => {
    const [addresses, setAddresses] = useState([]);

    const generateAddresses = () => {
        const newAddresses = Array.from({ length: 5 }, () => faker.finance.ethereumAddress());
        setAddresses(newAddresses);
    };

    // step #2 - adjacent element error. add container tag <></> to resolve
    return (
            <>
                <button onClick={generateAddresses}>Generate Ethereum Addresses</button>
                <ul>
                    {addresses.map((address, index) => (
                        /* step # 4 - unique key on list items */
                        <li key={index}>{address}</li>
                    ))}
                </ul>
            </>
    );
};

export default EthereumAddressList;
