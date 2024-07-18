import { useState } from 'react';
import styled from 'styled-components';

const TYPES = ['general', 'dad', 'knock-knock', 'programming'];

interface FormProps {
    onSubmitData: (data:FormDataStructure)=> void;
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 250px;

  .form__label {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .form__input {
    padding: 10px 15px;
    font-family: 'Fira Sans', sans-serif;
    font-size: 1rem;
    text-transform: capitalize;
    border-radius: 8px;
    background-color: white;
    border: none;
    box-shadow: 0px 0px 49px -18px rgba(0,0,0,0.75);
  }

  button {
    margin-top: 20px;
    padding: 10px 15px;
    color: white;
    background-color: #3eb4cd;
    font-family: 'Fira Sans', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 8px;
    border: none;
    transition-property: transform, background-color;
    transition-duration: 200ms;

    &:hover {
      cursor: pointer;
      background-color: #3598ac;
    }
    
    &:active {
      transform: scale(98%);
    }
  }

`

export interface FormDataStructure {
    name: string;
    type: string;
    count: number;
}

export const Form: React.FC<FormProps> = ({ onSubmitData }) => {
  const [formData, setFormData] = useState<FormDataStructure>({
    name: '',
    type: '',
    count: 0,
  })

  const options = [];
  for (let i = 0; i < 10; i++) {
    options.push(i + 1);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitData(formData);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label className="form__label">
        Your name
        <input
          className="form__input"
          name='name'
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </label>

      <label className="form__label">
        Select type of Jokes
        <select
          className="form__input"
          name='name'
          value={formData.type}
          onChange={(e) => setFormData({...formData, type: e.target.value})}
          required
        >
          <option value="">Select one</option>
          {TYPES.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <label className="form__label">
        Select count of Jokes
        <select
          className="form__input"
          name='name'
          onChange={(e) => setFormData({...formData, count: Number(e.target.value)})}
          required
        >
          <option value="">Select one</option>
          {options.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>

      <button className="form__button" type='submit'>Submit</button>
    </FormStyled>
  );
};
