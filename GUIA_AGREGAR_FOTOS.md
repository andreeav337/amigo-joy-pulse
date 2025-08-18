# 📸 GUÍA COMPLETA: CÓMO AGREGAR FOTOS A CHARMS Y CADENAS

## 🎯 RESUMEN RÁPIDO
1. **Cadenas**: Fotos van en la carpeta `client/public/`
2. **Charms**: Se cambian los emojis por imágenes en el código
3. **Formato**: Usar archivos .jpg, .png o .webp

---

## 📿 PARTE 1: FOTOS PARA CADENAS

### 📂 PASO 1: Subir las fotos
1. Ve a la carpeta `client/public/`
2. Sube tus fotos de cadenas con estos nombres exactos:
   ```
   collar-sirena.jpg
   collar-paperclip-mini.jpg
   collar-paperclip.jpg
   collar-chunky.jpg
   collar-balines.jpg
   ```

### 🔧 PASO 2: Las fotos aparecerán automáticamente
- No necesitas cambiar código
- El sistema ya está configurado para mostrar las imágenes
- Si no hay foto, muestra un emoji de respaldo

### 📏 RECOMENDACIONES PARA FOTOS DE CADENAS:
- **Tamaño**: 300x300 píxeles mínimo
- **Formato**: JPG o PNG
- **Fondo**: Blanco o transparente
- **Calidad**: Clara y bien iluminada

---

## 💎 PARTE 2: FOTOS PARA CHARMS

### 📂 PASO 1: Subir fotos de charms
1. Ve a la carpeta `client/public/charms/`
2. Crea la carpeta si no existe
3. Sube las fotos con nombres descriptivos:
   ```
   letra-a.jpg
   letra-b.jpg
   corazon-rojo.jpg
   estrella-azul.jpg
   gato.jpg
   perro.jpg
   corona-dorada.jpg
   etc...
   ```

### 🔧 PASO 2: Modificar el código para usar fotos
Abre `client/src/components/CharmCategories.tsx` y busca la línea 20-50 donde están los charms:

**ANTES (con emojis):**
```javascript
const charmData: Charm[] = [
  { id: "letra-a", name: "Letra A", price: 8, emoji: "🅰️", category: "iniciales" },
  { id: "corazon-rojo", name: "Corazón Rojo", price: 12, emoji: "❤️", category: "colores" },
];
```

**DESPUÉS (con fotos):**
```javascript
const charmData: Charm[] = [
  { id: "letra-a", name: "Letra A", price: 8, emoji: "/charms/letra-a.jpg", category: "iniciales" },
  { id: "corazon-rojo", name: "Corazón Rojo", price: 12, emoji: "/charms/corazon-rojo.jpg", category: "colores" },
];
```

### 🎨 PASO 3: Cambiar cómo se muestran las imágenes
En el mismo archivo, busca alrededor de la línea 117 donde dice:
```javascript
<div className="text-2xl mb-2">{charm.emoji}</div>
```

**Cámbialo por:**
```javascript
<div className="w-12 h-12 mb-2 mx-auto">
  {charm.emoji.startsWith('/') ? (
    <img 
      src={charm.emoji} 
      alt={charm.name}
      className="w-full h-full object-cover rounded-lg"
    />
  ) : (
    <div className="text-2xl">{charm.emoji}</div>
  )}
</div>
```

---

## 📋 LISTA COMPLETA DE NOMBRES PARA FOTOS DE CHARMS

### 🔤 Letras:
- `letra-a.jpg`
- `letra-b.jpg`
- `letra-c.jpg`
- `letra-d.jpg`
- `letra-e.jpg`
- `letra-f.jpg`

### 🌈 Charms de Colores:
- `corazon-rojo.jpg`
- `estrella-azul.jpg`
- `luna-morada.jpg`
- `sol-amarillo.jpg`
- `mariposa-rosa.jpg`
- `flor-verde.jpg`

### ⭐ Charms Dorados:
- `corona-dorada.jpg`
- `llave-dorada.jpg`
- `estrella-dorada.jpg`
- `corazon-dorado.jpg`
- `herradura-dorada.jpg`
- `sol-dorado.jpg`

### 🐾 Animales:
- `gato.jpg`
- `perro.jpg`
- `mariposa.jpg`
- `pez.jpg`
- `pajaro.jpg`
- `unicornio.jpg`

---

## 📏 RECOMENDACIONES PARA FOTOS DE CHARMS:

### ✅ IDEALES:
- **Tamaño**: 100x100 píxeles mínimo
- **Formato**: JPG, PNG o WEBP
- **Fondo**: Blanco o transparente
- **Estilo**: Consistente entre todos los charms
- **Iluminación**: Uniforme y clara

### ❌ EVITAR:
- Fotos borrosas o pixeladas
- Fondos muy coloridos que distraigan
- Tamaños muy diferentes entre charms
- Marcas de agua

---

## 🔄 PROCESO COMPLETO PASO A PASO:

1. **Prepara tus fotos** con los nombres correctos
2. **Sube las fotos** a las carpetas correspondientes
3. **Modifica el código** para usar fotos en lugar de emojis
4. **Guarda los cambios**
5. **¡Listo!** Las fotos aparecerán automáticamente

---

## 💡 TIPS EXTRA:

### Para mezclar fotos y emojis:
```javascript
{ id: "letra-a", name: "Letra A", price: 8, emoji: "/charms/letra-a.jpg", category: "iniciales" },
{ id: "letra-b", name: "Letra B", price: 8, emoji: "🅱️", category: "iniciales" }, // Sigue usando emoji
```

### Para cambiar tamaño de las imágenes:
Modifica `w-12 h-12` por:
- `w-8 h-8` = Más pequeño
- `w-16 h-16` = Más grande
- `w-20 h-20` = Extra grande

### Si una foto no carga:
- Verifica el nombre del archivo
- Asegúrate que esté en la carpeta correcta
- Revisa que no tenga espacios en el nombre

¿Quieres que te ayude a implementar las fotos ahora?