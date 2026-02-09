import React, { useState, useEffect } from 'react';

const ButtonSection = () => {
  const [answered, setAnswered] = useState(false);
  const [showThoughtBubble, setShowThoughtBubble] = useState(false);
  const [slideAway, setSlideAway] = useState(false);

  const handleYes = () => {
    setAnswered(true);
  };

  const handleNoHover = () => {
    setShowThoughtBubble(true);
    setSlideAway(true);
  };

  const handleNoAreaLeave = () => {
    setShowThoughtBubble(false);
    setSlideAway(false);
  };

  if (answered) {
    return (
      <div style={buttonStyles.celebration}>
        <div style={buttonStyles.celebrationText}>🎉 Yes! 🎉</div>
        <div style={buttonStyles.celebrationSubtext}>
          I'm so happy! I love you so much and can't wait to spend more time together. Thank you for being my Valentine!
        </div>
      </div>
    );
  }

  return (
    <div style={buttonStyles.container}>
      <button 
        style={buttonStyles.yesButton}
        onClick={handleYes}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        Yes
      </button>
      <div 
        style={buttonStyles.noButtonContainer}
        onMouseLeave={handleNoAreaLeave}
      >
        <button 
          style={{
            ...buttonStyles.noButton,
            transform: slideAway ? 'translateX(150px)' : 'translateX(0)',
            transition: slideAway ? 'transform 0.3s ease-out' : 'transform 1s ease-in'
          }}
          onMouseEnter={handleNoHover}
        >
          No
        </button>
        {showThoughtBubble && (
          <div style={buttonStyles.thoughtBubble}>
            You meant yes, right?
            <div style={buttonStyles.thoughtBubbleTail}></div>
          </div>
        )}
      </div>
    </div>
  );
};

const buttonStyles = {
  container: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '40px'
  },
  yesButton: {
    padding: '15px 50px',
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    fontWeight: 'bold',
    backgroundColor: '#ff6b9d',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)'
  },
  noButtonContainer: {
    position: 'relative'
  },
  noButton: {
    padding: '15px 50px',
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
  },
  thoughtBubble: {
    position: 'absolute',
    top: '-80px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'white',
    color: '#667eea',
    padding: '12px 20px',
    borderRadius: '20px',
    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    animation: 'popIn 0.3s ease-out',
    zIndex: 10
  },
  thoughtBubbleTail: {
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid white'
  },
  celebration: {
    marginTop: '40px',
    textAlign: 'center'
  },
  celebrationText: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: '20px',
    animation: 'pulse 1s ease-in-out infinite'
  },
  celebrationSubtext: {
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    color: 'rgba(255, 255, 255, 0.95)',
    lineHeight: '1.6'
  }
};

const Valentine = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 2,
        size: 20 + Math.random() * 30
      };
      setHearts(prev => [...prev, newHeart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 5000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes popIn {
          0% {
            transform: translateX(-50%) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateX(-50%) scale(1.1);
          }
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
          }
        }

        .valentines-heart {
          position: absolute;
          pointer-events: none;
          animation: float-up linear forwards;
        }
      `}</style>

      {/* Floating hearts */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="valentines-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.animationDuration}s`,
            bottom: 0
          }}
        >
          ❤️
        </div>
      ))}

      {/* Main content */}
      <div style={styles.content} className="valentines-main-content">
        <p style={styles.question}>
          Anna,
        </p>
        
        <p style={styles.question}>
          Will you be my Valentine?
        </p>

        <ButtonSection />
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    overflow: 'hidden',
    position: 'relative',
    padding: '20px'
  },
  content: {
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
    maxWidth: '800px',
    padding: '60px 40px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '30px',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
  },
  question: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'rgba(255, 255, 255, 0.95)',
    lineHeight: '1.4'
  }
};

export default Valentine;
