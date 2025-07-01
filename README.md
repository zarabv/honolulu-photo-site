import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
          <Button
            key={key}
            variant={packageType === key ? "default" : "outline"}
            onClick={() => setPackageType(key)}
          >
            {packages[key].title}
          </Button>
        ))}
      </div>

      <Card className="text-left max-w-md mx-auto">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">{packages[packageType].title}</h2>
          <p className="text-lg font-bold text-pink-600 mb-2">{packages[packageType].price}</p>
          <ul className="list-disc pl-5">
            {packages[packageType].details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Button
          size="lg"
          className="mt-4"
          onClick={() => window.open(bookingLink, '_blank')}
        >
          Book Now
        </Button>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 gap-4">
          {galleryImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery photo ${idx + 1}`}
              className="rounded-xl shadow-sm object-cover w-full h-48"
            />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="space-y-4">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="text-left">
              <CardContent className="p-4">
                <p className="italic">“{t.quote}”</p>
                <p className="text-sm text-right font-semibold mt-2">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="text-sm text-muted-foreground mt-12">Email: zarabravos@hotmail.com | Instagram: @yourhandle</p>
    </main>
  );
}

