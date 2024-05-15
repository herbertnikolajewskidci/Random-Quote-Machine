import { useEffect, useState } from 'react';



export default function QuoteBox() {

    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('');
    const [color, setColor] = useState('#16a085');
    const colors = [
        '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6',
        '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'
    ];

    const fetchQuote = async () => {
        fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
            .then(response => response.json())
            .then(data => {
                getRandomQuote(data)

            })
            .catch(error => console.error(error))

    }
    useEffect(() => {

        fetchQuote();

    }, [])

    const getRandomQuote = (quotesData) => {
        const randomQuote = quotesData.quotes[
            Math.floor(Math.random() * quotesData.quotes.length)
        ];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        // changeColor();
    };

    const handleNewQuote = () => {
        fetchQuote();
    };

    return (
        <>
            <div id='text'>{quote}</div>
            <div id="autor">- {author}</div>
            <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
            <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet Quote</a>

        </>
    )
}
