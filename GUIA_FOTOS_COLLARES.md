# 📸 GUÍA: Cómo Agregar Fotos de Collares

## 🎯 **RESUMEN**
Ya modifiqué el código para mostrar fotos reales de tus collares. Ahora solo necesitas subir las imágenes con los nombres correctos.

## 📁 **DÓNDE PONER LAS FOTOS**
Sube tus fotos a la carpeta `public` del proyecto (en la raíz del proyecto)

## 📝 **NOMBRES EXACTOS QUE DEBEN TENER TUS FOTOS:**

```
public/
├── collar-sirena.jpg          (Collar Sirena - $12)
├── collar-paperclip-mini.jpg  (Collar Paper Clip mini - $10)
├── collar-paperclip.jpg       (Collar Paper Clip - $10)
├── collar-chunky.jpg          (Collar Chunky - $12)
└── collar-balines.jpg         (Collar Balines - $8)
```

## 🖼️ **FORMATOS ACEPTADOS:**
- ✅ `.jpg` (recomendado)
- ✅ `.jpeg`
- ✅ `.png`

## 📏 **RECOMENDACIONES PARA LAS FOTOS:**
- **Tamaño:** 300x300px mínimo (cuadradas)
- **Calidad:** Nítidas y bien iluminadas
- **Fondo:** Preferiblemente blanco o neutro
- **Peso:** Máximo 200KB cada una para carga rápida

## 🔧 **QUÉ PASA SI NO TIENES UNA FOTO**
Si no tienes la foto de un collar específico:
1. La app mostrará un emoji 🔗 como respaldo
2. Puedes agregar la foto más tarde
3. El collar seguirá funcionando normalmente

## 📱 **RESULTADO**
Una vez que subas las fotos, verás:
- ✅ Fotos reales de cada collar en lugar de emojis
- ✅ Efecto hover cuando pasas el mouse
- ✅ Aspecto más profesional

## 🚀 **CÓMO CAMBIAR UN NOMBRE DE COLLAR**
Si quieres cambiar el nombre de un collar, edita el archivo:
`client/src/components/BaseSelector.tsx` en la línea correspondiente:

```javascript
{ id: "collar-sirena", name: "TU NUEVO NOMBRE", price: 12, type: "collar", image: "/collar-sirena.jpg" }
```

¡Listo! Una vez que subas las fotos con esos nombres exactos, se mostrarán automáticamente en la sección 1.