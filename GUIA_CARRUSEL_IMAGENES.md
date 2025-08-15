# 🎠 GUÍA PARA CAMBIAR IMÁGENES DEL CARRUSEL

## 📋 **CÓMO FUNCIONA EL CARRUSEL:**
- Se ubica en la parte superior de la página (header)
- Cambia automáticamente cada 4 segundos
- Los usuarios pueden pausarlo pasando el mouse
- Altura responsive: móvil 256px, tablet 320px, desktop 384px

## 🖼️ **CÓMO CAMBIAR LAS IMÁGENES:**

### **Paso 1: Preparar tus imágenes**
- **Formato recomendado:** JPG o PNG
- **Tamaño recomendado:** 1920x600px (16:9 funciona bien)
- **Peso:** Máximo 500KB por imagen para que cargue rápido
- **Nombres:** banner1.jpg, banner2.jpg, banner3.jpg (o los que prefieras)

### **Paso 2: Subir las imágenes**
1. Coloca tus imágenes en la carpeta `client/public/`
2. Los nombres deben coincidir con los del código

### **Paso 3: Actualizar el código**
En el archivo `client/src/pages/Index.tsx`, busca esta sección:

```javascript
// Imágenes para el carrusel - puedes cambiar estas por tus fotos
const carouselImages = [
  {
    src: "/banner1.jpg", // ← Cambia por el nombre de tu imagen
    alt: "Joyería personalizada Olan" // ← Cambia la descripción
  },
  {
    src: "/banner2.jpg", // ← Cambia por el nombre de tu imagen
    alt: "Collares y pulseras elegantes" // ← Cambia la descripción
  },
  {
    src: "/banner3.jpg", // ← Cambia por el nombre de tu imagen
    alt: "Dijes y charms únicos" // ← Cambia la descripción
  }
];
```

## ✏️ **EJEMPLOS DE CAMBIOS:**

### **Si tus imágenes se llaman diferente:**
```javascript
const carouselImages = [
  {
    src: "/foto-taller.jpg",
    alt: "Nuestro taller de joyería"
  },
  {
    src: "/modelo-collar.jpg", 
    alt: "Modelo luciendo collar personalizado"
  },
  {
    src: "/variedad-dijes.jpg",
    alt: "Gran variedad de dijes disponibles"
  }
];
```

### **Para agregar más imágenes:**
```javascript
const carouselImages = [
  { src: "/banner1.jpg", alt: "Descripción 1" },
  { src: "/banner2.jpg", alt: "Descripción 2" },
  { src: "/banner3.jpg", alt: "Descripción 3" },
  { src: "/banner4.jpg", alt: "Descripción 4" }, // ← Nueva imagen
  { src: "/banner5.jpg", alt: "Descripción 5" }  // ← Nueva imagen
];
```

### **Para usar solo 1 imagen:**
```javascript
const carouselImages = [
  {
    src: "/mi-foto-principal.jpg",
    alt: "Olan Joyería - Accesorios personalizados"
  }
];
```

## 🎨 **CONSEJOS PARA BUENAS IMÁGENES:**

### **Contenido recomendado:**
- Joyas terminadas en uso (modelos luciendo los accesorios)
- Tu taller o espacio de trabajo
- Variedad de dijes y charms disponibles
- Proceso de creación (opcional)

### **Evita:**
- Imágenes muy oscuras (el texto blanco no se verá)
- Fotos borrosas o de baja calidad
- Imágenes con mucho texto (ya hay texto encima)
- Colores muy saturados que distraigan

### **Mejores prácticas:**
- Usa filtros suaves para que el texto se lea bien
- Mantén un estilo consistente entre las imágenes
- Asegúrate de que las imágenes representen tu marca

## 🔧 **PERSONALIZACIÓN ADICIONAL:**

### **Cambiar velocidad del carrusel:**
En `client/src/components/ImageCarousel.tsx`, línea con `Autoplay`:
```javascript
[Autoplay({ delay: 3000 })] // 3000 = 3 segundos
[Autoplay({ delay: 6000 })] // 6000 = 6 segundos
```

### **Cambiar altura del carrusel:**
En `client/src/pages/Index.tsx`, busca:
```javascript
className="h-64 md:h-80 lg:h-96" // Actual
className="h-48 md:h-64 lg:h-80" // Más bajo
className="h-80 md:h-96 lg:h-128" // Más alto
```

### **Cambiar el overlay (sombra sobre la imagen):**
En `client/src/components/ImageCarousel.tsx`:
```javascript
<div className="absolute inset-0 bg-black/10"></div> // Actual (sombra ligera)
<div className="absolute inset-0 bg-black/30"></div> // Sombra más fuerte
<div className="absolute inset-0 bg-black/5"></div>  // Sombra más suave
```

## 🚫 **SI NO TIENES IMÁGENES AÚN:**
El carrusel mostrará un fondo degradado rosado con el mensaje "Agrega imágenes al carrusel" hasta que subas tus fotos.