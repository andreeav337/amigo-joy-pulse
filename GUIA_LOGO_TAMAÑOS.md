# 🖼️ GUÍA DE TAMAÑOS DE LOGO

## 📁 **UBICACIÓN DEL LOGO:**
- **Archivo:** `client/src/pages/Index.tsx` - línea con `className="h-16"`
- **Imagen:** Ya está guardada como `/logo-olan.png`

## 📏 **OPCIONES DE TAMAÑO:**

### **🔸 TAMAÑOS PEQUEÑOS:**
```javascript
className="h-8 mx-auto hover:scale-105 transition-transform cursor-pointer"   // 32px
className="h-10 mx-auto hover:scale-105 transition-transform cursor-pointer"  // 40px  
className="h-12 mx-auto hover:scale-105 transition-transform cursor-pointer"  // 48px
```

### **🔸 TAMAÑOS MEDIANOS (Recomendados):**
```javascript
className="h-14 mx-auto hover:scale-105 transition-transform cursor-pointer"  // 56px
className="h-16 mx-auto hover:scale-105 transition-transform cursor-pointer"  // 64px (ACTUAL)
className="h-18 mx-auto hover:scale-105 transition-transform cursor-pointer"  // 72px
```

### **🔸 TAMAÑOS GRANDES:**
```javascript
className="h-20 mx-auto hover:scale-105 transition-transform cursor-pointer"  // 80px
className="h-24 mx-auto hover:scale-105 transition-transform cursor-pointer"  // 96px
className="h-28 mx-auto hover:scale-105 transition-transform cursor-pointer"  // 112px
className="h-32 mx-auto hover:scale-105 transition-transform cursor-pointer"  // 128px
```

## 🎯 **EFECTOS INCLUIDOS:**
- **`hover:scale-105`** - Se agranda 5% al pasar el mouse
- **`transition-transform`** - Animación suave
- **`cursor-pointer`** - Se ve la manita al pasar el mouse
- **`mx-auto`** - Centrado en la página

## ⚡ **CAMBIO RÁPIDO:**
Para cambiar el tamaño, solo cambia el número en `h-16` por cualquier otro:
- `h-8` = Muy pequeño
- `h-12` = Pequeño
- `h-16` = Mediano (actual)
- `h-20` = Grande
- `h-24` = Muy grande

## 📱 **RESPONSIVE (diferentes tamaños en móvil/desktop):**
Si quieres tamaño diferente en móvil vs computadora:
```javascript
className="h-12 md:h-16 lg:h-20 mx-auto hover:scale-105 transition-transform cursor-pointer"
```
- `h-12` = Móvil (pequeño)
- `md:h-16` = Tablet (mediano)  
- `lg:h-20` = Desktop (grande)

## 🔧 **CÓMO CAMBIAR:**
1. Abre `client/src/pages/Index.tsx`
2. Busca la línea con `h-16`
3. Cambia `h-16` por el tamaño que prefieras
4. Guarda y verás el cambio inmediatamente