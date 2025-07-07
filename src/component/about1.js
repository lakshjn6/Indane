import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Jhilai Indane Gas Agency</h1>
        <p>Your Trusted LPG Partner Since 2012</p>
      </div>

      <div className="about-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-text">
            <h2>Leading LPG Distribution in Niwai Region</h2>
            <p>
              Jhilai Indane Gas Agency has been a leading provider of LPG distribution in the Niwai region of District Tonk, Rajasthan, since 2012. With a commitment to safety, reliability, and efficiency, we have built a strong reputation and a loyal customer base of 15,000+ satisfied users.
            </p>
            <p>
              Under the leadership of <strong>Pradeep Kumar Mittal</strong>, we prioritize seamless service, timely deliveries, and customer satisfaction, ensuring a hassle-free experience for households and businesses alike.
            </p>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">12+</div>
              <div className="stat-label">Years Of Experience</div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section">
          <h2>Our Mission & Values</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                Our agency operates with a focus on modern safety standards, digital convenience, and efficient logistics to meet the growing energy demands of our region. Located in Jhilai (Niwai), Rajasthan, we take pride in being a trusted partner for families and commercial establishments, offering prompt support and quality service.
              </p>
              <p>
                As a part of the Indane network, we continue to evolve, embracing technology-driven solutions to enhance customer experience while upholding our core values of trust and excellence in LPG distribution.
              </p>
            </div>
            <div className="mission-values">
              <div className="value-item">
                <div className="value-icon">🛡️</div>
                <h4>Safety First</h4>
                <p>Modern safety standards and proper handling procedures</p>
              </div>
              <div className="value-item">
                <div className="value-icon">⚡</div>
                <h4>Reliability</h4>
                <p>Consistent and dependable service delivery</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💯</div>
                <h4>Excellence</h4>
                <p>Commitment to quality and continuous improvement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="features-section">
          <h2>Why Choose Jhilai Indane Gas Agency?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Prompt And Safest Delivery</h3>
              <p>
                We ensure timely and secure delivery of LPG cylinders to your doorstep with our dedicated delivery team and modern logistics system.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Customer-Centric Approach</h3>
              <p>
                Our services are designed around customer needs, providing personalized support and maintaining long-term relationships with our clients.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Digital Convenience</h3>
              <p>
                Embracing technology-driven solutions to make ordering, tracking, and payments more convenient for our customers.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3>Trusted Network</h3>
              <p>
                As part of the prestigious Indane network, we maintain the highest standards of service and reliability.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="leadership-section">
          <h2>Leadership</h2>
          <div className="leader-card">
            <div className="leader-info">
              <h3>Pradeep Kumar Mittal</h3>
              <p className="leader-title">Agency Head & Director</p>
              <p className="leader-description">
                With over 12 years of experience in LPG distribution, Pradeep Kumar Mittal has been the driving force behind our agency's success. His vision of customer-first service and commitment to safety has helped us build trust with over 15,000 customers across the Niwai region.
              </p>
              <div className="leader-achievements">
                <div className="achievement">
                  <span className="achievement-icon">🎯</span>
                  <span>Expanded customer base to 15,000+</span>
                </div>
                <div className="achievement">
                  <span className="achievement-icon">📈</span>
                  <span>12+ years of industry expertise</span>
                </div>
                <div className="achievement">
                  <span className="achievement-icon">🏆</span>
                  <span>Excellence in customer service</span>
                </div>
              </div>
            </div>
            <div className="leader-image">
              <div className="leader-placeholder">
                <div className="leader-initials">PKM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area Section */}
        <div className="service-area-section">
          <h2>Our Service Area</h2>
          <div className="service-area-content">
            <div className="location-info">
              <div className="location-icon">📍</div>
              <div className="location-details">
                <h3>Jhilai (Niwai), District Tonk, Rajasthan</h3>
                <p>
                  Strategically located in the heart of Niwai region, our agency serves households and businesses across District Tonk with efficient distribution networks and prompt delivery services.
                </p>
              </div>
            </div>
            <div className="coverage-stats">
              <div className="coverage-item">
                <div className="coverage-number">50+</div>
                <div className="coverage-label">Villages Covered</div>
              </div>
              <div className="coverage-item">
                <div className="coverage-number">500+</div>
                <div className="coverage-label">Business Clients</div>
              </div>
              <div className="coverage-item">
                <div className="coverage-number">14,500+</div>
                <div className="coverage-label">Household Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="journey-section">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2012</div>
              <div className="timeline-content">
                <h4>Agency Establishment</h4>
                <p>Founded Jhilai Indane Gas Agency under the leadership of Pradeep Kumar Mittal</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h4>Expansion Phase</h4>
                <p>Expanded service coverage to 25+ villages in Niwai region</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h4>Digital Integration</h4>
                <p>Introduced online booking and digital payment systems</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>10,000+ Customers</h4>
                <p>Reached milestone of 10,000 satisfied customers</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>15,000+ Happy Customers</h4>
                <p>Celebrating 12+ years of excellence with 15,000+ loyal customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="contact-cta-section">
          <h2>Ready to Experience Excellence?</h2>
          <p>Join thousands of satisfied customers who trust Jhilai Indane Gas Agency for their LPG needs</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">
              <span>📞</span> Contact Us Today
            </button>
            <button className="cta-btn secondary">
              <span>🚚</span> Book Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;