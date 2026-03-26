import React from 'react';

const ForWhom = () => {
  return (
    <>
      <div className="section-title">
        <i className="fas fa-graduation-cap"></i> Для кого курс
      </div>
      <div className="glass-card" style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <i className="fas fa-child" style={{ fontSize: '2rem', color: '#FFB347' }}></i>
          <h3>4–5 класс</h3>
          <p>Первая группа</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <i className="fas fa-user-astronaut" style={{ fontSize: '2rem', color: '#FFB347' }}></i>
          <h3>6–8 класс</h3>
          <p>Вторая группа</p>
        </div>
      </div>
    </>
  );
};

export default ForWhom;