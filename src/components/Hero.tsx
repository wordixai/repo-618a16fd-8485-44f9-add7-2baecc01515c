import { PopButton } from "./PopButton";

export function Hero() {
  return (
    <section className="bg-gradient-pop-alt relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pop-dots opacity-20"></div>
      <div className="absolute top-10 right-10 w-32 h-32 pop-dots-large opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 pop-halftone"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-6xl md:text-8xl font-pop text-pop-white leading-none">
                <span className="block transform -rotate-3 animate-bounce-pop">BOOM!</span>
                <span className="block transform rotate-2 text-pop-yellow">潮流</span>
                <span className="block transform -rotate-1 text-pop-orange">爆款!</span>
              </h2>
              
              <p className="text-xl font-comic text-pop-white max-w-md">
                发现最酷最炫的潮流单品，让你的风格BOOM出来！
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <PopButton variant="accent" size="lg" className="transform hover:rotate-2">
                开始购物! 💥
              </PopButton>
              <PopButton variant="primary" size="lg" className="bg-pop-white text-pop-black border-pop-black hover:bg-pop-yellow">
                查看新品
              </PopButton>
            </div>
            
            <div className="flex items-center space-x-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-pop text-pop-yellow">1000+</div>
                <div className="text-sm font-comic text-pop-white">潮流单品</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-pop text-pop-orange">24H</div>
                <div className="text-sm font-comic text-pop-white">快速配送</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-pop text-pop-pink">★★★★★</div>
                <div className="text-sm font-comic text-pop-white">五星好评</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="comic-frame bg-pop-white p-8 transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop"
                alt="Pop Art Fashion"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-pop-red text-pop-white font-pop text-2xl px-4 py-2 rounded-full border-4 border-pop-white transform rotate-12 animate-pulse-pop">
                HOT!
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 left-6 bg-pop-yellow text-pop-black font-comic font-bold px-3 py-2 rounded-full border-3 border-pop-black transform -rotate-12 animate-bounce-pop">
              新品上市!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-pop-orange text-pop-white font-pop text-xl px-4 py-2 rounded-full border-4 border-pop-black transform rotate-6">
              WOW!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}