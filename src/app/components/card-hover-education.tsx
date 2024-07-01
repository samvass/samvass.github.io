'use client';

import { HoverEffect, EducationItem } from "./ui/card-hover-effect-education";
import { useState } from "react";

interface CardHoverEffectEducationProps{
    items: EducationItem[]
}

export function CardHoverEffectEducation({items}: CardHoverEffectEducationProps) {

  return (
    <div className="max-w-5xl mx-auto px-8 z-30">
      <HoverEffect items={items} />
    </div>
  );
}
