import { useState } from 'react';
// import './form.scss';

const TYPES = ['general', 'dad', 'knock-knock', 'programming'];

interface FormProps {
    onSubmitData: (data:FormDataStructure)=> void;
}

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
    <form className="form" onSubmit={handleSubmit}>
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
    </form>
  );
};
