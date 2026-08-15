'use client';

import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CollectionSection } from './components/CollectionSection';
import { AccessoriesSection } from './components/AccessoriesSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CategoryDetailModal } from './components/CategoryDetailModal';
import { AccessoryModal } from './components/AccessoryModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CollectionItem, CollectionCategory, AccessoryProduct } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<CollectionItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CollectionCategory | null>(null);
  const [selectedAccessory, setSelectedAccessory] = useState<AccessoryProduct | null>(null);

  // Initialize smooth scrolling with Lenis
  const lenisRef = useLenis();

  const handleScrollToCollection = () => {
    if (lenisRef.current) {
      const collectionElement = document.getElementById('collection');
      if (collectionElement) {
        lenisRef.current.scrollTo(collectionElement, { offset: -70, duration: 1.2 });
        return;
      }
    }
    const collectionElement = document.getElementById('collection');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Luxury Loading Animation Screen */}
      <Preloader />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection onExploreClick={handleScrollToCollection} />

        {/* 2. Collection Section (White background, Shirts, Trousers, T-Shirts, Hoodies) */}
        <CollectionSection
          onSelectItem={(item) => setSelectedProduct(item)}
          onOpenCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 2b. Curated Accessories (Black background, Watches, Sunglasses & Belts) */}
        <AccessoriesSection
          onSelectAccessory={(item) => setSelectedAccessory(item)}
        />

        {/* 3. Services Section (White background, 4 service pillars) */}
        <ServicesSection />

        {/* 4. About Us Section (Black background) */}
        <AboutSection />

        {/* 5. Contact Section & Map (White background) */}
        <ContactSection />
      </main>

      {/* 6. Footer (Black background, 4 columns) */}
      <Footer />

      {/* Modals & Dialogs */}
      <ProductModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <CategoryDetailModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onSelectItem={(item) => setSelectedProduct(item)}
      />

      <AccessoryModal
        product={selectedAccessory}
        onClose={() => setSelectedAccessory(null)}
      />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
