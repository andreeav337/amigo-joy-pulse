import { Card } from "@/components/ui/card";

interface BaseOption {
  id: string;
  name: string;
  price: number;
  type: "collar" | "pulsera";
}

interface BaseSelectorProps {
  selectedBase: string | null;
  onSelectBase: (baseId: string) => void;
}

const baseOptions: BaseOption[] = [
  { id: "collar-cadena-dorada", name: "Collar de Cadena Dorada", price: 35, type: "collar" },
  { id: "pulsera-cadena-dorada", name: "Pulsera de Cadena Dorada", price: 35, type: "pulsera" },
  { id: "collar-cadena-plata", name: "Collar de Cadena Plata", price: 32, type: "collar" },
  { id: "pulsera-cadena-plata", name: "Pulsera de Cadena Plata", price: 32, type: "pulsera" },
];

export const BaseSelector = ({ selectedBase, onSelectBase }: BaseSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
          1
        </div>
        <h2 className="text-xl font-semibold text-foreground">Elige tu pieza base</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {baseOptions.map((option) => (
          <Card
            key={option.id}
            className={`p-4 cursor-pointer transition-all hover:shadow-md ${
              selectedBase === option.id
                ? 'ring-2 ring-primary bg-primary/5'
                : 'hover:bg-accent/50'
            }`}
            onClick={() => onSelectBase(option.id)}
          >
            <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
              <div className="text-4xl">
                {option.type === "collar" ? "🔗" : "⛓️"}
              </div>
            </div>
            <h3 className="font-medium text-card-foreground mb-1">{option.name}</h3>
            <p className="text-sm text-muted-foreground">${option.price}.00</p>
            {selectedBase === option.id && (
              <div className="mt-2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full w-fit">
                Seleccionado
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};