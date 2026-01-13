'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThermometerSun, Snowflake, ScanLine, CheckCircle2, Layers, RotateCcw } from 'lucide-react';

export default function UsageFeatures() {
  const [activeTab, setActiveTab] = useState('specs');

  // Arka plan renk geçişleri
  const getBackground = () => {
    switch(activeTab) {
      case 'warm': return 'linear-gradient(135deg, #ea580c 0%, #b91c1c 100%)'; 
      case 'cold': return 'linear-gradient(135deg, #0284c7 0%, #1e40af 100%)'; 
      default: return 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';     
    }
  };

  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      <motion.div
        layout
        animate={{ background: getBackground() }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{
          width: '100%',
          maxWidth: '1200px',
          minHeight: '700px',
          borderRadius: '40px',
          boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          fontFamily: "'Inter', sans-serif"
        }}
      >
        
        {/* Dekoratif Işıklar */}
        <div style={{ position: 'absolute', top: '-20%', left: '-20%', width: '600px', height: '600px', background: 'rgba(255,255,255,0.07)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

        {/* İÇERİK ALANI (Flex Row yapısı: Sol Foto - Sağ Yazı) */}
        <div style={{ flex: 1, position: 'relative', zIndex: 10, padding: '3rem', display: 'flex', alignItems: 'center' }}>
          
          <AnimatePresence mode="wait">
            
            {/* 1. TEKNİK ÖZELLİKLER (SPECS) */}
            {activeTab === 'specs' && (
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                
                {/* SOL: FOTOĞRAF */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}
                  style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}
                >
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.2)', borderRadius: '50%', filter: 'blur(40px)', transform: 'scale(0.9)' }}></div>
                    <img 
                      src="/product-stack.png" 
                      alt="Teknik Özellikler" 
                      style={{ position: 'relative', width: '100%', maxWidth: '450px', height: 'auto', filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4))' }}
                    />
                  </div>
                </motion.div>

                {/* SAĞ: ÖZELLİK LİSTESİ (GRID) */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ flex: 1, minWidth: '300px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}
                >
                  <SpecCard title="60gr/m²" sub="Premium Doku" icon={<Layers size={24} />} delay={0.1} />
                  <SpecCard title="3 Yıl Raf Ömrü" sub="Tazeliğini Korur" icon={<RotateCcw size={24} />} delay={0.2} />
                  <SpecCard title="30x25cm" sub="İdeal Boyut" icon={<ScanLine size={24} />} delay={0.3} />
                  <SpecCard title="Gıda Uyumlu" sub="Güvenli Ambalaj" icon={<CheckCircle2 size={24} />} delay={0.4} />
                </motion.div>

              </div>
            )}
            
            {/* 2. SICAK KULLANIM */}
            {activeTab === 'warm' && (
              <ContentLayout 
                key="warm"
                imageSrc="/warm-wipes.png"
                title="Sıcak Kullanım"
                desc="Mikrodalgada sadece 10 saniye ısıtarak lüks bir sıcak havlu deneyimi sunun. Restoranlarda başlangıç servisi için idealdir."
              />
            )}

            {/* 3. SOĞUK KULLANIM */}
            {activeTab === 'cold' && (
              <ContentLayout 
                key="cold"
                imageSrc="/cold-wipes.png"
                title="Soğuk Kullanım"
                desc="Buzdolabında saklayarak yaz aylarında ferahlatıcı bir serinlik sunun. Alkol içermeyen formülüyle cildi kurutmadan serinletir."
              />
            )}

          </AnimatePresence>
        </div>

        {/* ALT KONTROL PANELİ */}
        <div style={{ 
          position: 'relative', zIndex: 20, 
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.2)',
          padding: '1.5rem', display: 'flex', justifyContent: 'center', gap: '4rem'
        }}>
           <TabButton isActive={activeTab === 'warm'} onClick={() => setActiveTab('warm')} label="Sıcak" icon={<ThermometerSun size={28} />} />
           <div style={{ width: '1px', height: '50px', background: 'rgba(255,255,255,0.2)' }}></div>
           <TabButton isActive={activeTab === 'cold'} onClick={() => setActiveTab('cold')} label="Soğuk" icon={<Snowflake size={28} />} />
           <div style={{ width: '1px', height: '50px', background: 'rgba(255,255,255,0.2)' }}></div>
           <TabButton isActive={activeTab === 'specs'} onClick={() => setActiveTab('specs')} label="Teknik" icon={<ScanLine size={28} />} />
        </div>

      </motion.div>
    </section>
  );
}

// --- BİLEŞENLER ---

interface ContentLayoutProps {
  imageSrc: string;
  title: string;
  desc: string;
}

// 1. Standart İçerik Düzeni (Sol Foto - Sağ Yazı)
function ContentLayout({ imageSrc, title, desc }: ContentLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}
    >
      {/* SOL: FOTO */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
        style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}
      >
         <img 
            src={imageSrc} 
            alt={title} 
            style={{ width: '100%', maxWidth: '500px', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }} 
         />
      </motion.div>

      {/* SAĞ: YAZI */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
        style={{ flex: 1, minWidth: '300px', textAlign: 'left' }}
      >
        <h3 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, textShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
          {title}
        </h3>
        <p style={{ fontSize: '1.25rem', lineHeight: 1.6, opacity: 0.9, maxWidth: '500px' }}>
          {desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

// 2. Özellik Kartı (Grid içinde düzgün duran)
interface SpecCardProps {
  title: string;
  sub: string;
  icon: React.ReactNode;
  delay: number;
}

function SpecCard({ title, sub, icon, delay }: SpecCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{
        display: 'flex', alignItems: 'center', gap: '15px',
        background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
        padding: '20px', borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}
    >
      <div style={{ color: 'white', padding: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>{icon}</div>
      <div>
        <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 700 }}>{title}</h4>
        <p style={{ margin: '4px 0 0 0', fontSize: '14px', opacity: 0.8 }}>{sub}</p>
      </div>
    </motion.div>
  );
}

// 3. Alt Butonlar
interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

function TabButton({ isActive, onClick, icon, label }: TabButtonProps) {
  return (
    <button 
      onClick={onClick}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
        transform: isActive ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        padding: '14px', borderRadius: '50%',
        background: isActive ? 'rgba(255,255,255,0.2)' : 'transparent',
        boxShadow: isActive ? '0 0 20px rgba(255,255,255,0.3)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        {icon}
      </div>
      <span style={{ fontSize: '15px', fontWeight: 600 }}>{label}</span>
    </button>
  );
}