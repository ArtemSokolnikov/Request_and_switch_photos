import { Radio } from '@mui/material';
import React from 'react'

const RadioButtons = ({ setIndex }) => {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div>
            <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                onClick={() => setIndex(0)}
                value="a"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
            />
            <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                onClick={() => setIndex(1)}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
            />
            <Radio
                checked={selectedValue === 'c'}
                onChange={handleChange}
                onClick={() => setIndex(2)}
                value="c"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'C' }}
            />
            <Radio
                checked={selectedValue === 'd'}
                onChange={handleChange}
                onClick={() => setIndex(3)}
                value="d"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'D' }}
            />
            <Radio
                checked={selectedValue === 'e'}
                onChange={handleChange}
                onClick={() => setIndex(4)}
                value="e"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'E' }}
            />
        </div>
    )
}

export default RadioButtons