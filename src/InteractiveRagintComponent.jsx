import React, { useState } from 'react'
import { FormresultInteractiveRating } from './FormresultInteractiveRating';
let option = 0


export const InteractiveRagintComponent = () => {
    const [optionSelected, setOptionSelected] = useState(option)

    const handleClickArticle = (e) => {
        option = parseInt(e.target.textContent);
        console.log ('OPCION = ', option)
    }

    const handleClickButton = (e) => {
        setOptionSelected(option)
        console.log ('CLICK DADO. el valor escogido es ', optionSelected)
    }

    console.log ('EL VALOR ESCOGIDO ES ', optionSelected)

    if (optionSelected !== 0) {
        return <FormresultInteractiveRating 
            valueSelected={optionSelected}
        />
    }

    return (
        <section className='section-main'>
            <div className="icono-star">
                <img src="/images/icon-star.svg" alt="Icono estrella" />
            </div>
            <h2>How did we do?</h2>
            <p>Please let us know we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="options">
                <article onClick={handleClickArticle}>1</article>
                <article onClick={handleClickArticle}>2</article>
                <article onClick={handleClickArticle}>3</article>
                <article onClick={handleClickArticle}>4</article>
                <article onClick={handleClickArticle}>5</article>
            </div>
            <button 
                type="submit" 
                className='boton-submit'
                disabled={option !== 0}
                onClick={handleClickButton}
            >
                Submit
            </button>
        </section>
    )
}
