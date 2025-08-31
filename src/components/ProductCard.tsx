import { Card, CardContent } from "@/components/ui/card";
import { PopButton } from "./PopButton";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  colors: string[];
}

export function ProductCard({ 
  name, 
  price, 
  originalPrice, 
  image, 
  badge,
  colors 
}: ProductCardProps) {
  return (
    <Card className="comic-frame bg-pop-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:animate-pulse-pop">
      <div className="relative">
        {badge && (
          <Badge className="absolute top-4 left-4 z-10 bg-pop-red text-pop-white font-comic font-bold px-3 py-1 text-sm border-2 border-pop-black rounded-full transform -rotate-12">
            {badge}
          </Badge>
        )}
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-pop-yellow to-pop-orange p-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover rounded-lg border-4 border-pop-black shadow-lg"
          />
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="font-pop text-xl text-pop-black transform -rotate-1">
          {name}
        </h3>
        
        <div className="flex items-center gap-2">
          {colors.map((color, index) => (
            <div 
              key={index}
              className="w-6 h-6 rounded-full border-3 border-pop-black"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-2xl font-pop text-pop-red transform rotate-1">
              {price}
            </span>
            {originalPrice && (
              <span className="text-lg text-pop-black line-through font-comic ml-2">
                {originalPrice}
              </span>
            )}
          </div>
          
          <PopButton variant="primary" size="sm">
            加入购物车!
          </PopButton>
        </div>
      </CardContent>
    </Card>
  );
}