import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "wouter";

interface CheckoutProps {
  orderData?: any;
}

const Checkout = () => {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    ciudad: "",
    estado: "",
    codigoPostal: "",
    celular: "",
    telefono: "",
    email: "",
    entregaOpcion: "", // "retiro" o "envio"
    ciudadEnvio: "", // "guayaquil" o "fuera"
  });

  // Obtener datos del pedido desde localStorage o props
  const orderData = typeof window !== 'undefined' ? 
    JSON.parse(localStorage.getItem('currentOrder') || '{}') : {};

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateShipping = () => {
    if (formData.entregaOpcion === "retiro") return 0;
    if (formData.entregaOpcion === "envio") {
      return formData.ciudadEnvio === "guayaquil" ? 3 : 6;
    }
    return 0;
  };

  const finalTotal = (orderData.total || 0) + calculateShipping();

  const handleCompleteOrder = async () => {
    try {
      // Preparar datos para guardar en base de datos
      const orderToSave = {
        customerName: formData.nombre,
        customerLastName: formData.apellido,
        customerEmail: formData.email,
        customerPhone: formData.telefono,
        customerCellphone: formData.celular,
        address: formData.direccion,
        city: formData.ciudad,
        state: formData.estado,
        postalCode: formData.codigoPostal,
        baseType: orderData.base,
        baseName: orderData.baseName,
        basePrice: orderData.basePrice?.toString() || "0",
        charms: orderData.charms,
        charmsText: Object.entries(orderData.charms || {})
          .filter(([, qty]) => (qty as number) > 0)
          .map(([charm, qty]) => `${charm.replace(/-/g, ' ')} x${qty as number}`)
          .join(', '),
        orderInstructions: orderData.orderText,
        deliveryMethod: formData.entregaOpcion,
        shippingCity: formData.ciudadEnvio,
        shippingCost: calculateShipping().toString(),
        subtotal: (orderData.total || 0).toString(),
        total: finalTotal.toString(),
        status: "pending"
      };

      // Guardar en base de datos
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderToSave),
      });

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Error al guardar el pedido');
      }

      // Crear mensaje para WhatsApp
      const message = `🛍️ *NUEVO PEDIDO - COLOR JOYERÍA*
📋 *ID Pedido:* ${result.order.id}

👤 *DATOS DEL CLIENTE:*
Nombre: ${formData.nombre} ${formData.apellido}
Email: ${formData.email}
Celular: ${formData.celular}
Teléfono: ${formData.telefono}

📍 *DIRECCIÓN:*
${formData.direccion}
${formData.ciudad}, ${formData.estado} ${formData.codigoPostal}

💎 *PEDIDO:*
Base: ${orderData.baseName || 'No seleccionada'}
Dijes: ${orderToSave.charmsText || 'Ninguno'}
Orden específico: ${orderData.orderText || 'Sin especificar'}

🚚 *ENTREGA:*
${formData.entregaOpcion === 'retiro' ? 'Retiro en Villa Club' : 
  `Envío a ${formData.ciudadEnvio === 'guayaquil' ? 'Guayaquil' : 'otras ciudades'}`}

💰 *TOTALES:*
Subtotal: $${orderData.total || 0}.00
Envío: $${calculateShipping()}.00
*TOTAL: $${finalTotal}.00*`;

      // Cambiar el número por tu WhatsApp real
    const whatsappUrl = `https://wa.me/593999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

      // Limpiar localStorage
      localStorage.removeItem('currentOrder');
      
    } catch (error) {
      console.error('Error al procesar el pedido:', error);
      alert('Error al procesar el pedido. Por favor intenta de nuevo.');
    }
  };

  const isFormValid = formData.nombre && formData.apellido && formData.direccion && 
                     formData.ciudad && formData.celular && formData.entregaOpcion &&
                     (formData.entregaOpcion === 'retiro' || formData.ciudadEnvio);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-flex items-center gap-3 text-2xl font-bold text-primary">
                <span>✨</span>
                <span>COLOR JOYERÍA</span>
                <span>✨</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Finalizar Pedido
            </h1>
            <p className="text-muted-foreground">
              Completa tus datos para procesar tu orden
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Formulario de datos */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Información Personal</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                    data-testid="input-nombre"
                  />
                </div>
                
                <div>
                  <Label htmlFor="apellido">Apellido *</Label>
                  <Input
                    id="apellido"
                    value={formData.apellido}
                    onChange={(e) => handleInputChange('apellido', e.target.value)}
                    data-testid="input-apellido"
                  />
                </div>
              </div>

              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    data-testid="input-email"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="celular">Celular *</Label>
                    <Input
                      id="celular"
                      value={formData.celular}
                      onChange={(e) => handleInputChange('celular', e.target.value)}
                      placeholder="0999999999"
                      data-testid="input-celular"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
                      placeholder="042999999"
                      data-testid="input-telefono"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Dirección de Envío</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="direccion">Dirección *</Label>
                  <Textarea
                    id="direccion"
                    value={formData.direccion}
                    onChange={(e) => handleInputChange('direccion', e.target.value)}
                    placeholder="Calle principal, número de casa, referencias..."
                    rows={3}
                    data-testid="input-direccion"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="ciudad">Ciudad *</Label>
                    <Input
                      id="ciudad"
                      value={formData.ciudad}
                      onChange={(e) => handleInputChange('ciudad', e.target.value)}
                      data-testid="input-ciudad"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="estado">Provincia</Label>
                    <Input
                      id="estado"
                      value={formData.estado}
                      onChange={(e) => handleInputChange('estado', e.target.value)}
                      data-testid="input-estado"
                    />
                  </div>

                  <div>
                    <Label htmlFor="codigoPostal">Código Postal</Label>
                    <Input
                      id="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={(e) => handleInputChange('codigoPostal', e.target.value)}
                      data-testid="input-codigo-postal"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Método de Entrega</h2>
              
              <RadioGroup 
                value={formData.entregaOpcion} 
                onValueChange={(value) => handleInputChange('entregaOpcion', value)}
              >
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="retiro" id="retiro" />
                  <Label htmlFor="retiro" className="flex-1 cursor-pointer">
                    <div className="font-medium">Retiro en Villa Club</div>
                    <div className="text-sm text-muted-foreground">Sin costo adicional</div>
                  </Label>
                  <span className="font-bold text-green-600">GRATIS</span>
                </div>

                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <RadioGroupItem value="envio" id="envio" />
                  <Label htmlFor="envio" className="flex-1 cursor-pointer">
                    <div className="font-medium">Envío a domicilio</div>
                    <div className="text-sm text-muted-foreground">Por Servientrega</div>
                  </Label>
                </div>
              </RadioGroup>

              {formData.entregaOpcion === 'envio' && (
                <div className="mt-4">
                  <Label>Selecciona tu ciudad:</Label>
                  <RadioGroup 
                    value={formData.ciudadEnvio} 
                    onValueChange={(value) => handleInputChange('ciudadEnvio', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="guayaquil" id="guayaquil" />
                      <Label htmlFor="guayaquil" className="flex-1 cursor-pointer">
                        Guayaquil
                      </Label>
                      <span className="font-bold text-primary">$3.00</span>
                    </div>

                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="fuera" id="fuera" />
                      <Label htmlFor="fuera" className="flex-1 cursor-pointer">
                        Otras ciudades
                      </Label>
                      <span className="font-bold text-primary">$6.00</span>
                    </div>
                  </RadioGroup>
                </div>
              )}
            </Card>
          </div>

          {/* Resumen del pedido */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
              
              {orderData.baseImage && (
                <div className="mb-4 text-center">
                  <div className="w-32 h-32 bg-muted rounded-lg mx-auto flex items-center justify-center text-4xl">
                    🔗
                  </div>
                  <h3 className="font-medium mt-2">{orderData.baseName}</h3>
                  <p className="text-sm text-muted-foreground">Con {orderData.totalCharms} dijes</p>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Base seleccionada:</span>
                  <span className="font-medium">${orderData.basePrice || 0}.00</span>
                </div>
                
                {orderData.charms && Object.entries(orderData.charms).map(([charm, quantity]: [string, any]) => (
                  <div key={charm} className="flex justify-between text-sm">
                    <span>{charm.replace(/-/g, ' ')} x{quantity}</span>
                    <span>${orderData.charmPrices?.[charm] * quantity || 0}.00</span>
                  </div>
                ))}
                
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${orderData.total || 0}.00</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Envío:</span>
                    <span>${calculateShipping()}.00</span>
                  </div>
                  
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span className="text-primary">${finalTotal}.00</span>
                  </div>
                </div>
              </div>
            </Card>

            <Button 
              className="w-full h-12 text-lg"
              onClick={handleCompleteOrder}
              disabled={!isFormValid}
              data-testid="button-complete-order"
            >
              Completar Orden
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              En el siguiente paso completarás tu orden contactándonos por WhatsApp, 
              vía transferencia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;