import { useState } from "react";
import { BaseSelector } from "@/components/BaseSelector";
import { CharmCategories } from "@/components/CharmCategories";
import { OrderInput } from "@/components/OrderInput";

const Index = () => {
  const [selectedBase, setSelectedBase] = useState<string | null>(null);
  const [selectedCharms, setSelectedCharms] = useState<{ [key: string]: number }>({});
  const [orderText, setOrderText] = useState("");

  const handleCharmChange = (charmId: string, quantity: number) => {
    setSelectedCharms(prev => ({
      ...prev,
      [charmId]: quantity
    }));
  };

  const handleNext = () => {
    console.log("Proceeding to next page with:", {
      base: selectedBase,
      charms: selectedCharms,
      order: orderText
    });
    // Aquí irías a la siguiente página
    alert("¡Perfecto! Ahora dime qué sigue en la siguiente página y te lo creo.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>✨</span>
              <span>color</span>
              <span className="font-semibold">joyería</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Diseña Tu Joyería
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Personaliza tu pulsera o collar con dijes únicos
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
