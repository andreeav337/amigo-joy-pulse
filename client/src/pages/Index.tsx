import { useState } from "react";
import { BaseSelector } from "@/components/BaseSelector";
import { CharmCategories } from "@/components/CharmCategories";
import { OrderInput } from "@/components/OrderInput";
import { Card } from "@/components/ui/card";
import { useLocation, Link } from "wouter";

const Index = () => {
  const [, setLocation] = useLocation();
  const [selectedBase, setSelectedBase] = useState<string | null>(null);
  const [selectedCharms, setSelectedCharms] = useState<{ [key: string]: number }>({});
  const [orderText, setOrderText] = useState("");

  // 📦 INVENTARIO DE CADENAS (Modifica las cantidades aquí)
  const baseOptions = [
    { id: "collar-sirena", name: "Collar Sirena", price: 12, stock: 5 },
    { id: "collar-paperclip-mini", name: "Collar Paper Clip (mini)", price: 10, stock: 3 },
    { id: "collar-paperclip", name: "Collar Paper Clip", price: 10, stock: 2 },
    { id: "collar-chunky", name: "Collar Chunky", price: 12, stock: 5 },
    { id: "collar-balines", name: "Collar Balines", price: 8, stock: 3 },
  ];

  // 📦 INVENTARIO DE CHARMS (Modifica las cantidades y precios aquí)
  const charmInventory: { [key: string]: { price: number; stock: number } } = {
    // 🔤 Letras
    "letra-a": { price: 8, stock: 10 },
    "letra-b": { price: 8, stock: 8 },
    "letra-c": { price: 8, stock: 12 },
    "letra-d": { price: 8, stock: 5 },
    "letra-e": { price: 8, stock: 7 },
    "letra-f": { price: 8, stock: 9 },
    
    // 🌈 Charms de colores
    "corazon-rojo": { price: 12, stock: 6 },
    "estrella-azul": { price: 10, stock: 4 },
    "luna-morada": { price: 11, stock: 3 },
    "sol-amarillo": { price: 10, stock: 8 },
    "mariposa-rosa": { price: 13, stock: 2 },
    "flor-verde": { price: 9, stock: 5 },
    
    // ⭐ Charms dorados
    "bota": { price: 5, stock: 2 },
    "caracola-1": { price: 4, stock: 4 },
    "brujula": { price: 4, stock: 3 },
    "corazon-dorado": { price: 5, stock: 4 },
    "angel": { price: 4, stock: 3 },
    "sol-dorado": { price: 19, stock: 2 },
    "caracola-roja":{price:3,stock:3},
    "osito":{price:3,stock:3},
    "cereza":{price:3,stock:3},
    "carita":{price:3,stock:3},
    "luna":{price:3,stock:3},
    "rayo":{price:3,stock:3},
    "tacon":{price:3,stock:3},
    "dinero":{price:3,stock:3},
    "delfin":{price:3,stock:3},
    
      
    
  
    
    // 🐾 Animales
    "gato": { price: 12, stock: 7 },
    "perro": { price: 12, stock: 5 },
    "mariposa": { price: 11, stock: 6 },
    "pez": { price: 10, stock: 4 },
    "pajaro": { price: 11, stock: 3 },
    "unicornio": { price: 15, stock: 1 }
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
      const charmPrice = charmInventory[charmId]?.price || 0;
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
      charmPrices: Object.fromEntries(
        Object.entries(charmInventory).map(([id, data]) => [id, data.price])
      ),
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
      {/* Header con Logo */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            {/* Aquí puedes cambiar tu logo - reemplaza el texto por una imagen */}
            <div className="mb-4">
              <Link href="/admin-login">
                <img 
                  src="/logo-olan.png" 
                  alt="Olan Joyería" 
                  className="h-14 mx-auto hover:scale-105 transition-transform cursor-pointer"
                />
              </Link>
              
              {/* OPCIONES DE TAMAÑO - Cambia h-16 por cualquiera de estos:
              
              TAMAÑOS PEQUEÑOS:
              h-8   = 32px de alto (muy pequeño)
              h-10  = 40px de alto (pequeño)
              h-12  = 48px de alto (mediano-pequeño)
              
              TAMAÑOS MEDIANOS:
              h-14  = 56px de alto (mediano)
              h-16  = 64px de alto (actual - recomendado)
              h-18  = 72px de alto (mediano-grande)
              
              TAMAÑOS GRANDES:
              h-20  = 80px de alto (grande)
              h-24  = 96px de alto (muy grande)
              h-28  = 112px de alto (extra grande)
              h-32  = 128px de alto (súper grande)
              
              EJEMPLO: Para logo más grande cambiar:
              className="h-24 mx-auto hover:scale-105 transition-transform cursor-pointer"
              */}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Crea tu nuevo accesorio favorito
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
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
            baseOptions={baseOptions.map(base => ({
              ...base,
              type: "collar" as const,
              image: `/collar-${base.id.split('-').slice(1).join('-')}.png`
            }))}
          />

          {/* Step 2: Charm Categories */}
          <CharmCategories 
            selectedCharms={selectedCharms}
            onCharmChange={handleCharmChange}
            charmInventory={charmInventory}
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
                        ${(charmInventory[charmId]?.price || 0) * quantity}.00
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
    </div>
  );
};

export default Index;
