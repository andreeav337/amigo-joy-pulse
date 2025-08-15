import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";

const AdminLogin = () => {
  const [, setLocation] = useLocation();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Contraseña simple para acceso admin (puedes cambiarla)
    const ADMIN_PASSWORD = "colorjoyeria2024";
    
    if (password === ADMIN_PASSWORD) {
      // Guardar token de admin en localStorage
      localStorage.setItem('adminLoggedIn', 'true');
      setLocation('/orders');
    } else {
      setError("Contraseña incorrecta");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-full max-w-md p-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 text-xl font-bold text-primary mb-2">
            <span>✨</span>
            <span>COLOR JOYERÍA</span>
            <span>✨</span>
          </div>
          <h2 className="text-2xl font-bold">Acceso Administrativo</h2>
          <p className="text-muted-foreground">
            Ingresa la contraseña para ver los pedidos
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa la contraseña"
              data-testid="input-admin-password"
            />
          </div>

          {error && (
            <div className="text-sm text-red-500 text-center">
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full"
            data-testid="button-admin-login"
          >
            Ingresar
          </Button>

          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={() => setLocation('/')}
              data-testid="button-back-home"
            >
              Volver al inicio
            </Button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Nota:</strong> La contraseña por defecto es "colorjoyeria2024". 
            Puedes cambiarla en el archivo AdminLogin.tsx línea 12.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;