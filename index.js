import { useState } from "react";

export default function PhotoSite() {
  const [packageType, setPackageType] = useState("tourist");

  const packages = {
    tourist: {
      title: "Tourist Express",
      price: "$75",
      details: [
        "15 minutes",
        "5 edited photos",
        "1 iconic location",
        "Next-day delivery"
      ]
    },
    portrait: {
      title: "Portrait Session",
      price: "$250",
      details: [
        "1 hour session",
        "20 edited photos",
        "Customizable location",
        "Perfect for solo, couples or grads"
      ]
    },
    business: {
      title: "Lifestyle & Business",
      price: "$350+",
      details: [
        "20–30 images",
        "Ideal for cafés, bars, hotels",
        "Social-media optimized",
        "Flexible scheduling"
      ]
    }
  };

  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg"
  ];

  const testimonials = [
    {
      name: "Emily R.",
      quote: "Absolutely loved our beach shoot! Zara made it so fun and natural."
    },
    {
      name: "Kai L.",
      quote: "She captured our restaurant’s vibe perfectly — highly recommended!"
    }
  ];

  const bookingLink = "https://docs.google.com/forms/d/e/1FAIpQLSf1xVftn-CcMeXVcXc5Bc7StuSjcm1Zhux7TLtGrQbIef5LOQ/viewform?usp=header";

  return (
    <main className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Honolulu Photo Sessions</h1>
      <p className="mb-6 text-lg">Capture memories, promote your brand, or get stunning portraits — island style 🌺</p>

      <div className="flex justify-center gap-2 mb-4">
        {Object.keys(packages).map((key) => (
          <button
            key={key}
            style={{
              backgroundColor: packageType === key ? "#ec4899" : "transparent",
              color: packageType === key ? "white" : "#ec4899",
              border: "1px solid #ec4899",
              borderRadius: "6px",
              padding: "8px 16px",
              cursor: "pointer"
            }}
            onClick={() => setPackageType(key)}
          >
            {packages[key].title}
          </button>
        ))}
      </div>

      <section style={{ maxWidth: "400px", margin: "auto", textAlign: "left" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>{packages[packageType].title}</h2>
        <p style={{ fontSize: "1.125rem", fontWeight: "700", color: "#db2777", marginBottom: "0.5rem" }}>{packages[packageType].price}</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem" }}>
          {packages[packageType].details.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <div style={{ marginTop: "1.5rem" }}>
        <button
          style={{
            padding: "12px 24px",
            fontSize: "1.125rem",
            backgroundColor: "#ec4899",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
          onClick={() => window.open(bookingLink, "_blank")}
        >
          Book Now
        </button>
      </div>

      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Gallery</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
          {galleryImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery photo ${idx + 1}`}
              style={{ borderRadius: "1rem", boxShadow: "0 0 6px rgba(0,0,0,0.1)", width: "100%", height: "12rem", objectFit: "cover" }}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Testimonials</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {testimonials.map((t, idx) => (
            <blockquote key={idx} style={{ fontStyle: "italic", backgroundColor: "#f9f9f9", padding: "1rem", borderRadius: "8px" }}>
              “{t.quote}”
              <footer style={{ textAlign: "right", fontWeight: "600", marginTop: "0.5rem" }}>— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: "3rem", fontSize: "0.875rem", color: "#888", textAlign: "center" }}>
        Email: zarabravos@hotmail.com | Instagram: @yourhandle
      </footer>
    </main>
  );
}