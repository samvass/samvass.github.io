'use client';

import { HoverEffect, Item } from "./ui/card-hover-effect";
import Modal from "./Modal/modal";
import { useState } from "react";
import ModalContent from "./Modal/modal-content";

interface CardHoverEffectCustomProps{
    items: Item[]
}

export function CardHoverEffectCustom({items}: CardHoverEffectCustomProps) {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [item, setItem] = useState<Item>({
    title: "",
    subtitle: "",
    imgSrc: "",
    description: [""],
    date: "",
    imgSecondarySrc: "",
    tags: [],
  })

  const handleClick = (itemSelected: Item) => {
    setItem(itemSelected)
    setIsModalOpen(true)
  }

  return (
    <div className="max-w-5xl mx-auto px-8 z-30">
      <HoverEffect items={items} handleCardClick={handleClick}/>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent 
        title={item.title}
        subtitle={item.subtitle}
        date={item.date}
        image={item.imgSecondarySrc}
        description={item.description}
        tags={item.tags}
        />
      </Modal>
    </div>
  );
}
