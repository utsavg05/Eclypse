import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EclypsePage: React.FC = () => {

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen px-10 bg-black text-white font-sans pt-[80px]">
      {/* Navigation Header */}
      <nav className={`fixed top-0 flex w-full z-50 justify-between items-center px-20 py-4 ${scrolled ? ' bg-black/70 backdrop-blur-md' : null}`}>
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-22 h-22 rounded-lg flex items-center justify-center mr-4 cursor-pointer">
            <a className="text-white font-bold text-xl">
              <img className='' src="/204b51ca3d6365117ecab61115aa49089a454cda (1).jpg" alt="eclypse" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-15">
          <a
            href="#"
            className="text-gray-300 text-xl hover:text-white transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-300 text-xl hover:text-white transition-colors duration-200"
          >
            Waitlist
          </a>
          <a
            href="#"
            onClick={() => navigate('/eclypse/cart')}
            className="text-gray-300 text-xl hover:text-white transition-colors duration-200"
          >
            Cart
          </a>
          <button className="bg-white text-black text-xl px-9 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-colors duration-200">
            Buy
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-8 pt-16">
        <div className="grid grid-cols-3 gap-16 ">
          {/* Left Column - Brand and Text */}
          <div className="col-span-2">
            {/* Brand Name */}
            <div className="mb-16">
              <h1 className="text-8xl font-light tracking">
                Eclypse<sup className="text-2xl">®</sup>
              </h1>
            </div>

            {/* Hero Video - Full Width */}
            <div className="mb-16">
              <div className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer w-full">

                {/* Video element */}
                <video
                  src="./public/4937472-uhd_4096_2160_25fps.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />

                {/* Play button overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div> */}

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>


            {/* Philosophy Text */}
            <div className="max-w-4xl">
              <p className="text-5xl font-light leading-relaxed tracking-tight mb-12">
                Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center text-lg text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                Learn more about Eclypse
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>


        </div>
      </main>

      {/* Product Showcase Section */}
      <section className="mt-32 px-8">
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Main street scene image */}
          <div className="col-span-2  h-100aspect-video rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400">
                <video src='./public/4937472-uhd_4096_2160_25fps.mp4'
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                </video>
              </span>
            </div>
          </div>

          {/* Red fabric close-up */}
          <div className="h-100 bg-red-600 rounded-lg overflow-hidden">
            <div className="w-full bg-gradient-to-br from-red-500 to-red-700">
              <img src="199e2f0c8a7b9157e168ba62343cb3ee957ad4ca (1).jpg" alt="" />
            </div>
          </div>

          {/* Red garment detail */}
          <div className="h-100 bg-red-700 rounded-lg overflow-hidden">
            <div className="w-full  bg-gradient-to-br from-red-600 to-red-800">
              <img src="407b7ee4e18ddc71face6cbdd2bd857540f68a64 (1).jpg" alt="" />
            </div>
          </div>

          {/* Hand/workspace scene */}
          <div className="h-100 bg-gray-700 rounded-lg overflow-hidden">
            <div className="w-full h-full  bg-gradient-to-br from-gray-600 to-gray-800">
              <img className='h-full' src="c584edda40c9ee9d39367587a95b5894e2438b19.jpg" alt="" />
            </div>
          </div>

          {/* Yin-yang symbol */}
          <div className=" bg-black rounded-lg overflow-hidden flex items-center justify-center">
            <img className='' src="./public/204b51ca3d6365117ecab61115aa49089a454cda (1).jpg" alt="eclypse" />
          </div>
        </div>

        {/* Product Title */}
        <h2 className="text-5xl tracking-tight font-medium mt-18 mb-16">Silhouette No.1 – Vermilion</h2>

        {/* Product Detail Section */}
        <div className="grid grid-cols-2">
          {/* Left: Large Product Image */}
          <div className="aspect-[4/5] bg-gray-800 overflow-hidden">
            <div className="aspect-video w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
              <video
                src="/4937472-uhd_4096_2160_25fps.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>


          {/* Right: Product Info */}
          <div className="bg-gray-100 p-8 text-black">
            {/* Product Description */}
            <div className="mb-8">
              <p className="text-lg font-bold text-gray-900 leading mt-5">
                A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in repose.
              </p>
            </div>

            {/* Product Thumbnails */}
            <div className="flex space-x-3 mb-8">
              <div className="w-48 h-70 bg-red-600 rounded-lg">
                <img src="407b7ee4e18ddc71face6cbdd2bd857540f68a64 (1).jpg" alt="" />
              </div>
              <div className="w-48 h-70 bg-red-700 rounded-lg">
                <img src="407b7ee4e18ddc71face6cbdd2bd857540f68a64 (1).jpg" alt="" />
              </div>
              <div className="w-48 h-70 bg-red-800 rounded-lg">
                <img src="407b7ee4e18ddc71face6cbdd2bd857540f68a64 (1).jpg" alt="" />
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <span className="text-4xl font-medium text-black mt-3">₹ 7,999</span>
              <span className="text-gray-600 text-sm ml-2">MRP incl. of all taxes</span>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-700 mt-3">Please select a size</span>
                <a href="#" className="text-sm text-gray-600 underline hover:no-underline">
                  Size chart
                </a>
              </div>
              <div className="flex space-x-3 mt-11">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="w-22 h-12 bg-gray-300 text-gray-800 rounded-lg text-md  transition-all duration-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-4">
              <button className="flex-1 w-[30%] bg-transparent border-2 text-xl border-gray-400 text-gray-900 py-4 px-1 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium">
                Add to Cart
              </button>
              <button onClick={() => { navigate('/eclypse/cart') }} className="flex-1 w-[70%] bg-black text-white py-4 px-9 text-xl rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200 font-medium">
                Buy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-32 px-8 pb-16">
        {/* Expandable Sections */}
        <div className="border-t border-gray-800 mb-16">
          {[
            'Size & Fit',
            'Delivery & Returns',
            'How This Was Made'
          ].map((item) => (
            <div key={item} className="border-b border-gray-800">
              <button className="w-full flex justify-between items-center py-6 text-left hover:text-gray-300 transition-colors duration-200">
                <span className="text-lg">{item}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Customer Testimonial */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div>
            <p className="text-xl text-gray-500 uppercase tracking-wider mb-8">Our Customers</p>
            <blockquote className="text-4xl md:text-5xl max-w-3xl font-light tracking-tight leading-snug mb-6 text-gray-100 italic border-l-4 border-yellow-400 pl-6">
              “Understated, but unforgettable. It feels like it was made for me.”
            </blockquote>

            <div>
              <p className="text-3xl">Random Woman</p>
              <p className="text-md text-gray-500">New York</p>
            </div>
          </div>

          {/* Customer Image Placeholder */}
          <div className="flex flex-col space-y-6 items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-yellow-400 scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <span className="text-xs text-gray-300">Customer 1</span>
              </div>
            </div>

            <div className="w-24 h-24 rounded-full overflow-hidden hover:ring-2 hover:ring-gray-400 hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <span className="text-xs text-gray-400">Customer 2</span>
              </div>
            </div>

            <div className="w-24 h-24 rounded-full overflow-hidden hover:ring-2 hover:ring-gray-400 hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <span className="text-xs text-gray-400">Customer 3</span>
              </div>
            </div>
          </div>
        </div>


        {/* Footer Info */}
        <div className="grid grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-medium mb-4">Eclypse</h3>
            <div className="space-y-2 text-gray-400">
              <p>Store</p>
              <p>About</p>
              <p>Buy</p>
              <p>Our Creative</p>
              <p>Process</p>
            </div>
          </div>

          <div>
            <div className="space-y-2 text-gray-400">
              <p>FAQs</p>
              <p>Press</p>
              <p>Terms</p>
              <p>Privacy</p>
            </div>
          </div>

          <div>
            <p className="text-gray-400">+91 124 456 7890</p>
            <p className="text-gray-400">hello@eclypse.com</p>
          </div>

          <div>
            <p className="text-gray-500">© 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EclypsePage;