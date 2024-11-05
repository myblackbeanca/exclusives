import React, { useState } from 'react';
import { ShoppingBag, Star, Camera, Vote, Heart, Share2, Palette, RotateCw } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import HexagonImage from '../components/HexagonImage';

const Merch: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [rotation, setRotation] = useState(0);
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'MINY Limited Edition Hoodie',
      price: 89.99,
      holderPrice: 59.99,
      images: [
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&angle=90',
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&angle=180',
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&angle=270'
      ],
      colors: ['black', 'purple', 'navy'],
      sizes: ['S', 'M', 'L', 'XL']
    }
  ];

  const upcomingDesigns = [
    {
      id: 1,
      name: 'Artist Collaboration Tee',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80',
      votes: 128
    },
    {
      id: 2,
      name: 'MINY Festival Edition',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80',
      votes: 156
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Alex M.',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80',
      text: 'The quality is amazing! Love wearing my MINY merch to events.',
      productImage: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Sarah K.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      text: "These designs are fire! Can't wait for the next drop.",
      productImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80'
    }
  ];

  const rotate360 = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleVote = (designId: number) => {
    setSelectedDesign(designId);
  };

  return (
    <>
      <SEOHelmet
        title="MINY Merch | Exclusive Collection"
        description="Shop exclusive MINY merchandise at special holder prices. Limited edition items available only to our community."
        path="/merch"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80"
            alt="Merch collection"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exclusive
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                MINY Collection
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Limited edition merch available only to MINY holders.
              Enjoy special pricing and early access to new drops.
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 360 View */}
            <div className="relative">
              <div className="aspect-square bg-purple-900/20 rounded-lg overflow-hidden">
                <img
                  src={products[0].images[0]}
                  alt={products[0].name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: `rotate(${rotation}deg)` }}
                />
                <button
                  onClick={rotate360}
                  className="absolute bottom-4 right-4 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Rotate view"
                >
                  <RotateCw className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">{products[0].name}</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl text-gray-400 line-through">${products[0].price}</span>
                  <span className="text-3xl text-purple-400">${products[0].holderPrice}</span>
                  <span className="bg-purple-500 text-sm px-2 py-1 rounded">HOLDER PRICE</span>
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Color</h3>
                <div className="flex space-x-4">
                  {products[0].colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color ? 'border-purple-500' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Size</h3>
                <div className="flex space-x-4">
                  {products[0].sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        selectedSize === size
                          ? 'bg-purple-500'
                          : 'bg-purple-900/20 hover:bg-purple-900/40'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reserve Button */}
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center justify-center space-x-2">
                <ShoppingBag className="w-5 h-5" />
                <span>Reserve Your Item</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Design Voting */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Vote on Upcoming Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingDesigns.map((design) => (
              <div key={design.id} className="bg-purple-900/20 rounded-lg overflow-hidden">
                <div className="aspect-square">
                  <img
                    src={design.image}
                    alt={design.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{design.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400">{design.votes} votes</span>
                    <button
                      onClick={() => handleVote(design.id)}
                      className={`px-4 py-2 rounded transition-colors flex items-center space-x-2 ${
                        selectedDesign === design.id
                          ? 'bg-green-600'
                          : 'bg-purple-600 hover:bg-purple-700'
                      }`}
                    >
                      <Vote className="w-4 h-4" />
                      <span>{selectedDesign === design.id ? 'Voted!' : 'Vote'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merch Wall */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Community Merch Wall</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-purple-900/20 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <HexagonImage src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{testimonial.text}</p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={testimonial.productImage}
                    alt="MINY Merch"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center space-x-2 mx-auto">
              <Camera className="w-5 h-5" />
              <span>Share Your MINY Merch</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Merch;