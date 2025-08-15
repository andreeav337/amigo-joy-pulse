import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

interface Charm {
  id: string;
  name: string;
  price: number;
  emoji: string;
  category: string;
}

interface CharmCategoriesProps {
  selectedCharms: { [charmId: string]: number };
  onCharmChange: (charmId: string, quantity: number) => void;
}

const charmData: Charm[] = [
  // Iniciales
  { id: "letra-a", name: "Letra A", price: 8, emoji: "🅰️", category: "iniciales" },
  { id: "letra-b", name: "Letra B", price: 8, emoji: "🅱️", category: "iniciales" },
  { id: "letra-c", name: "Letra C", price: 8, emoji: "©️", category: "iniciales" },
  { id: "letra-d", name: "Letra D", price: 8, emoji: "🌛", category: "iniciales" },
  { id: "letra-e", name: "Letra E", price: 8, emoji: "📧", category: "iniciales" },
  { id: "letra-f", name: "Letra F", price: 8, emoji: "🎏", category: "iniciales" },
  
  // Charms de Colores
  { id: "corazon-rojo", name: "Corazón Rojo", price: 12, emoji: "❤️", category: "colores" },
  { id: "estrella-azul", name: "Estrella Azul", price: 10, emoji: "💙", category: "colores" },
  { id: "luna-morada", name: "Luna Morada", price: 11, emoji: "💜", category: "colores" },
  { id: "sol-amarillo", name: "Sol Amarillo", price: 10, emoji: "💛", category: "colores" },
  { id: "mariposa-rosa", name: "Mariposa Rosa", price: 13, emoji: "🩷", category: "colores" },
  { id: "flor-verde", name: "Flor Verde", price: 9, emoji: "💚", category: "colores" },
  
  // Charms Dorados
  { id: "corona-dorada", name: "Corona Dorada", price: 18, emoji: "👑", category: "dorados" },
  { id: "llave-dorada", name: "Llave Dorada", price: 15, emoji: "🗝️", category: "dorados" },
  { id: "estrella-dorada", name: "Estrella Dorada", price: 16, emoji: "⭐", category: "dorados" },
  { id: "corazon-dorado", name: "Corazón Dorado", price: 17, emoji: "💛", category: "dorados" },
  { id: "herradura-dorada", name: "Herradura Dorada", price: 14, emoji: "🧲", category: "dorados" },
  { id: "sol-dorado", name: "Sol Dorado", price: 19, emoji: "☀️", category: "dorados" },
  
  // Animales
  { id: "gato", name: "Gatito", price: 12, emoji: "🐱", category: "animales" },
  { id: "perro", name: "Perrito", price: 12, emoji: "🐶", category: "animales" },
  { id: "mariposa", name: "Mariposa", price: 11, emoji: "🦋", category: "animales" },
  { id: "pez", name: "Pececito", price: 10, emoji: "🐠", category: "animales" },
  { id: "pajaro", name: "Pajarito", price: 11, emoji: "🐦", category: "animales" },
  { id: "unicornio", name: "Unicornio", price: 15, emoji: "🦄", category: "animales" },
];

const categoryNames = {
  iniciales: "Iniciales",
  colores: "Charms de Colores",
  dorados: "Charms Dorados",
  animales: "Animales"
};

export const CharmCategories = ({ selectedCharms, onCharmChange }: CharmCategoriesProps) => {
  const categories = Object.keys(categoryNames) as Array<keyof typeof categoryNames>;
  const totalSelected = Object.values(selectedCharms).reduce((sum, qty) => sum + qty, 0);

  const updateCharmQuantity = (charmId: string, change: number) => {
    const current = selectedCharms[charmId] || 0;
    const newQuantity = Math.max(0, current + change);
    onCharmChange(charmId, newQuantity);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
          2
        </div>
        <h2 className="text-xl font-semibold text-foreground">Selecciona tus dijes</h2>
      </div>

      <Accordion type="multiple" className="space-y-2">
        {categories.map((category) => {
          const categoryCharms = charmData.filter(charm => charm.category === category);
          const categoryCount = categoryCharms.reduce((sum, charm) => sum + (selectedCharms[charm.id] || 0), 0);
          
          return (
            <AccordionItem 
              key={category} 
              value={category}
              className="border border-border rounded-lg px-4"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex justify-between items-center w-full mr-4">
                  <span className="font-medium">{categoryNames[category]}</span>
                  {categoryCount > 0 && (
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                      {categoryCount}
                    </span>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-4">
                  {categoryCharms.map((charm) => {
                    const quantity = selectedCharms[charm.id] || 0;
                    return (
                      <Card key={charm.id} className="p-3 text-center">
                        <div className="text-2xl mb-2">{charm.emoji}</div>
                        <h4 className="text-sm font-medium mb-1">{charm.name}</h4>
                        <p className="text-xs text-muted-foreground mb-3">${charm.price}.00</p>
                        
                        <Button
                          onClick={() => onCharmChange(charm.id, quantity > 0 ? 0 : 1)}
                          variant={quantity > 0 ? "default" : "outline"}
                          className="w-full text-xs"
                          data-testid={`button-charm-${charm.id}`}
                        >
                          {quantity > 0 ? "Seleccionado ✓" : "Seleccionar"}
                        </Button>
                      </Card>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          Seleccionados: <span className="font-semibold text-foreground">{totalSelected} {totalSelected === 1 ? 'dije' : 'dijes'}</span>
        </p>
      </div>
    </div>
  );
};