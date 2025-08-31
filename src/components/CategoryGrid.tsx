import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "街头服饰",
    icon: "👕",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=300&fit=crop",
    color: "from-pop-orange to-pop-red"
  },
  {
    name: "潮流配饰",
    icon: "🕶️",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
    color: "from-pop-pink to-pop-blue"
  },
  {
    name: "运动装备",
    icon: "👟",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
    color: "from-pop-yellow to-pop-orange"
  },
  {
    name: "艺术收藏",
    icon: "🎨",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
    color: "from-pop-blue to-pop-pink"
  }
];

export function CategoryGrid() {
  return (
    <section className="py-20 bg-pop-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-pop text-pop-black mb-4 transform -rotate-1">
            热门分类 🔥
          </h2>
          <p className="text-xl font-comic text-pop-black/80">
            每个分类都有独特的波普艺术风格
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="comic-frame group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:animate-wiggle"
            >
              <CardContent className="p-0 relative overflow-hidden">
                <div className={`bg-gradient-to-br ${category.color} p-6 aspect-square relative`}>
                  <div className="absolute inset-0 pop-halftone opacity-20"></div>
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover rounded-lg border-4 border-pop-black opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-4 right-4 text-4xl animate-bounce-pop">
                    {category.icon}
                  </div>
                </div>
                <div className="p-6 bg-pop-white">
                  <h3 className="text-2xl font-pop text-pop-black text-center transform group-hover:rotate-2 transition-transform">
                    {category.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}