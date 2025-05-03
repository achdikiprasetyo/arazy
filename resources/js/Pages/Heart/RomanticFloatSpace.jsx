import { usePage, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Messages() {
  const { messages } = usePage().props;
  const [newMessage, setNewMessage] = useState('');
  const [showMessages, setShowMessages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessages(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleMarkAsRead = (id) => {
    router.patch(`/love/message/${id}/read`, {}, {
      preserveScroll: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    router.post('/love/message', { text: newMessage }, {
      preserveScroll: true,
      onSuccess: () => setNewMessage(''),
    });
  };

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(to bottom right, #ffe4e6, #fff0f5)',
      overflow: 'hidden',
      fontFamily: '"Segoe UI", cursive',
    }}>
      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: 30,
          width: '100%',
          textAlign: 'center',
          fontSize: '2.5rem',
          color: '#d6336c',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          zIndex: 2,
        }}
      >
        💌 Pesan Rahasia
      </motion.h1>

      {/* Pesan Berterbangan */}
      {showMessages && messages.map((msg) => {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const endX = startX + (Math.random() - 0.5) * 600; // ±300 px
        const endY = startY + (Math.random() - 0.5) * 600;
        const delay = Math.random() * 3;
        const duration = 8 + Math.random() * 6;
        const rotateAmount = Math.random() * 60 - 30;
        const scale = 0.9 + Math.random() * 0.4;

        return (
          <motion.div
            key={msg.id}
            onClick={() => !msg.is_read && handleMarkAsRead(msg.id)}
            title={msg.is_read ? 'Sudah dibaca' : 'Klik untuk tandai terbaca'}
            initial={{
              x: startX,
              y: startY,
              opacity: 0,
              rotate: 0,
              scale,
            }}
            animate={{
              x: [startX, endX, startX],
              y: [startY, endY, startY],
              opacity: [0.8, 1, 0.8],
              rotate: [0, rotateAmount, -rotateAmount, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
            style={{
              position: 'absolute',
              backgroundColor: msg.is_read ? '#ffffffdd' : '#ffc8dd',
              padding: '12px 20px',
              borderRadius: '20px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              fontSize: `${scale * 1.2}rem`,
              maxWidth: '250px',
              color: '#4a4a4a',
              textAlign: 'center',
              cursor: msg.is_read ? 'default' : 'pointer',
              userSelect: 'none',
              zIndex: 1,
              pointerEvents: 'auto',
            }}
          >
            {msg.text}
            {!msg.is_read && <span style={{ marginLeft: 10 }}>🔒</span>}
          </motion.div>
        );
      })}

      {/* Form Kirim Pesan */}
      <form
        onSubmit={handleSubmit}
        style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '500px',
          display: 'flex',
          gap: '10px',
          zIndex: 2,
        }}
      >
        <input
          type="text"
          placeholder="Tulis pesan romantis..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{
            flex: 1,
            padding: '12px',
            borderRadius: '20px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#ff6b81',
            color: '#fff',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
