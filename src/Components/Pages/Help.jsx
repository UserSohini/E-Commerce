import './Help.css';

const Help = () => {
  return (
    <div className="info">
     <div className="help-container">
      <h1>🛍️ Help & Support</h1>
      <p>Welcome to our Help Center. Whether you have a question about your order, shipping, or returns — we’re here to help!</p>

      <section className="help-section">
        <h2>📞 Contact Customer Support</h2>
        <ul>
          <li><strong>Phone:</strong> +1 (800) 123-4567</li>
          <li><strong>Hours:</strong> Mon–Fri, 9:00 AM – 6:00 PM (EST)</li>
          <li><strong>Live Chat:</strong> Available during business hours (bottom-right corner of screen)</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>📧 Email Us</h2>
        <ul>
          <li><strong>Customer Support:</strong> support@shopexample.com</li>
          <li><strong>Business Inquiries:</strong> business@shopexample.com</li>
          <li><strong>Response Time:</strong> 1–2 business days</li>
        </ul>
      </section>

      <section className="help-section">
        <h2>🏬 Our Store Location</h2>
        <p>
          ShopExample HQ<br />
          456 Commerce Blvd<br />
          New York, NY 10001, USA
        </p>
        <p><strong>Store Hours:</strong> Mon–Sat: 10:00 AM – 8:00 PM | Sun: 12:00 PM – 6:00 PM</p>
      </section>
    </div>
    <section className='help-section' id="sect">
        <h2>❓ Frequently Asked Questions (FAQs)</h2>
        <ul className="faq-list">
          <li><strong>Q:</strong> Where is my order?<br /><strong>A:</strong> Log in to your account and go to <em>My Orders</em> to track your shipment.</li>
          <li><strong>Q:</strong> What’s your return and refund policy?<br /><strong>A:</strong> 30-day return policy. Refunds in 5–7 business days.</li>
          <li><strong>Q:</strong> Can I cancel or change my order?<br /><strong>A:</strong> Yes, within 1 hour of purchase.</li>
          <li><strong>Q:</strong> Do you ship internationally?<br /><strong>A:</strong> Yes, shipping costs/times shown at checkout.</li>
          <li><strong>Q:</strong> What payment methods do you accept?<br /><strong>A:</strong> Visa, Mastercard, PayPal, Apple Pay, Google Pay, Shop Pay.</li>
          <li><strong>Q:</strong> My promo code isn’t working — what should I do?<br /><strong>A:</strong> Check expiration and terms; contact us if issues persist.</li>
        </ul>
      </section>
    </div>
  );
};

export default Help;

