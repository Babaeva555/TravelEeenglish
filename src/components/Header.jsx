import React from 'react';

const Header = () => {
  return (
    <div className="glass-card">
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div>
          <div className="hero-icon">
            <i className="fas fa-plane-departure"></i> <i className="fas fa-globe-americas"></i>
          </div>
          <h1>
            Английский <span className="gradient-gold">для путешествий</span>
          </h1>
          <p style={{ fontSize: '1.2rem' }}>
            От заказа кофе до спасения чемодана — разговорный английский без страха.
          </p>
        </div>
        <div style={{ background: 'rgba(255,140,66,0.15)', borderRadius: '60px', padding: '0.5rem 1rem' }}>
          <i className="fas fa-users"></i> Группы до 6 детей
        </div>
      </div>
      <p style={{ marginTop: '1rem', borderLeft: '2px solid #FF8C42', paddingLeft: '1rem' }}>
        Мечтаете свободно общаться за границей? Этот курс научит вашего ребёнка реальному разговорному английскому.
      </p>
    </div>
  );
};

export default Header;