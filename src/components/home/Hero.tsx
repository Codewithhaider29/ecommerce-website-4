import React from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 pt-16 pb-32">
      {/* Full-screen video background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Public/Hero/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="text-center mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              <span className="block">Elegance meets</span>
              <span className="block text-pink-400">Technology</span>
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-md mx-auto">
              Discover MH's premium collection of watches, earbuds, bags, and accessories designed for the modern lifestyle.
            </p>
            <div className="flex justify-center">
              <Button size="lg">
                Shop Collection
              </Button>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 transform z-0">
        <div className="h-64 w-64 rounded-full bg-pink-100 blur-3xl opacity-70"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform z-0">
        <div className="h-64 w-64 rounded-full bg-pink-200 blur-3xl opacity-70"></div>
      </div>
    </section>
  );
};

export default Hero;