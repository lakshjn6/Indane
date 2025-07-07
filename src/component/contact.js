import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [queryForm, setQueryForm] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: 'general',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQueryForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!queryForm.name || !queryForm.email || !queryForm.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    const queryData = {
      ...queryForm,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    try {
      // Here you would send the data to your backend
      // const response = await fetch('/api/queries', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(queryData)
      // });
      // const result = await response.json();
      
      console.log('Query submitted:', queryData);
      
      alert('Thank you for your query! We will get back to you soon.');
      
      // Reset form
      setQueryForm({
        name: '',
        email: '',
        phone: '',
        queryType: 'general',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting query:', error);
      alert('Error submitting query. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Indane Gas Distributor - Always Here to Help</p>
      </div>

      <div className="contact-content">
        {/* Contact Information Section */}
        <div className="contact-info-section">
          <h2>Get in Touch</h2>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone Numbers</h3>
              <div className="contact-details">
                <p><a href="tel:8432585815">8432585815</a></p>
                <p><a href="tel:53675635673">53675635673</a></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <div className="contact-details">
                <p><a href="mailto:jhilai@gmail.com">jhilai@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Address</h3>
              <div className="contact-details">
                <p>Jhilai, Niwai Tonk</p>
                <p>Rajasthan, India</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🕐</div>
              <h3>Business Hours</h3>
              <div className="contact-details">
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="quick-actions-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <div className="action-card">
              <div className="action-icon">🚚</div>
              <h4>Emergency Delivery</h4>
              <p>Need urgent gas delivery? Call us now!</p>
              <button className="action-btn">
                <a href="tel:8432585815">Call Now</a>
              </button>
            </div>

            <div className="action-card">
              <div className="action-icon">🔧</div>
              <h4>Service Request</h4>
              <p>Report any issues with your gas connection</p>
              <button className="action-btn">
                <a href="tel:53675635673">Report Issue</a>
              </button>
            </div>

            <div className="action-card">
              <div className="action-icon">💰</div>
              <h4>Payment Support</h4>
              <p>Get help with billing and payments</p>
              <button className="action-btn">
                <a href="mailto:jhilai@gmail.com">Email Us</a>
              </button>
            </div>
          </div>
        </div>

        {/* Query Form Section */}
        <div className="query-form-section">
          <h2>Raise a Query</h2>
          <div className="query-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={queryForm.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={queryForm.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={queryForm.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label>Query Type</label>
                <select
                  name="queryType"
                  value={queryForm.queryType}
                  onChange={handleInputChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="delivery">Delivery Issue</option>
                  <option value="billing">Billing & Payment</option>
                  <option value="service">Service Request</option>
                  <option value="complaint">Complaint</option>
                  <option value="suggestion">Suggestion</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={queryForm.subject}
                onChange={handleInputChange}
                placeholder="Brief subject of your query"
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={queryForm.message}
                onChange={handleInputChange}
                placeholder="Please describe your query in detail..."
                rows="5"
              />
            </div>

            <button 
              onClick={handleSubmit} 
              disabled={isSubmitting} 
              className="submit-query-btn"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Query'}
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🏠</div>
              <h4>Home Delivery</h4>
              <p>Fast and reliable gas cylinder delivery to your doorstep</p>
            </div>

            <div className="service-item">
              <div className="service-icon">🔄</div>
              <h4>Connection Transfer</h4>
              <p>Easy connection transfer services for relocating customers</p>
            </div>

            <div className="service-item">
              <div className="service-icon">🛠️</div>
              <h4>Installation & Repair</h4>
              <p>Professional installation and repair services</p>
            </div>

            <div className="service-item">
              <div className="service-icon">📱</div>
              <h4>Online Booking</h4>
              <p>Book your gas cylinder online for convenience</p>
            </div>

            <div className="service-item">
              <div className="service-icon">🛡️</div>
              <h4>Safety Check</h4>
              <p>Regular safety inspections and gas leak detection</p>
            </div>

            <div className="service-item">
              <div className="service-icon">💳</div>
              <h4>Multiple Payment Options</h4>
              <p>Cash, card, online transfer - pay your way</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;