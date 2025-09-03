import { Card } from "@/components/ui/card";

interface BaseOption {
  id: string;
  name: string;
  price: number;
  stock: number;
  type: "collar" | "pulsera";
  image: string;
}

interface BaseSelectorProps {
  selectedBase: string | null;
  onSelectBase: (baseId: string) => void;
  baseOptions: BaseOption[];
}

export const BaseSelector = ({ selectedBase, onSelectBase, baseOptions }: BaseSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
          1
        </div>
        <h2 className="text-xl font-semibold text-foreground">Escoge tu modelo de cadena</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {baseOptions.map((option) => (
          <Card
            key={option.id}
            className={`p-3 transition-all ${
              option.stock === 0 
                ? 'opacity-50 cursor-not-allowed bg-gray-100' 
                : selectedBase === option.id
                  ? 'ring-2 ring-primary bg-primary/5 cursor-pointer hover:shadow-md'
                  : 'cursor-pointer hover:bg-gray-50 hover:shadow-md'
            }`}
            onClick={() => option.stock > 0 && onSelectBase(option.id)}
            data-testid={`card-base-${option.id}`}
          >
            <div className="aspect-square bg-muted rounded-lg mb-2 overflow-hidden">
              <img 
                src={option.image} 
                alt={option.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                onError={(e) => {
                  // Si la imagen no existe, muestra un placeholder
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling!.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full flex items-center justify-center text-2xl">
                {option.type === "collar" ? "📿" : "💎"}
              </div>
            </div>
            <h3 className={`font-medium mb-1 text-sm ${
              option.stock === 0 ? 'text-gray-400' : 'text-card-foreground'
            }`}>
              {option.name}
            </h3>
            <p className={`text-xs ${
              option.stock === 0 ? 'text-gray-400' : 'text-muted-foreground'
            }`}>
              ${option.price}.00
            </p>
            
            {option.stock === 0 ? (
              <div className="mt-2 px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full w-fit">
                Agotado
              </div>
            ) : (
              selectedBase === option.id && (
                <div className="mt-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full w-fit">
                  ✓
                </div>
              )
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};