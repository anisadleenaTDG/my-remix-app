import { useState } from 'react';

export default function Index() {
  const [name, setName] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
    console.log('masukk : ');
    const response = await fetch('api/index', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ name }),
    });

    console.log('response :: ', response);

    if (response.ok) {
      alert('Name saved successfully!');
    } else {
      alert('Failed to save name');
    }
  };

  return (
    <div>
      <h1>Test insert name</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
