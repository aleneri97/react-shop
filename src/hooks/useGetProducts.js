import {useEffect, useState} from 'react';
import axios from 'axios';

export const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);
    const getData = async () => {
        const response = await axios.get(API);
        setProducts(response.data);
    };

	useEffect(() => {
		getData();
	}, []);

	return products;
};
