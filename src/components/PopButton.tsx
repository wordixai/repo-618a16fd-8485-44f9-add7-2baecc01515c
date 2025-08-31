import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PopButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function PopButton({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  onClick 
}: PopButtonProps) {
  const variants = {
    primary: "bg-pop-orange hover:bg-pop-red text-pop-white border-pop-black",
    secondary: "bg-pop-pink hover:bg-pop-blue text-pop-white border-pop-black", 
    accent: "bg-pop-yellow hover:bg-pop-orange text-pop-black border-pop-black"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "font-comic font-bold border-4 rounded-xl shadow-lg transform transition-all duration-200",
        "hover:scale-105 hover:animate-wiggle hover:shadow-xl",
        "active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      style={{
        boxShadow: "4px 4px 0px hsl(var(--pop-black))"
      }}
    >
      {children}
    </Button>
  );
}