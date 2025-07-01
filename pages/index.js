import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('tourist');

  const renderTab = () => {
    switch (activeTab) {
      case 'tourist':
        return (
          <div className="package-card">
            <h3>Tourist Express</h3>
            <p className="price">$75</p>
            <ul>
              <li>15 minutes</li>
              <li>5 edited photos</li>
              <li>1 iconic location</li>
              <li>Next-day delivery</li>
            </ul>
          </div>
        );
      case 'portrait':
        return (
          <div className="package-card">
            <h3>Portrait Session</h3>
            <p className="price">$250</p>
            <ul>
              <li>1 hour</li>
              <li>10 edited photos</li>
              <li>2 locations</li>
              <li>Creative direction</li>
            </ul>
          </div>
        );
      case 'business':
        return (
          <div className="package-card">
            <h3>Lifestyle & Business</h3>
            <p className="price">$200</p>
            <ul>
              <li>45 minutes</li>
              <li>6 edited photos</li>
              <li>Ideal for cafes/bars</li>
              <li>Social media ready</li>
            </ul>
          </div>
        );
    }
  };

  return (
    <main className="container">
      <h1>Honolulu Photo Sessions</h1>
      <p className="subtitle">Capture memories, promote your brand, or get stunning portraits — island style 🌺</p>

      <div className="tabs">
        <button onClick={() => setActiveTab('tourist')} className={activeTab === 'tourist' ? 'active' : ''}>Tourist Express</button>
        <button onClick={() => setActiveTab('portrait')} className={activeTab === 'portrait' ? 'active' : ''}>Portrait Session</button>
        <button onClick={() => setActiveTab('business')} className={activeTab === 'business' ? 'active' : ''}>Lifestyle & Business</button>
      </div>

      {renderTab()}

      <div className="center">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xVftn-CcMeXVcXc5Bc7StuSjcm1Zhux7TLtGrQbIef5LOQ/viewform?usp=header" 
           target="_blank" className="book-button">Book Now</a>
      </div>

      <h2>Gallery</h2>
      <div className="gallery">
        <div className="gallery-item">Gallery photo 1</div>
        <div className="gallery-item">Gallery photo 2</div>
        <div className="gallery-item">Gallery photo 3</div>
        <div className="gallery-item">Gallery photo 4</div>
      </div>

      <h2>Testimonials</h2>
      <blockquote>“Absolutely loved our beach shoot! Zara made it so fun and natural.”<br />— Emily R.</blockquote>
    </main>
  );
}