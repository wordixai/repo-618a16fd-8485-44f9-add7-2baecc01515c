import { PopButton } from "./PopButton";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gradient-pop border-b-6 border-pop-black sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-pop text-pop-white transform -rotate-2 hover:animate-wiggle cursor-pointer">
              POP!SHOP
            </h1>
            <div className="burst">
              <Badge className="bg-pop-yellow text-pop-black font-comic font-bold px-3 py-1 border-2 border-pop-black">
                NEW!
              </Badge>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center bg-pop-white border-4 border-pop-black rounded-full px-4 py-2 shadow-lg max-w-md flex-1 mx-8">
            <input 
              type="text"
              placeholder="搜索超酷商品..."
              className="flex-1 bg-transparent outline-none font-comic text-pop-black placeholder-pop-black/60"
            />
            <Search className="w-5 h-5 text-pop-black" />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <PopButton variant="accent" size="sm" className="hidden md:flex">
              登录
            </PopButton>
            
            <div className="relative">
              <PopButton variant="secondary" size="sm">
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden md:inline ml-2">购物车</span>
              </PopButton>
              <Badge className="absolute -top-2 -right-2 bg-pop-red text-pop-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-pop-white">
                3
              </Badge>
            </div>

            <PopButton variant="primary" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </PopButton>
          </div>
        </div>
      </div>
    </header>
  );
}