import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    workType: 'A',
  });

  const navigate = useNavigate();

  // ✅ Define functions BEFORE the return statement
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form Data:', formData); // Placeholder for data handling
    navigate('/submitted'); // Redirect to success page
  };

  // ✅ Now safely use handleSubmit inside JSX
  return (
    <div className="form-container">
      <h2>Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Company:
          <input name="company" type="text" value={formData.company} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Type of Work:
          <select name="workType" value={formData.workType} onChange={handleChange}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
