import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { PopButton } from "@/components/PopButton";
import { Badge } from "@/components/ui/badge";

const featuredProducts = [
  {
    name: "复古波普T恤",
    price: "¥199",
    originalPrice: "¥299",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    badge: "限时特价!",
    colors: ["#FF6B35", "#F7931E", "#FFD23F", "#EE4B6A"]
  },
  {
    name: "街头涂鸦帽衫",
    price: "¥369",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    colors: ["#6A4C93", "#C06C84", "#F67280", "#F8B500"]
  },
  {
    name: "波普艺术帆布包",
    price: "¥129",
    originalPrice: "¥189",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    badge: "新品上市!",
    colors: ["#FF4081", "#3F51B5", "#FFC107", "#4CAF50"]
  },
  {
    name: "漫画风运动鞋",
    price: "¥599",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    colors: ["#E53E3E", "#3182CE", "#38A169", "#D69E2E"]
  },
  {
    name: "复古太阳镜",
    price: "¥249",
    originalPrice: "¥349",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    badge: "热销中!",
    colors: ["#2D3748", "#E53E3E", "#3182CE", "#D69E2E"]
  },
  {
    name: "波普风手机壳",
    price: "¥69",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-pop-white">
      <Header />
      <Hero />
      <CategoryGrid />
      
      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-br from-pop-yellow to-pop-orange relative overflow-hidden">
        <div className="absolute inset-0 pop-dots opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-6">
              <h2 className="text-5xl font-pop text-pop-white transform -rotate-2">
                爆款商品 💥
              </h2>
              <div className="absolute -top-4 -right-8 burst">
                <Badge className="bg-pop-red text-pop-white font-comic font-bold px-4 py-2 border-2 border-pop-white">
                  LIMITED!
                </Badge>
              </div>
            </div>
            <p className="text-xl font-comic text-pop-white max-w-2xl mx-auto">
              精选最受欢迎的波普艺术风格商品，每一件都充满创意和个性！
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
          <div className="text-center">
            <PopButton variant="primary" size="lg" className="bg-pop-white text-pop-black hover:bg-pop-pink hover:text-pop-white">
              查看更多商品 →
            </PopButton>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-pop-alt relative">
        <div className="absolute inset-0 pop-halftone opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-5xl font-pop text-pop-white transform rotate-1">
              加入波普族! 🎉
            </h2>
            <p className="text-xl font-comic text-pop-white">
              订阅我们的邮件列表，第一时间获取最新的波普艺术商品和特别优惠！
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="输入你的邮箱地址..."
                className="flex-1 px-6 py-4 border-4 border-pop-black rounded-xl font-comic text-pop-black bg-pop-white focus:outline-none focus:ring-4 focus:ring-pop-yellow"
              />
              <PopButton variant="accent" size="lg">
                订阅!
              </PopButton>
            </div>
            
            <p className="text-sm font-comic text-pop-white/80">
              我们承诺不会发送垃圾邮件，只分享最酷的内容！
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-pop-black text-pop-white py-12 border-t-6 border-pop-orange">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-pop text-pop-orange transform -rotate-1">
                POP!SHOP
              </h3>
              <p className="font-comic">
                让每一天都充满波普艺术的活力与创意！
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-pop text-pop-pink transform rotate-1">商品分类</h4>
              <ul className="space-y-2 font-comic">
                <li>街头服饰</li>
                <li>潮流配饰</li>
                <li>运动装备</li>
                <li>艺术收藏</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-pop text-pop-yellow transform -rotate-1">客户服务</h4>
              <ul className="space-y-2 font-comic">
                <li>联系我们</li>
                <li>配送信息</li>
                <li>退换政策</li>
                <li>尺码指南</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-pop text-pop-blue transform rotate-1">关注我们</h4>
              <div className="flex space-x-4">
                <PopButton variant="secondary" size="sm">📱</PopButton>
                <PopButton variant="accent" size="sm">📧</PopButton>
                <PopButton variant="primary" size="sm">🐦</PopButton>
              </div>
            </div>
          </div>
          
          <div className="border-t-4 border-pop-orange mt-8 pt-8 text-center">
            <p className="font-comic">
              © 2024 POP!SHOP. All rights reserved. Made with 💖 and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;