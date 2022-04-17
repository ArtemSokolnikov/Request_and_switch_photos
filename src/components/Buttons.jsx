import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../utils/context';
import RadioButtons from '../utils/RadioButtons'

const Buttons = () => {
    const { handleClickUpdate, setIndex } = useContext(UserContext);
    return (
        <>
            <RadioButtons className="btn" setIndex={setIndex}></RadioButtons>
            <Button onClick={handleClickUpdate} variant="contained">Shuffle</Button>
        </>
    )
}

export default Buttons