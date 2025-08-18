# 📸 EJEMPLO: CAMBIAR EMOJIS POR FOTOS EN CHARMS

## 🎯 PASOS SÚPER FÁCILES:

### 1️⃣ SUBE TUS FOTOS
Ve a `client/public/charms/` y sube fotos con estos nombres:
```
letra-a.jpg
letra-b.jpg
corazon-rojo.jpg
estrella-azul.jpg
gato.jpg
perro.jpg
corona-dorada.jpg
```

### 2️⃣ CAMBIA EL CÓDIGO
En `client/src/components/CharmCategories.tsx`, línea 20-50, cambia:

**ANTES:**
```javascript
{ id: "letra-a", name: "Letra A", price: 8, emoji: "🅰️", category: "iniciales" },
{ id: "corazon-rojo", name: "Corazón Rojo", price: 12, emoji: "❤️", category: "colores" },
{ id: "gato", name: "Gatito", price: 12, emoji: "🐱", category: "animales" },
```

**DESPUÉS:**
```javascript
{ id: "letra-a", name: "Letra A", price: 8, emoji: "/charms/letra-a.jpg", category: "iniciales" },
{ id: "corazon-rojo", name: "Corazón Rojo", price: 12, emoji: "/charms/corazon-rojo.jpg", category: "colores" },
{ id: "gato", name: "Gatito", price: 12, emoji: "/charms/gato.jpg", category: "animales" },
```

### 3️⃣ ¡AUTOMÁTICO!
- Si la foto existe → se muestra la foto
- Si no existe → muestra emoji de respaldo
- No necesitas tocar más código

## 🎨 RESULTADO:
- Charms con fotos se ven profesionales
- Si falta una foto, no se rompe nada
- Puedes mezclar fotos y emojis

¿Quieres que cambie algún charm específico ahora?