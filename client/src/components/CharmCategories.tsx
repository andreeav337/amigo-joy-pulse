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
  { id: "letra-1", name: "Letra 1", price: 8, emoji: "/charms/letra-1.png", category: "iniciales" },
  { id: "letra-2", name: "Letra 2", price: 8, emoji: "/charms/letra-2.png", category: "iniciales" },
  { id: "letra-3", name: "Letra 3", price: 8, emoji: "/charms/letra-3.png", category: "iniciales" },
  
  // Charms de goldfilled
  { id: "abeja", name: "Abeja", price: 3, emoji: "/charms/abeja.png", category: "goldfilled" },
  { id: "arcoiris", name: "Arcoiris", price: 4, emoji: "/charms/arcoiris.png", category: "goldfilled" },
  { id: "avispa", name: "Avispa", price: 3, emoji: "/charms/avispa.png", category: "goldfilled" },
  { id: "caramelo-1", name: "Caramelo 1", price: 3, emoji: "/charms/caramelo-1.png", category: "goldfilled" },
  { id: "caramelo-2", name: "Caramelo 2", price: 3, emoji: "/charms/caramelo-2.png", category: "goldfilled" }, 
  { id: "carta-corazon", name: "Carta", price: 3, emoji: "/charms/carta-corazon.png", category: "goldfilled" },
  { id: "corazon-celeste", name: "Corazón celeste", price: 3, emoji: "/charms/corazon-celeste.png", category: "goldfilled" },
  { id: "corazon-fucsia", name: "Corazón fucsia", price: 3, emoji: "/charms/corazon-fucsia.png", category: "goldfilled" }, 
  { id: "fresa", name: "Frutilla", price: 3, emoji: "/charms/fresa.png", category: "goldfilled" },
  { id: "hongo-2", name: "Hongo 2", price: 3, emoji: "/charms/hongo-2.png", category: "goldfilled" },
  { id: "hongo-blanco", name: "Hongo blanco", price: 3, emoji: "/charms/hongo-blanco.png", category: "goldfilled" },
  { id: "hongo-morado", name: "Hongo morado", price: 3, emoji: "/charms/hongo-morado.png", category: "goldfilled" },
  { id: "huevo", name: "Huevito", price: 3, emoji: "/charms/huevo.png", category: "goldfilled" },
  { id: "mango", name: "Mango", price: 3, emoji: "/charms/mango.png", category: "goldfilled" },
  { id: "mariquita", name: "Mariquita", price: 3, emoji: "/charms/mariquita.png", category: "goldfilled" },
  { id: "mora", name: "Mora", price: 3, emoji: "/charms/mora.png", category: "goldfilled" },
  { id: "sandia", name: "Sandia", price: 3, emoji: "/charms/sandia.png", category: "goldfilled" },
  { id: "osito-2", name: "Osito 2", price: 3, emoji: "/charms/osito-2.png", category: "goldfilled" },
  { id: "paleta", name: "Paleta", price: 3, emoji: "/charms/paleta.png", category: "goldfilled" },
  { id: "perro-globo", name: "Perro globo", price: 3, emoji: "/charms/perro-globo.png", category: "goldfilled" },
  { id: "rayo-brillos", name: "Rayo brillos", price: 3, emoji: "/charms/rayo-brillos.png", category: "goldfilled" },
  { id: "timon", name: "Timón", price: 3, emoji: "/charms/timon.png", category: "goldfilled" },
  
  
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
  { id: "aguacate", name: "Aguacate", price: 3, emoji: "/charms/aguacate.png", category: "acero" },
  { id: "aji-gold", name: "Ají Gold", price: 3, emoji: "/charms/aji-gold.png", category: "acero" },
  { id: "angel-3", name: "Angel 2", price: 3, emoji: "/charms/angel-3.png", category: "acero" },
  { id: "arbol-1", name: "Medalla Árbol", price: 3, emoji: "/charms/arbol-1.png", category: "acero" },
  { id: "bota-2", name: "Bota 2", price: 3, emoji: "/charms/bota-2.png", category: "acero" },
  { id: "brillo-circulo", name: "Brillo", price: 3, emoji: "/charms/brillo-circulo.png", category: "acero" },
  { id: "brillo", name: "Brillo 2", price: 3, emoji: "/charms/brillo.png", category: "acero" },
  { id: "candado", name: "Candado", price: 3, emoji: "/charms/candado.png", category: "acero" },
  { id: "cangrejo", name: "Cangrejo", price: 3, emoji: "/charms/cangrejo.png", category: "acero" },
  { id: "sirena", name: "Sirena", price: 3, emoji: "/charms/cola.png", category: "acero" },
  { id: "concha-naranja", name: "Concha naranja", price: 3, emoji: "/charms/concha-naranja.png", category: "acero" },
  { id: "concha-verde", name: "Concha-verde", price: 3, emoji: "/charms/concha-verde.png", category: "acero" },
  { id: "concha", name: "Concha", price: 3, emoji: "/charms/concha.png", category: "acero" },
  { id: "corazon-1", name: "Corazón 1", price: 3, emoji: "/charms/corazon-1.png", category: "acero" },
  { id: "corazon-2", name: "Corazón 2", price: 3, emoji: "/charms/corazon-2.png", category: "acero" },
  { id: "corazon-rojo", name: "Corazón rojo", price: 3, emoji: "/charms/corazon-rojo.png", category: "acero" }, 
  { id: "croissant", name: "Croissant", price: 3, emoji: "/charms/croissant.png", category: "acero" },
  { id: "elefeante", name: "Elefante", price: 3, emoji: "/charms/elefante.png", category: "acero" },
  { id: "estrella-mar", name: "Estrella de mar", price: 3, emoji: "/charms/estrella-mar.png", category: "acero" },
  { id: "estrella", name: "Estrella", price: 3, emoji: "/charms/estrella.png", category: "acero" },
  { id: "gato", name: "Gato", price: 3, emoji: "/charms/gato.png", category: "acero" },
  { id: "herradura", name: "Herradura", price: 3, emoji: "/charms/herradura.png", category: "acero" },
  { id: "huella-1", name: "Huella 1", price: 3, emoji: "/charms/huella-1.png", category: "acero" },
  { id: "huella-2", name: "Huella 2", price: 3, emoji: "/charms/huella-2.png", category: "acero" },
  { id: "huella-3", name: "Huella 3", price: 3, emoji: "/charms/huella-3.png", category: "acero" },
  { id: "i-love-u", name: "I love you", price: 3, emoji: "/charms/i-love-u.png", category: "acero" },
  { id: "lazo-2", name: "Lazo 2", price: 3, emoji: "/charms/lazo-2.png", category: "acero" },
  { id: "lazo-3", name: "Lazo 3", price: 3, emoji: "/charms/lazo-3.png", category: "acero" },
  { id: "lazo", name: "Lazo", price: 3, emoji: "/charms/Lazo.PNG", category: "acero" },
  { id: "luna-brillo", name: "Luna brillo", price: 3, emoji: "/charms/luna-brillo.png", category: "acero" },
  { id: "medallon-1", name: "Medallon 1", price: 3, emoji: "/charms/medallon-1.png", category: "acero" },
  { id: "medallon-2", name: "Medallon 2", price: 3, emoji: "/charms/medallon-2.png", category: "acero" },
  { id: "medialuna", name: "Medialuna", price: 3, emoji: "/charms/medialuna.png", category: "acero" },
  { id: "naranja", name: "Naranja", price: 3, emoji: "/charms/naranja.png", category: "acero" },
  { id: "ojo-medallon", name: "Ojo medallón", price: 3, emoji: "/charms/ojo-medallon.png", category: "acero" },
  { id: "paraguas", name: "Paraguas", price: 3, emoji: "/charms/paraguas.png", category: "acero" },
  { id: "pinas", name: "Piña", price: 3, emoji: "/charms/pinas.png", category: "acero" },
  { id: "pintura", name: "Pintura", price: 3, emoji: "/charms/pintura.png", category: "acero" },
  { id: "raqueta", name: "Raqueta", price: 3, emoji: "/charms/raqueta.png", category: "acero" },
  { id: "sandia-2", name: "Sandia 2", price: 3, emoji: "/charms/sandria-2.png", category: "acero" },
  { id: "sandia-3", name: "Sandia 3", price: 3, emoji: "/charms/sandia-3.png", category: "acero" },
  { id: "signo-1", name: "Signo 1", price: 3, emoji: "/charms/signo-1.png", category: "acero" },
  { id: "signo-2", name: "Signo 2", price: 3, emoji: "/charms/signo-2.png", category: "acero" },
  { id: "sol-4", name: "Sol 4", price: 3, emoji: "/charms/sol-4.png", category: "acero" },
  { id: "sol-5", name: "Sol 5", price: 3, emoji: "/charms/sol-5.png", category: "acero" },
  { id: "sol-6", name: "Sol 6", price: 3, emoji: "/charms/sol-6.png", category: "acero" },
  { id: "tortuga", name: "Tortuga", price: 3, emoji: "/charms/tortuga.png", category: "acero" },
  { id: "trebol-1", name: "Trebol", price: 3, emoji: "/charms/trebol-1.png", category: "acero" },
  
  
  
  
  
  
  // Piedras
  { id: "aji", name: "Ají resina", price: 4, emoji: "/charms/aji.png", category: "otros" },
  { id: "concha-blanca", name: "Concha Blanca", price: 4, emoji: "/charms/concha-blanca.png", category: "otros" },
  { id: "cuarzos", name: "Cuarzos", price: 4, emoji: "/charms/cuarzos.png", category: "otros" },
  { id: "flor-perla", name: "Flor de perla", price: 4, emoji: "/charms/flor-perla.png", category: "otros" },
  { id: "hongo-rojo", name: "Hongo rojo", price: 4, emoji: "/charms/hongo-rojo.png", category: "otros" },
  { id: "hongo-naranja", name: "Hongo naranja", price: 4, emoji: "/charms/hongo-naranja.png", category: "otros" },
  { id: "nube", name: "Nube", price: 4, emoji: "/charms/nube.png", category: "otros" },
  { id: "perla-1", name: "Perla 1", price: 4, emoji: "/charms/perla-1.png", category: "otros" },
  { id: "perla-2", name: "Perla 2", price: 4, emoji: "/charms/perla-2.png", category: "otros" },

  
];

const categoryNames = {
  iniciales: "Iniciales",
  goldfilled: "Goldfilled",
  acero: "Acero",
  otros: "Piedras / cuarzos / acrílico"
};

const categoryDescriptions = {
  iniciales: "",
  goldfilled: "",
  acero: "",
  otros: ""
};

// Mensajes específicos para charms individuales
const charmMessages: { [key: string]: string } = {
  "cuarzos": "Tenemos: citrino, cuarzo rosa, amatista, jade y más piedras energéticas",
  "letra-1": "Perfecto para personalizar con tu inicial o la de alguien especial",
  "letra-2": "Combina varias letras para formar nombres o palabras únicas",
  "letra-3": "Ideal para crear mensajes personalizados en tu accesorio",
  "signo-1": "Encuentra tu signo zodiacal y lleva tu energía contigo",
  "signo-2": "Conecta con las estrellas usando tu signo del zodiaco",
  "brillo": "Tenemos varios colores brillantes para iluminar tu estilo",
  "brillo-circulo": "Añade un toque de luz y elegancia a tu accesorio"
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
          const categoryCharms = charmData
            .filter(charm => charm.category === category)
            .sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));
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
                {/* Texto descriptivo para la categoría */}
                {categoryDescriptions[category] && (
                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-muted-foreground italic">
                      {categoryDescriptions[category]}
                    </p>
                  </div>
                )}
                
                
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
                        
                        {/* Mensaje específico del charm cuando está seleccionado */}
                        {quantity > 0 && charmMessages[charm.id] && (
                          <div className="bg-primary/10 border border-primary/20 rounded p-2 mb-2">
                            <p className="text-xs text-primary font-medium">
                              ✨ {charmMessages[charm.id]}
                            </p>
                          </div>
                        )}
                        
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