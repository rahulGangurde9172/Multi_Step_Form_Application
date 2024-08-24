const FormData = ({formData}) =>{
    return(
        <>
        <div className="form-data"> 
            <p><strong>name : {formData.name}</strong></p><br />
            <p><strong>email : {formData.email}</strong></p><br />
            <p><strong>Date : {formData.date}</strong></p><br />
            <p><strong>Password :{formData.password}</strong></p><br />
        </div>
        </>

    );
}
export default FormData;