import { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage(){
    const[ formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    workType: 'A',
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefult();
        console.log('form Data:', formData);
        navigate('/submitted');
    };
     return (
    <div className="form-container">
      <h2>Customer Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <label>
          Name:
          <input name="name" type="text" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        {/* Email input */}
        <label>
          Email:
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        {/* Company input */}
        <label>
          Company:
          <input name="company" type="text" value={formData.company} onChange={handleChange} required />
        </label>
        <br />
        {/* Dropdown menu for type of work */}
        <label>
          Type of Work:
          <select name="workType" value={formData.workType} onChange={handleChange}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </label>
        <br />
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;