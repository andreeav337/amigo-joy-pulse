import { useState } from "react";
import { BaseSelector } from "@/components/BaseSelector";
import { CharmCategories } from "@/components/CharmCategories";
import { OrderInput } from "@/components/OrderInput";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Card } from "@/components/ui/card";
import { useLocation, Link } from "wouter";

const Index = () => {
  const [, setLocation] = useLocation();
  const [selectedBase, setSelectedBase] = useState<string | null>(null);
  const [selectedCharms, setSelectedCharms] = useState<{ [key: string]: number }>({});
  const [orderText, setOrderText] = useState("");

  // Imágenes para el carrusel - puedes cambiar estas por tus fotos
  const carouselImages = [
    {
      src: "/banner1.jpg", // Reemplaza con tu primera imagen
      alt: "Joyería personalizada Olan"
    },
    {
      src: "/banner2.jpg", // Reemplaza con tu segunda imagen  
      alt: "Collares y pulseras elegantes"
    },
    {
      src: "/banner3.jpg", // Reemplaza con tu tercera imagen
      alt: "Dijes y charms únicos"
    }
  ];

  // Datos de precios para calcular el total
  const baseOptions = [
    { id: "collar-cadena-dorada", name: "Collar de Cadena Dorada", price: 35 },
    { id: "pulsera-cadena-dorada", name: "Pulsera de Cadena Dorada", price: 35 },
    { id: "collar-cadena-plata", name: "Collar de Cadena Plata", price: 32 },
    { id: "pulsera-cadena-plata", name: "Pulsera de Cadena Plata", price: 32 },
    { id: "collar-oro-rosa", name: "Collar de Oro Rosa", price: 38 },
  ];

  const charmPrices: { [key: string]: number } = {
    "letra-a": 8, "letra-b": 8, "letra-c": 8, "letra-d": 8, "letra-e": 8, "letra-f": 8,
    "corazon-rojo": 12, "estrella-azul": 10, "luna-morada": 11, "sol-amarillo": 10, "mariposa-rosa": 13, "flor-verde": 9,
    "corona-dorada": 18, "llave-dorada": 15, "estrella-dorada": 16, "corazon-dorado": 17, "herradura-dorada": 14, "sol-dorado": 19,
    "gato": 12, "perro": 12, "mariposa": 11, "pez": 10, "pajaro": 11, "unicornio": 15
  };

  // Calcular total
  const calculateTotal = () => {
    let total = 0;
    
    // Precio de la base
    if (selectedBase) {
      const base = baseOptions.find(b => b.id === selectedBase);
      if (base) total += base.price;
    }
    
    // Precio de los charms
    Object.entries(selectedCharms).forEach(([charmId, quantity]) => {
      const charmPrice = charmPrices[charmId] || 0;
      total += charmPrice * quantity;
    });
    
    return total;
  };

  const handleCharmChange = (charmId: string, quantity: number) => {
    setSelectedCharms(prev => ({
      ...prev,
      [charmId]: quantity
    }));
  };

  const handleNext = () => {
    // Preparar datos del pedido
    const orderData = {
      base: selectedBase,
      baseName: baseOptions.find(b => b.id === selectedBase)?.name,
      basePrice: baseOptions.find(b => b.id === selectedBase)?.price,
      charms: selectedCharms,
      charmPrices: charmPrices,
      totalCharms: Object.values(selectedCharms).reduce((sum, qty) => sum + qty, 0),
      orderText: orderText,
      total: calculateTotal()
    };

    // Guardar datos en localStorage para la siguiente página
    localStorage.setItem('currentOrder', JSON.stringify(orderData));
    
    // Navegar a checkout
    setLocation('/checkout');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header con Carrusel */}
      <div className="relative">
        <ImageCarousel 
          images={carouselImages}
          className="h-96 md:h-[500px] lg:h-[600px]"
        />
        
        {/* Contenido sobre el carrusel */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
              Crea tu nuevo accesorio favorito
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
              Combina colores, formas y dijes para un accesorio 100% tuyo.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Step 1: Base Selection */}
          <BaseSelector 
            selectedBase={selectedBase}
            onSelectBase={setSelectedBase}
          />

          {/* Step 2: Charm Categories */}
          <CharmCategories 
            selectedCharms={selectedCharms}
            onCharmChange={handleCharmChange}
          />

          {/* Total Section */}
          {(selectedBase || Object.values(selectedCharms).some(qty => qty > 0)) && (
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                  💰
                </div>
                <h2 className="text-xl font-semibold text-foreground">Resumen de tu pedido</h2>
              </div>
              
              <div className="space-y-2">
                {selectedBase && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      {baseOptions.find(b => b.id === selectedBase)?.name}
                    </span>
                    <span className="font-medium">
                      ${baseOptions.find(b => b.id === selectedBase)?.price}.00
                    </span>
                  </div>
                )}
                
                {Object.entries(selectedCharms).map(([charmId, quantity]) => {
                  if (quantity === 0) return null;
                  return (
                    <div key={charmId} className="flex justify-between items-center">
                      <span className="text-muted-foreground">
                        {charmId.replace(/-/g, ' ')} x{quantity}
                      </span>
                      <span className="font-medium">
                        ${(charmPrices[charmId] || 0) * quantity}.00
                      </span>
                    </div>
                  );
                })}
                
                <div className="border-t pt-2 mt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${calculateTotal()}.00</span>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Step 3: Order Input */}
          <OrderInput 
            orderText={orderText}
            onOrderChange={setOrderText}
            onNext={handleNext}
            selectedCharms={selectedCharms}
            selectedBase={selectedBase}
          />
        </div>
      </div>

      {/* Footer con Logo */}
      <footer className="border-t border-border bg-muted/30 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/admin-login">
              <img 
                src="/logo-olan.png" 
                alt="Olan Joyería" 
                className="h-12 mx-auto hover:scale-105 transition-transform cursor-pointer opacity-80 hover:opacity-100"
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              © 2025 Olan Joyería. Creando accesorios únicos para ti.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
