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
    "corazon-rojo-original": { price: 12, stock: 6 },
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
    
      
    
  
    
    // 🔤 Letras/Iniciales adicionales
    "letra-1": { price: 8, stock: 10 },
    "letra-2": { price: 8, stock: 10 },
    "letra-3": { price: 8, stock: 10 },
    
    // ⭐ Goldfilled charms
    "abeja": { price: 3, stock: 5 },
    "arcoiris": { price: 4, stock: 5 },
    "avispa": { price: 3, stock: 5 },
    "caramelo-1": { price: 3, stock: 5 },
    "caramelo-2": { price: 3, stock: 5 },
    "carta-corazon": { price: 3, stock: 5 },
    "corazon-celeste": { price: 3, stock: 5 },
    "corazon-fucsia": { price: 3, stock: 5 },
    "fresa": { price: 3, stock: 5 },
    "hongo-2": { price: 3, stock: 5 },
    "hongo-blanco": { price: 3, stock: 5 },
    "hongo-morado": { price: 3, stock: 5 },
    "huevo": { price: 3, stock: 5 },
    "mango": { price: 3, stock: 5 },
    "mariquita": { price: 3, stock: 5 },
    "mora": { price: 3, stock: 5 },
    "sandia": { price: 3, stock: 5 },
    "osito-2": { price: 3, stock: 5 },
    "paleta": { price: 3, stock: 5 },
    "perro-globo": { price: 3, stock: 5 },
    "rayo-brillos": { price: 3, stock: 5 },
    "timon": { price: 3, stock: 5 },
    
    // 🔩 Acero charms adicionales
    "aguacate": { price: 3, stock: 5 },
    "aji-gold": { price: 3, stock: 5 },
    "angel-3": { price: 3, stock: 5 },
    "arbol-1": { price: 3, stock: 5 },
    "bota-2": { price: 3, stock: 5 },
    "brillo-circulo": { price: 3, stock: 5 },
    "brillo": { price: 3, stock: 5 },
    "candado": { price: 3, stock: 5 },
    "cangrejo": { price: 3, stock: 5 },
    "sirena": { price: 3, stock: 5 },
    "concha-naranja": { price: 3, stock: 5 },
    "concha-verde": { price: 3, stock: 5 },
    "concha": { price: 3, stock: 5 },
    "corazon-1": { price: 3, stock: 5 },
    "corazon-2": { price: 3, stock: 5 },
    "corazon-rojo": { price: 3, stock: 5 },
    "croissant": { price: 3, stock: 5 },
    "elefeante": { price: 3, stock: 5 },
    "estrella-mar": { price: 3, stock: 5 },
    "estrella": { price: 3, stock: 5 },
    "gato": { price: 3, stock: 5 },
    "herradura": { price: 3, stock: 5 },
    "huella-1": { price: 3, stock: 5 },
    "huella-2": { price: 3, stock: 5 },
    "huella-3": { price: 3, stock: 5 },
    "i-love-u": { price: 3, stock: 5 },
    "lazo-2": { price: 3, stock: 5 },
    "lazo-3": { price: 3, stock: 5 },
    "lazo": { price: 3, stock: 5 },
    "luna-brillo": { price: 3, stock: 5 },
    "medallon-1": { price: 3, stock: 5 },
    "medallon-2": { price: 3, stock: 5 },
    "medialuna": { price: 3, stock: 5 },
    "naranja": { price: 3, stock: 5 },
    "ojo-medallon": { price: 3, stock: 5 },
    "paraguas": { price: 3, stock: 5 },
    "pinas": { price: 3, stock: 5 },
    "pintura": { price: 3, stock: 5 },
    "raqueta": { price: 3, stock: 5 },
    "sandia-2": { price: 3, stock: 5 },
    "sandia-3": { price: 3, stock: 5 },
    "signo-1": { price: 3, stock: 5 },
    "signo-2": { price: 3, stock: 5 },
    "sol-4": { price: 3, stock: 5 },
    "sol-5": { price: 3, stock: 5 },
    "sol-6": { price: 3, stock: 5 },
    "tortuga": { price: 3, stock: 5 },
    "trebol-1": { price: 3, stock: 5 },
    
    // 💎 Piedras/Cuarzos/Otros
    "aji": { price: 4, stock: 5 },
    "concha-blanca": { price: 4, stock: 5 },
    "cuarzos": { price: 4, stock: 5 },
    "flor-perla": { price: 4, stock: 5 },
    "hongo-rojo": { price: 4, stock: 5 },
    "hongo-naranja": { price: 4, stock: 5 },
    "nube": { price: 4, stock: 5 },
    "perla-1": { price: 4, stock: 5 },
    "perla-2": { price: 4, stock: 5 }
    
    // 🐾 Animales (legacy - puedes eliminar si no se usan)
    // "gato": { price: 12, stock: 7 },
    // "perro": { price: 12, stock: 5 },
    // "mariposa": { price: 11, stock: 6 },
    // "pez": { price: 10, stock: 4 },
    // "pajaro": { price: 11, stock: 3 },
    // "unicornio": { price: 15, stock: 1 }
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
      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        {/* Fondo rosa gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300"></div>
        
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              {/* Logo */}
              <div className="mb-6">
                <Link href="/admin-login">
                  <img 
                    src="/logo-olan.png" 
                    alt="Olan Joyería" 
                    className="h-16 mx-auto hover:scale-105 transition-transform cursor-pointer"
                  />
                </Link>
              </div>
              
              {/* Título principal */}
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                Diseña un accesorio tan
                <br />
                <span className="text-rose-600">único como tú</span>
                <span className="ml-2">✨</span>
              </h1>
              
              <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Combina colores, formas y dijes para crear el accesorio perfecto que refleje tu personalidad única.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decoraciones */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-rose-300/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200/40 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* COLUMNA IZQUIERDA: Pasos 1 y 2 */}
            <div className="lg:col-span-2 space-y-7">
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
            </div>

            {/* COLUMNA DERECHA: Paso 3 y Resumen */}
            <div className="lg:col-span-1 space-y-7">
              {/* Step 3: Order Input */}
              <OrderInput 
                orderText={orderText}
                onOrderChange={setOrderText}
                onNext={handleNext}
                selectedCharms={selectedCharms}
                selectedBase={selectedBase}
              />

              {/* Resumen del pedido */}
              {(selectedBase || Object.values(selectedCharms).some(qty => qty > 0)) && (
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Resumen de tu pedido</h3>
                  
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
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
