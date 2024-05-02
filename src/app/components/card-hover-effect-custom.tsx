'use client';

import { HoverEffect, Item } from "./ui/card-hover-effect";

interface CardHoverEffectCustomProps{
    items: Item[]
}

export function CardHoverEffectCustom({items}: CardHoverEffectCustomProps) {

  const handleClick = (item: Item) => {
    
  }

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={items} handleCardClick={handleClick}/>
    </div>
  );
}
