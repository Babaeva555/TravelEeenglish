import React from 'react';

const Program = () => {
  const modules = [
    "✈️ Аэропорт без стресса",
    "🏨 В отеле: заселение",
    "🍽️ Кафе и рестораны",
    "🗺️ Ориентирование",
    "🚨 Экстренные случаи",
    "🎟️ Туризм и развлечения",
    "🤝 Дружба в путешествиях",
    "🏆 Дипломный проект"
  ];

  return (
    <>
      <div className="section-title">
        <i className="fas fa-map-signs"></i> Программа курса
      </div>
      <div className="program-grid">
        {modules.map((item, i) => (
          <div key={i} className="program-item">
            <strong>{item}</strong>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Практика реальных ситуаций</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Program;