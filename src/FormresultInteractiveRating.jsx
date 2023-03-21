
export const FormresultInteractiveRating = ({valueSelected}) => {
  return (
    <section className="section-thanks">
        <img src="images/illustration-thank-you.svg" alt="Imagen gracias" />
        <p className="paragraph-selected">
            You selected {valueSelected} out of 5
        </p>
        <h2>Thank you!</h2>
        <p>We apreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </section>
  )
}
