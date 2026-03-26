import React from 'react';

const Enrollment = () => {
  const handleEnroll = () => {
    alert("✨ Спасибо! Свяжемся с вами для записи на курс ✨");
  };

  return (
    <>
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <i className="fas fa-bullhorn" style={{ fontSize: '2.5rem', color: '#FFB347' }}></i>
        <h2>📢 Набор открыт!</h2>
        <p>Группы маленькие — максимум 6 детей. Места ограничены!</p>
        <button className="btn-primary btn-large" onClick={handleEnroll}>
          Записаться на курс
        </button>
      </div>
    </>
  );
};

export default Enrollment;