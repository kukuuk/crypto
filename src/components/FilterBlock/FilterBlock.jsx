import { useEffect } from 'react'
import { useState } from 'react';
import './styles.css'

const FilterBlock = ({coins, setCoins}) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        const filteredCoins = coins.filter(coin => {
            return coin.name.toLowerCase().includes(value.toLowerCase());
        })
        setCoins(filteredCoins);
    }, [value])

    return (
        <div className='filter-block'>
            <input 
                onChange={(e) => setValue(e.target.value)} 
                value={value} 
                className='input' 
                type='text' 
                placeholder='Search' 
            />
        </div>
    )
}

export default (FilterBlock);