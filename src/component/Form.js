import "../App.css"

const Form = ({
    handleform,
    index,
    handleback,
    Fdata,
    
    handleOnChange,
    formData 
  }) => {
    return (
      <>
        <form onSubmit={handleform} className="form">
          <div className="form-container">
            {index > 0 && (
              <a href="/" onClick={handleback}>
                back
              </a>
            )}
  
            <br />
            <label>{Fdata[index].label}:</label><br />
  
            <input
              onChange={handleOnChange}
              value={formData[Fdata[index].id]} 
              id={Fdata[index].id}
              required
              type={Fdata[index].inputType}
              placeholder={Fdata[index].placeholder}
            /><br />
  
            <button className="button" type="submit">
              {Fdata[index].button}
            </button><br />
          </div>
        </form>
      </>
    );
  };
  
  export default Form;
  