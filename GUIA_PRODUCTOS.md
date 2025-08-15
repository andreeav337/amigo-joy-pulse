# 📋 GUÍA COMPLETA DE PRODUCTOS - COLOR JOYERÍA

## 🔗 **1. CADENAS (Elige tu cadena)**
📁 **Archivo:** `client/src/components/BaseSelector.tsx` - **Líneas 15-21**

### **Productos actuales:**
```javascript
{ id: "collar-cadena-dorada", name: "Collar de Cadena Dorada", price: 35, type: "collar" },
{ id: "pulsera-cadena-dorada", name: "Pulsera de Cadena Dorada", price: 35, type: "pulsera" },
{ id: "collar-cadena-plata", name: "Collar de Cadena Plata", price: 32, type: "collar" },
{ id: "pulsera-cadena-plata", name: "Pulsera de Cadena Plata", price: 32, type: "pulsera" },
{ id: "collar-oro-rosa", name: "Collar de Oro Rosa", price: 38, type: "collar" },
```

### **Cómo modificar:**
1. **Cambiar nombre:** Modifica `name: "Nuevo Nombre"`
2. **Cambiar precio:** Modifica `price: 45`
3. **Cambiar icono:** Línea 47 - Cambia los emojis 🔗 ⛓️
4. **Agregar nueva cadena:**
```javascript
{ id: "collar-diamante", name: "Collar de Diamante", price: 50, type: "collar" },
```

---

## 💎 **2. DIJES (Selecciona tus dijes)**
📁 **Archivo:** `client/src/components/CharmCategories.tsx` - **Líneas 20-52**

### **CATEGORÍA: INICIALES**
```javascript
{ id: "letra-a", name: "Letra A", price: 8, emoji: "🅰️", category: "iniciales" },
{ id: "letra-b", name: "Letra B", price: 8, emoji: "🅱️", category: "iniciales" },
// ... hasta letra F
```

### **CATEGORÍA: CHARMS DE COLORES**
```javascript
{ id: "corazon-rojo", name: "Corazón Rojo", price: 12, emoji: "❤️", category: "colores" },
{ id: "estrella-azul", name: "Estrella Azul", price: 10, emoji: "💙", category: "colores" },
{ id: "luna-morada", name: "Luna Morada", price: 11, emoji: "💜", category: "colores" },
// ... más colores
```

### **CATEGORÍA: CHARMS DORADOS**
```javascript
{ id: "corona-dorada", name: "Corona Dorada", price: 18, emoji: "👑", category: "dorados" },
{ id: "llave-dorada", name: "Llave Dorada", price: 15, emoji: "🗝️", category: "dorados" },
// ... más dorados
```

### **CATEGORÍA: ANIMALES**
```javascript
{ id: "gato", name: "Gatito", price: 12, emoji: "🐱", category: "animales" },
{ id: "perro", name: "Perrito", price: 12, emoji: "🐶", category: "animales" },
// ... más animales
```

---

## ✏️ **CÓMO MODIFICAR DIJES:**

### **1. Cambiar nombre y precio:**
```javascript
{ id: "gato", name: "Gatito Adorable", price: 15, emoji: "🐱", category: "animales" },
```

### **2. Cambiar emoji (imagen):**
```javascript
{ id: "gato", name: "Gatito", price: 12, emoji: "😺", category: "animales" },
```

### **3. Agregar nuevo dije:**
```javascript
{ id: "dragon", name: "Dragón", price: 20, emoji: "🐉", category: "animales" },
```

### **4. Crear nueva categoría:**
```javascript
// 1. Agregar los dijes con nueva categoría
{ id: "anillo", name: "Anillo", price: 25, emoji: "💍", category: "joyas" },

// 2. Agregar la categoría en línea 54-59
const categoryNames = {
  iniciales: "Iniciales",
  colores: "Charms de Colores", 
  dorados: "Charms Dorados",
  animales: "Animales",
  joyas: "Joyas Especiales"  // ← Nueva categoría
};
```

---

## 🎨 **CAMBIAR COLORES Y ESTILOS:**
📁 **Archivo:** `client/src/index.css`

### **Colores principales:**
```css
--primary: 142 69% 58%;     /* Color principal */
--primary-foreground: 355 100% 97%;  /* Texto sobre color principal */
```

---

## 📸 **CAMBIAR LOGO:**
📁 **Archivo:** `client/src/pages/Index.tsx` - **Líneas 87-93**

### **Opción 1: Logo con texto (actual):**
```javascript
<span>COLOR JOYERÍA</span>
```

### **Opción 2: Logo con imagen:**
```javascript
<img src="/tu-logo.png" alt="Color Joyería" className="h-16 mx-auto" />
```

---

## 📱 **CAMBIAR WHATSAPP:**
📁 **Archivo:** `client/src/pages/Checkout.tsx` - **Línea 125**
```javascript
const whatsappUrl = `https://wa.me/593999999999?text=${encodeURIComponent(message)}`;
```
**Cambiar:** `593999999999` por tu número real

---

## 🔐 **CAMBIAR CONTRASEÑA ADMIN:**
📁 **Archivo:** `client/src/pages/AdminLogin.tsx` - **Línea 12**
```javascript
const ADMIN_PASSWORD = "colorjoyeria2024";  // ← Cambiar aquí
```

---

## 💡 **EJEMPLOS PRÁCTICOS:**

### **Agregar letra G:**
En `CharmCategories.tsx` línea 27:
```javascript
{ id: "letra-g", name: "Letra G", price: 8, emoji: "🇬", category: "iniciales" },
```

### **Cambiar precio de Corona Dorada:**
Línea 38: cambiar `price: 18` por `price: 25`

### **Agregar nueva cadena de platino:**
En `BaseSelector.tsx` línea 21:
```javascript
{ id: "collar-platino", name: "Collar de Platino", price: 45, type: "collar" },
```

---

## ⚠️ **IMPORTANTE:**
- Siempre mantén el formato exacto
- Los `id` deben ser únicos
- Los precios son números enteros
- Los emojis son la "imagen" de cada producto
- Después de hacer cambios, la página se actualiza automáticamente