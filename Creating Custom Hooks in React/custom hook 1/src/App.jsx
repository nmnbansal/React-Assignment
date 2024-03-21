import useForm from './Components/useForm';
import useInput from './Components/useInput';

const App = () => {
  const { values, handleChange, handleSubmit } = useForm((formValues) => {
    console.log('Form submitted with values:', formValues);
  });

  const nameInput = useInput('');
  const emailInput = useInput('');

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={nameInput.value}
        onChange={nameInput.onChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={emailInput.value}
        onChange={emailInput.onChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
