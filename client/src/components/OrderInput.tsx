import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface OrderInputProps {
  orderText: string;
  onOrderChange: (text: string) => void;
  onNext: () => void;
  selectedCharms: { [charmId: string]: number };
  selectedBase: string | null;
}

export const OrderInput = ({ 
  orderText, 
  onOrderChange, 
  onNext, 
  selectedCharms, 
  selectedBase 
}: OrderInputProps) => {
  const hasSelection = selectedBase && Object.values(selectedCharms).some(qty => qty > 0);
  const totalCharms = Object.values(selectedCharms).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
          3
        </div>
        <h2 className="text-xl font-semibold text-foreground">Especifica el orden de tus dijes</h2>
      </div>

      <Card className="p-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Describe cómo quieres que se ordenen tus dijes:
          </label>
          <Textarea
            placeholder="Ejemplo: 'Quiero la letra A al centro, luego un corazón rojo a cada lado, y las estrellas en los extremos' o 'Alterna los colores: azul, dorado, azul, dorado'"
            value={orderText}
            onChange={(e) => onOrderChange(e.target.value)}
            rows={4}
            className="resize-none"
          />
        </div>
        
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Total de dijes seleccionados:</span> {totalCharms}
          </p>
          <p className="text-xs text-muted-foreground">
            Tip: Menciona los nombres específicos de los dijes que seleccionaste para un orden más preciso.
          </p>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button 
          onClick={onNext}
          disabled={!hasSelection || !orderText.trim()}
          className="px-8"
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};