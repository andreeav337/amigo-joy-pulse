import { Card } from "@/components/ui/card";

interface BaseOption {
  id: string;
  name: string;
  price: number;
  type: "collar" | "pulsera";
  image: string;
}

interface BaseSelectorProps {
  selectedBase: string | null;
  onSelectBase: (baseId: string) => void;
}

const baseOptions: BaseOption[] = [
  { id: "collar-sirena", name: "Collar Sirena", price: 12, type: "collar", image: "/collar-sirena.png" },
  { id: "collar-paperclip-mini", name: "Collar Paper Clip (mini)", price: 10, type: "collar", image: "/collar-paperclip-mini.png" },
  { id: "collar-paperclip", name: "Collar Paper Clip", price: 10, type: "collar", image: "/collar-paperclip.png" },
  { id: "collar-chunky", name: "Collar Chunky", price: 12, type: "collar", image: "/collar-chunky.png" },
  { id: "collar-balines", name: "Collar Balines", price: 8, type: "collar", image: "/collar-balines.png" },
];

export const BaseSelector = ({ selectedBase, onSelectBase }: BaseSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
          1
        </div>
        <h2 className="text-xl font-semibold text-foreground">Escoge tu modelo de cadena</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {baseOptions.map((option) => (
          <Card
            key={option.id}
            className={`p-3 cursor-pointer transition-all hover:shadow-md ${
              selectedBase === option.id
                ? 'ring-2 ring-primary bg-primary/5'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => onSelectBase(option.id)}
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
                {option.type === "collar" ? "" : ""}
              </div>
            </div>
            <h3 className="font-medium text-card-foreground mb-1 text-sm">{option.name}</h3>
            <p className="text-xs text-muted-foreground">${option.price}.00</p>
            {selectedBase === option.id && (
              <div className="mt-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full w-fit">
                ✓
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};