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
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
          1
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Escoge tu modelo de cadena</h2>
          <p className="text-gray-600 text-sm">Selecciona la base perfecta para tu diseño</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {baseOptions.map((option) => (
          <Card
            key={option.id}
            className={`p-4 transition-all duration-300 border-2 rounded-xl ${
              option.stock === 0 
                ? 'opacity-50 cursor-not-allowed bg-gray-50 border-gray-200' 
                : selectedBase === option.id
                  ? 'border-rose-400 bg-rose-50 cursor-pointer hover:shadow-xl shadow-rose-100 transform hover:scale-105'
                  : 'cursor-pointer hover:bg-white hover:shadow-xl hover:border-rose-200 transform hover:scale-105 border-gray-200 bg-white'
            }`}
            onClick={() => option.stock > 0 && onSelectBase(option.id)}
            data-testid={`card-base-${option.id}`}
          >
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-3 overflow-hidden relative">
              <img 
                src={option.image} 
                alt={option.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling!.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full flex items-center justify-center text-3xl text-gray-400">
                💿
              </div>
              {selectedBase === option.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
              )}
            </div>
            
            <div className="text-center">
              <h3 className={`font-semibold mb-1 text-sm leading-tight ${
                option.stock === 0 ? 'text-gray-400' : 'text-gray-800'
              }`}>
                {option.name}
              </h3>
              <p className={`text-lg font-bold ${
                option.stock === 0 ? 'text-gray-400' : 'text-rose-600'
              }`}>
                ${option.price}.00
              </p>
              
              {option.stock === 0 && (
                <div className="mt-2 px-3 py-1 bg-red-100 text-red-600 text-xs rounded-full inline-block">
                  Agotado
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};