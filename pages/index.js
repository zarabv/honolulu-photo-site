export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>📸 Honolulu Photo Sessions</h1>
      <p style={{ textAlign: 'center' }}>Authentic portraits, lifestyle shoots, and express sessions for tourists.</p>

      <section>
        <h2>💰 Packages</h2>
        <ul>
          <li><strong>Portrait Session:</strong> $250 – 10 edited photos</li>
          <li><strong>Lifestyle for Businesses:</strong> $200 – 6 edited photos (ideal for cafes/bars)</li>
          <li><strong>Express Tourist Deal:</strong> $20 per edited photo – 15 min mini shoot</li>
        </ul>
      </section>

      <section>
        <h2>🖼️ Gallery</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <img src="/gallery1.jpg" alt="Gallery 1" style={{ width: '100%' }} />
          <img src="/gallery2.jpg" alt="Gallery 2" style={{ width: '100%' }} />
          <img src="/gallery3.jpg" alt="Gallery 3" style={{ width: '100%' }} />
          <img src="/gallery4.jpg" alt="Gallery 4" style={{ width: '100%' }} />
        </div>
      </section>

      <section>
        <h2>💬 Testimonials</h2>
        <blockquote>"Zara captured the essence of our trip so beautifully. Highly recommend!" – Ana, California</blockquote>
        <blockquote>"The express session was fast, fun, and the pictures came out amazing!" – Liam, UK</blockquote>
      </section>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xVftn-CcMeXVcXc5Bc7StuSjcm1Zhux7TLtGrQbIef5LOQ/viewform?usp=header" 
           target="_blank"
           style={{ display: 'inline-block', marginTop: '20px', padding: '12px 24px', backgroundColor: '#ec4899', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
           Book Now
        </a>
      </div>
    </main>
  );
}