import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function SecretAccess() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctPassword = 'cintakita123'; // Ganti dengan password kamu

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      router.visit('/love/messages'); // Redirect jika password benar
    } else {
      setError('Password salah, coba lagi ya :)');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#ffe6ea',
      fontFamily: "'Quicksand', sans-serif"
    }}>
      <h1 style={{ color: '#d85b5b', fontSize: '2rem', marginBottom: '20px' }}>Masukkan Kata Rahasia</h1>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <input
          type="password"
          placeholder="Password rahasia..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '10px 20px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            marginBottom: '10px',
            outline: 'none',
          }}
        />
        <button type="submit" style={{
          backgroundColor: '#d85b5b',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Buka Pesan
        </button>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </form>
    </div>
  );
}
