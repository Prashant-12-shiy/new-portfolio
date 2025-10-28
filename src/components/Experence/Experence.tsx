import React from 'react';
import AnimationOnScroll  from 'react-animate-on-scroll';
// import 'animate.css/animate.min.css';

interface ExperienceItem {
  period: string;
  location: string;
  position: string;
  company: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      period: '06/2024 – 09/2024',
      location: 'Nepal',
      position: 'Frontend Developer Intern',
      company: 'Codynn',
      responsibilities: [
        'Designed and implemented user interfaces using NextJs, Tailwind, Typescript and React Query.',
        'Collaborated with backend teams to integrate RESTful APIs for efficient data flow.',
        'Assisted in backend tasks, including server-side scripting and database management.',
        'Participated in code reviews and debugging to ensure high-quality code.'
      ]
    }
  ];

  const styles = {
    experienceSection: {
      padding: '80px 20px',
    //   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    } as React.CSSProperties,
    
    experienceContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%'
    } as React.CSSProperties,
    
    experienceTitle: {
      textAlign: 'center',
      fontSize: '3rem',
      fontWeight: 700,
      color: 'white',
      marginBottom: '60px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
    } as React.CSSProperties,
    
    experienceTimeline: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto'
    } as React.CSSProperties,
    
    experienceTimelineBefore: {
      content: "''",
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: '4px',
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'translateX(-50%)',
      borderRadius: '10px'
    } as React.CSSProperties,
    
    experienceCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '15px',
      padding: '30px',
      margin: '40px 0',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
      position: 'relative'
    } as React.CSSProperties,
    
    experienceCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)'
    } as React.CSSProperties,
    
    experienceHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      flexWrap: 'wrap',
      gap: '10px'
    } as React.CSSProperties,
    
    experiencePeriod: {
      background: 'linear-gradient(45deg, #667eea, #764ba2)',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '25px',
      fontWeight: 600,
      fontSize: '0.9rem',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
    } as React.CSSProperties,
    
    experienceLocation: {
      color: '#666',
      fontWeight: 500,
      fontSize: '0.9rem',
      background: 'rgba(102, 126, 234, 0.1)',
      padding: '8px 16px',
      borderRadius: '25px'
    } as React.CSSProperties,
    
    experienceContent: {
      color: '#333'
    } as React.CSSProperties,
    
    experiencePosition: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#333',
      marginBottom: '5px',
      background: 'linear-gradient(45deg, #667eea, #764ba2)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    } as React.CSSProperties,
    
    experienceCompany: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: '#667eea',
      marginBottom: '20px',
      fontStyle: 'italic'
    } as React.CSSProperties,
    
    experienceResponsibilities: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    } as React.CSSProperties,
    
    responsibilityItem: {
      padding: '8px 0',
      lineHeight: 1.6,
      color: '#555',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px'
    } as React.CSSProperties,
    
    bullet: {
      color: '#667eea',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      flexShrink: 0,
      marginTop: '2px'
    } as React.CSSProperties,

    // Mobile styles
    mobileExperienceTitle: {
      fontSize: '2.5rem',
      marginBottom: '40px'
    } as React.CSSProperties,

    mobileExperienceCard: {
      marginLeft: '40px',
      padding: '25px'
    } as React.CSSProperties,

    mobileTimelineBefore: {
      left: '20px'
    } as React.CSSProperties,

    mobileExperienceHeader: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px'
    } as React.CSSProperties,

    mobileExperiencePosition: {
      fontSize: '1.3rem'
    } as React.CSSProperties,

    mobileExperienceCompany: {
      fontSize: '1.1rem'
    } as React.CSSProperties,

    smallMobileExperienceTitle: {
      fontSize: '2rem'
    } as React.CSSProperties,

    smallMobileExperienceCard: {
      padding: '20px',
      marginLeft: '30px'
    } as React.CSSProperties,

    smallMobileExperiencePosition: {
      fontSize: '1.2rem'
    } as React.CSSProperties,

    smallMobileResponsibilityItem: {
      fontSize: '0.9rem'
    } as React.CSSProperties
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section style={styles.experienceSection} id="experience">
      <div style={styles.experienceContainer}>
        <AnimationOnScroll 
          animateIn="animate__fadeInDown" 
          animateOnce={true}
          duration={1.2}
        >
          <h2 style={styles.experienceTitle}>Professional Experience</h2>
        </AnimationOnScroll>

        <div style={styles.experienceTimeline}>
          {/* Timeline line - using a div since we can't use ::before with inline styles */}
          <div style={styles.experienceTimelineBefore}></div>
          
          {experiences.map((exp, index) => (
            <AnimationOnScroll
              key={index}
              animateIn="animate__fadeInUp"
              animateOnce={true}
              duration={1}
              delay={index * 200}
            >
              <div 
                style={{
                  ...styles.experienceCard,
                  ...(isHovered ? styles.experienceCardHover : {})
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div style={styles.experienceHeader}>
                  <div style={styles.experiencePeriod}>{exp.period}</div>
                  <div style={styles.experienceLocation}>{exp.location}</div>
                </div>
                
                <div style={styles.experienceContent}>
                  <h3 style={styles.experiencePosition}>{exp.position}</h3>
                  <h4 style={styles.experienceCompany}>{exp.company}</h4>
                  
                  <ul style={styles.experienceResponsibilities}>
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} style={styles.responsibilityItem}>
                        <span style={styles.bullet}>•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;