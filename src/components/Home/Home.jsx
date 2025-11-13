import { useLoaderData } from "react-router";
import ProductsCard from "../ProductsCard/ProductsCard";

const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      {/* slider */}
<section className="py-10 bg-gray-50 w-full overflow-hidden">
  <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

    
    <div className="space-y-6 text-center md:text-left px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
        Explore Our Global Trade Gallery
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        Discover the excellence of international import and export with our global product showcase.
        From reliable suppliers to high-quality goods — experience smooth trade operations with Import Export Hub.
      </p>
    </div>

    {/* Right Side - Carousel */}
    <div className="carousel w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/KjzWgMT2/caro-1.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-2 sm:left-5 right-2 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">❮</a>
          <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/Dfw7ht8k/caro-2.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-2 sm:left-5 right-2 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">❮</a>
          <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/Mx1BpKNq/caro-3.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-2 sm:left-5 right-2 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">❮</a>
          <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/wFLT6ZKH/caro-4.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-2 sm:left-5 right-2 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">❮</a>
          <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">❯</a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* most recent products */}
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl text-center lg:text-center font-bold text-gray-800 mb-8 sm:text-left">
    Most Recent Products
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <div
        key={product._id}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
      >
        <ProductsCard product={product} />
      </div>
    ))}
  </div>
</div>


      {/* Featured Products */}
      <section className="mt-10 py-10 bg-gradient-to-b from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center">
      Featured Products
    </h2>

    <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scrollbar-hide py-2">
      {/* Product Card */}
      <div className="min-w-[250px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out snap-center">
        <img
          src="https://i.ibb.co.com/vWhhQxc/laptop.jpg"
          alt="Smart Laptop"
          className="rounded-t-2xl object-cover w-full h-52 md:h-60"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-1">Smart Laptop</h3>
          <p className="text-gray-500 text-sm mb-2">Origin: China</p>
          <span className="text-blue-600 font-bold text-base">💰 $750</span>
        </div>
      </div>

      <div className="min-w-[250px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out snap-center">
        <img
          src="https://i.ibb.co.com/tMVJsKqy/Wireless-Headphones.jpg"
          alt="Wireless Headphones"
          className="rounded-t-2xl object-cover w-full h-52 md:h-60"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-1">Wireless Headphones</h3>
          <p className="text-gray-500 text-sm mb-2">Origin: USA</p>
          <span className="text-blue-600 font-bold text-base">💰 $120</span>
        </div>
      </div>

      <div className="min-w-[250px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out snap-center">
        <img
          src="https://i.ibb.co.com/V0vxXP1W/Smartphone.jpg"
          alt="Smartphone"
          className="rounded-t-2xl object-cover w-full h-52 md:h-60"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-1">Smartphone</h3>
          <p className="text-gray-500 text-sm mb-2">Origin: South Korea</p>
          <span className="text-blue-600 font-bold text-base">💰 $600</span>
        </div>
      </div>

      <div className="min-w-[250px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out snap-center">
        <img
          src="https://i.ibb.co.com/PZ3RNmCQ/Gaming-Console.jpg"
          alt="Gaming Console"
          className="rounded-t-2xl object-cover w-full h-52 md:h-60"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-1">Gaming Console</h3>
          <p className="text-gray-500 text-sm mb-2">Origin: Japan</p>
          <span className="text-blue-600 font-bold text-base">💰 $400</span>
        </div>
      </div>
    </div>
  </div>

  {/* Scrollbar Hide Style */}
  <style>
    {`
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `}
  </style>
</section>


      {/* Why chose IEHub */}
      <section className="mt-10 py-10 bg-gradient-to-r from-blue-50 via-white to-gray-100">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    {/* Left Side - Image */}
    <div className="md:w-1/2 flex justify-center">
      <div className="relative w-80 md:w-96">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7439/7439349.png"
          alt="How It Works Illustration"
          className="w-full animate-float rounded-3xl shadow-lg"
        />
        <div className="absolute inset-0 rounded-3xl border-4 border-blue-100 opacity-50 animate-pulse"></div>
      </div>
    </div>

    {/* Right Side - Text */}
    <div className="md:w-1/2 text-center md:text-left space-y-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
        How It Works
      </h2>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        Import Export Hub makes global trade simple and seamless. Follow
        these easy steps to get your products where they need to go.
      </p>

      <div className="space-y-6">
        {/* Step 1 */}
        <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl text-blue-600">{'🔍'}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Browse Products
            </h3>
            <p className="text-gray-600 text-sm">
              Explore verified international items in just a few clicks.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl text-green-600">{'📝'}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Place Your Order
            </h3>
            <p className="text-gray-600 text-sm">
              Choose the products you need and confirm your import easily.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4 hover:scale-105 transition-transform duration-300">
          <div className="text-4xl text-yellow-500">{'🚚'}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Receive Shipment
            </h3>
            <p className="text-gray-600 text-sm">
              Sit back while we ensure safe and timely delivery to your
              location.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Float Animation */}
  <style>
    {`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0px); }
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
    `}
  </style>
</section>


      {/* why choose us */}
      <section className="mt-10 py-10 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Why Choose{" "}
              <span className="text-blue-600">Import Export Hub</span>?
            </h2>
            <p className="text-gray-600 mb-8 text-center md:text-left">
              We’re dedicated to making global trade faster, safer, and smarter
              — empowering businesses to connect seamlessly with trusted
              suppliers worldwide.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300">
                <div className="text-4xl text-blue-600">⚡</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Fast & Reliable
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enjoy quick processing times and reliable international
                    shipment tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300">
                <div className="text-4xl text-green-600">🛡️</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Secure Transactions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Your payments and product data are protected with top-grade
                    security measures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300">
                <div className="text-4xl text-yellow-500">🌍</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Global Network
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Connect with trusted importers and exporters from all around
                    the world.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300">
                <div className="text-4xl text-pink-500">🤝</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Trusted Partnerships
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Work with verified partners and suppliers that guarantee
                    quality service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8382/8382263.png"
              alt="Why Choose Us"
              className="w-80 md:w-96 animate-bounce-slow"
            />
          </div>
        </div>

        <style>
          {`
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animate-bounce-slow {
        animation: bounce-slow 4s ease-in-out infinite;
      }
    `}
        </style>
      </section>

      {/* buyer feedback */}
      <section className="mt-10 bg-gray-50 mb-10">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-12 text-center">
      What Our Customers Say
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out">
        <div className="flex items-center mb-4">
          <img
            className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100"
            src="https://i.ibb.co.com/rfNmxdCS/h4.jpg"
            alt="Customer 1"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Mahi Rahman</h3>
            <p className="text-sm text-gray-500">Entrepreneur</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          "Import Export Hub helped me source quality products quickly. Truly reliable and efficient!"
        </p>
      </div>

     
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out">
        <div className="flex items-center mb-4">
          <img
            className="w-14 h-14 rounded-full mr-4 border-2 border-green-100"
            src="https://i.ibb.co.com/1pKrN96/h2.jpg"
            alt="Customer 2"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Sara Ali</h3>
            <p className="text-sm text-gray-500">Business Owner</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          "The platform is user-friendly and helped me connect with trusted suppliers globally."
        </p>
      </div>

      
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out">
        <div className="flex items-center mb-4">
          <img
            className="w-14 h-14 rounded-full mr-4 border-2 border-yellow-100"
            src="https://i.ibb.co.com/dsYzvGBr/h3.jpg"
            alt="Customer 3"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Arif Khan</h3>
            <p className="text-sm text-gray-500">Importer</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          "Fast delivery and excellent communication. Highly recommend Import Export Hub!"
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
