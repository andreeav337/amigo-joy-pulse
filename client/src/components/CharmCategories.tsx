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
  charmInventory: { [key: string]: { price: number; stock: number } };
}

const charmData: Charm[] = [
  // Iniciales
  { id: "letra-1", name: "Letra 1", price: 8, emoji: "🅰️", category: "iniciales" },
  { id: "letra-2", name: "Letra 2", price: 8, emoji: "🅱️", category: "iniciales" },
  { id: "letra-3", name: "Letra 3", price: 8, emoji: "©️", category: "iniciales" },
  { id: "letra-4", name: "Letra 4", price: 8, emoji: "🌛", category: "iniciales" },
  
  // Charms de goldfilled
  { id: "corazon-rojo", name: "Corazón Rojo", price: 12, emoji: "❤️", category: "goldfilled" },
  { id: "estrella-azul", name: "Estrella Azul", price: 10, emoji: "💙", category: "goldfilled" },
  { id: "luna-morada", name: "Luna Morada", price: 11, emoji: "💜", category: "goldfilled" },
  { id: "sol-amarillo", name: "Sol Amarillo", price: 10, emoji: "💛", category: "goldfilled" },
  { id: "mariposa-rosa", name: "Mariposa Rosa", price: 13, emoji: "🩷", category: "goldfilled" },
  { id: "flor-verde", name: "Flor Verde", price: 9, emoji: "💚", category: "goldfilled" },
  
  // Charms Acero
  { id: "bota", name: "Bota Vaquera", price: 5, emoji: "/charms/bota.png", category: "acero" },
  { id: "corazon-dorado", name: "Corazón dorado", price: 5, emoji: "/charms/corazon-dorado.png", category: "acero" },
  { id: "caracola-1", name: "Caracola ", price: 16, category:"acero", emoji: "/charms/caracola-1.png"},
  { id: "brujula", name: "Brujula", price: 3, emoji: "/charms/brujula.png", category: "acero" },
  { id: "angel", name: "Angel", price: 4, emoji: "/charms/angel.png", category: "acero" },
  { id: "caracola-roja", name: "Caracola Roja", price: 3, emoji: "/charms/caracola-roja.png", category: "acero" },
  { id: "osito", name: "Osito", price: 4, emoji: "/charms/osito.png", category: "acero" },
  { id: "cereza", name: "Cereza", price: 4, emoji: "/charms/cereza.png", category: "acero" },
  { id: "carita", name: "Happy Face", price: 3, emoji: "/charms/carita.png", category: "acero" },
  { id: "luna", name: "Luna", price: 3, emoji: "/charms/luna.png", category: "acero" },
  { id: "rayo", name: "Rayo", price: 3, emoji: "/charms/rayo.png", category: "acero" },
  { id: "dinero", name: "Dinero", price: 3, emoji: "/charms/dinero.png", category: "acero" },
  { id: "delfin", name: "Delfin", price: 3, emoji: "/charms/delfin.png", category: "acero" },
  { id: "tacon", name: "Tacon", price: 3, emoji: "/charms/tacon.png", category: "acero" },
  
  
  
  
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
  goldfilled: "Goldfilled",
  acero: "Acero",
  otros: "Piedras / cuarzos / acrílico"
};

export const CharmCategories = ({ selectedCharms, onCharmChange, charmInventory }: CharmCategoriesProps) => {
  const categories = Object.keys(categoryNames) as Array<keyof typeof categoryNames>;
  const totalSelected = Object.values(selectedCharms).reduce((sum, qty) => sum + qty, 0);

  const updateCharmQuantity = (charmId: string, change: number) => {
    const current = selectedCharms[charmId] || 0;
    const maxStock = charmInventory[charmId]?.stock || 0;
    const newQuantity = Math.max(0, Math.min(maxStock, current + change));
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
                    const inventoryData = charmInventory[charm.id];
                    const isOutOfStock = !inventoryData || inventoryData.stock === 0;
                    const currentPrice = inventoryData?.price || charm.price;
                    const availableStock = inventoryData?.stock || 0;
                    
                    return (
                      <Card key={charm.id} className={`p-3 text-center transition-all duration-300 ease-in-out ${
                        isOutOfStock ? 'opacity-50 bg-gray-50' : 'hover:scale-110 hover:shadow-lg cursor-pointer'
                      }`}>
                        <div className="w-12 h-12 mb-2 mx-auto group-hover:scale-125 transition-transform duration-300">
                          {charm.emoji.startsWith('/') ? (
                            <img 
                              src={charm.emoji} 
                              alt={charm.name}
                              className="w-full h-full object-cover rounded-lg hover:brightness-110 transition-all duration-300"
                              onError={(e) => {
                                // Si la imagen no carga, muestra el emoji de respaldo
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling!.classList.remove('hidden');
                              }}
                            />
                          ) : (
                            <div className="text-2xl flex items-center justify-center h-full hover:scale-125 transition-transform duration-300">{charm.emoji}</div>
                          )}
                          {charm.emoji.startsWith('/') && (
                            <div className="hidden text-2xl flex items-center justify-center h-full">
                              {charm.category === 'iniciales' ? '🅰️' : 
                               charm.category === 'colores' ? '💖' : 
                               charm.category === 'dorados' ? '⭐' : '🐾'}
                            </div>
                          )}
                        </div>
                        <h4 className={`text-sm font-medium mb-1 ${
                          isOutOfStock ? 'text-gray-400' : ''
                        }`}>
                          {charm.name}
                        </h4>
                        <p className={`text-xs mb-1 ${
                          isOutOfStock ? 'text-gray-400' : 'text-muted-foreground'
                        }`}>
                          ${currentPrice}.00
                        </p>
                        
                        {isOutOfStock ? (
                          <>
                            <p className="text-xs text-red-500 mb-2">Agotado</p>
                            <Button
                              disabled
                              variant="outline"
                              className="w-full text-xs opacity-50"
                            >
                              No disponible
                            </Button>
                          </>
                        ) : (
                          <>
                            
                            {quantity === 0 ? (
                              <Button
                                onClick={() => updateCharmQuantity(charm.id, 1)}
                                variant="outline"
                                className="w-full text-xs"
                                data-testid={`button-charm-${charm.id}`}
                              >
                                Agregar
                              </Button>
                            ) : (
                              <div className="space-y-2">
                                <div className="flex items-center justify-center gap-2">
                                  <Button
                                    onClick={() => updateCharmQuantity(charm.id, -1)}
                                    variant="outline"
                                    size="sm"
                                    className="w-8 h-8 p-0"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="font-semibold text-primary min-w-[20px]">
                                    {quantity}
                                  </span>
                                  <Button
                                    onClick={() => updateCharmQuantity(charm.id, 1)}
                                    variant="outline"
                                    size="sm"
                                    className="w-8 h-8 p-0"
                                    disabled={quantity >= availableStock}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                                <Button
                                  onClick={() => onCharmChange(charm.id, 0)}
                                  variant="ghost"
                                  className="w-full text-xs text-red-600 hover:text-red-700"
                                >
                                  Quitar
                                </Button>
                              </div>
                            )}
                          </>
                        )}
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