import React, { useState, useEffect } from 'react';


const TextTitle = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuoteIndex(randomIndex);
    };
    useEffect(() => {
        const interval = setInterval(changeQuote, 5000); 
        return () => clearInterval(interval); 
    }, []);
    const quotes = [
        `"Flowers don’t tell, they show."`,
        `"A flower does not think of competing with the flower next to it. It just blooms."`,
        `"Every flower is a soul blossoming in nature."`,
        `"Flowers are the music of the ground. From earth’s lips spoken without sound."`,
        `"Where flowers bloom so does hope."`
        ];
    return (
        <h1 className="flower-text">
            {quotes[currentQuoteIndex]}
        </h1>
    )
}
export default TextTitle;