import React, { useEffect, useState } from 'react';
import { UserContext } from '../utils/context';
import Header from './Header';
import Main from './Main';

const Homepage = () => {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        const url = "http://j0.wlmediahub.com/App_Themes/api/test/photos.js";
        fetch(url)
            .then((response) => response.json())
            .then((imgs) => {
                setPictures(imgs.photo);
            });
    }, []);


        if (!pictures.length) {
            return <p>No images</p>;
        } else {
            return (
                <>
                    <UserContext.Provider value={{
                     pictures    
                    }}>
                        <Header />
                        <Main />
                    </UserContext.Provider>
                </>
            )
        }
    
}

export default Homepage