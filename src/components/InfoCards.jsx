import React from 'react';

const InfoCards = () => {
  return (
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
      <div className="glass-card" style={{ flex: 1 }}>
        <i className="fas fa-laptop"></i>
        <h3>💻 Что потребуется</h3>
        <p>Компьютер, наушники, микрофон, Zoom</p>
      </div>
      <div className="glass-card" style={{ flex: 1 }}>
        <i className="fas fa-calendar"></i>
        <h3>🕒 Расписание</h3>
        <p>Чт 15:00 (4-5 кл) / Пт 15:30 (6-8 кл)</p>
      </div>
      <div className="glass-card" style={{ flex: 1 }}>
        <i className="fas fa-tag"></i>
        <h3>💰 Стоимость</h3>
        <div className="price-badge">12 000 ₽</div>
        <p>полный курс (10 уроков)</p>
        <p>или 1 300 ₽/урок</p>
      </div>
    </div>
  );
};

export default InfoCards;