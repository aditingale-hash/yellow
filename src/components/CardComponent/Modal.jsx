import './modal.css';

 const Modal = ({ handleClose, show, result, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Result result={result}/>
        <button type="button"className='model-button' onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );  
};

const Note = () =>  {   
  return <p className='note'> Note:  This Result purely based on the data gather from apis <span> &#160;
   <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News Api</a>  &#160;
   &amp; &#160; <a href="https://developer.twitter.com/en/docs/twitter-api" target="_blank" rel="noopener noreferrer">Twiter Api</a> </span>
   <br /> and then data trained on pretrained machine learning model; <br />
   Afterwards the Analysis is done</p>
}

const Title = props => (
  <h1 className="title">{props.text}</h1>
);

const Result = (props)=> {

  return (
      <>
       <div className="box">
          <Title text={`Result Analysis: ${props.result}`} />
          <Note />
          </div>
      </>
  )
}
export default Modal;