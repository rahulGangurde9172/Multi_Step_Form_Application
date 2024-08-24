import Form from './component/Form';
import FormData from './component/FormData';
import { useState } from 'react';
import './App.css';

const data = [
  {
    id: "name",
    label: "Name",
    inputType: "text",
    placeholder: "Enter your name",
    button: "Next",
  },
  {
    id: "email",
    label: "Email",
    inputType: "email",
    placeholder: "Enter email",
    button: "Next",
  },
  {
    id: "date",
    label: "DOB",
    inputType: "date",
    placeholder: "",
    button: "Next",
  },
  {
    id: "password",
    label: "Password",
    inputType: "password",
    placeholder: "Enter password",
    button: "Submit",
  },
];

function App() {
  const [Fdata] = useState(data);
  const [index, setIndex] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: ""
  });

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (index === Fdata.length - 1) {
      alert("You want to submit the form ? ");
      setIsSubmit(true); 
    } else {
      setIndex((index) => index + 1);
    }
  };

  const handleback = (e) => {
    e.preventDefault();
    setIndex((index) => index - 1);
  };

  const handleOnChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    
    const copyData = { ...formData };
    copyData[id] = val;
    setFormData(copyData); 
  };

  console.log(formData);

  return (
    <div className="App">
      <h3>Multi-Step Form Application</h3>
      {
        !isSubmit ? (
          <Form
            handleform={handleSubmitButton}
            index={index}
            handleback={handleback}
            Fdata={Fdata}
            handleSubmitButton={handleSubmitButton}
            handleOnChange={handleOnChange}
            formData={formData} // Correctly passing formData object
          />
        ) : (
          <FormData formData={formData} />
        )
      }
    </div>
  );
}

export default App;
