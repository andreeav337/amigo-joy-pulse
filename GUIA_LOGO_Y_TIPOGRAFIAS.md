# 📝 Guía: Modificar Banner, Logo y Tipografías

## 🖼️ Cómo Cambiar la Imagen del Banner

### Paso 1: Subir tu Imagen
1. Sube tu imagen a la carpeta `client/public/`
2. Dale un nombre fácil como `banner-principal.jpg`

### Paso 2: Cambiar el Código
**Archivo:** `client/src/pages/Index.tsx` (línea aproximada 217)

Busca esta sección:
```jsx
{/* AQUÍ PONES TU IMAGEN DEL BANNER */}
<div className="max-w-4xl mx-auto">
  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
    <div className="text-6xl mb-4">🖼️</div>
    <h2 className="text-xl font-semibold text-gray-700 mb-2">
      Espacio para tu imagen del banner
    </h2>
```

**Reemplázala por:**
```jsx
{/* TU IMAGEN DEL BANNER */}
<div className="max-w-4xl mx-auto">
  <img 
    src="/banner-principal.jpg" 
    alt="Banner principal" 
    className="w-full h-64 object-cover rounded-xl shadow-lg"
  />
</div>
```

---

## 🏷️ Cómo Modificar el Logo (Footer)

### Cambiar el Tamaño del Logo
**Archivo:** `client/src/pages/Index.tsx` (línea aproximada 334)

Busca esta línea:
```jsx
className="h-12 mx-auto hover:scale-105 transition-transform cursor-pointer opacity-70 hover:opacity-100"
```

**Opciones de tamaño disponibles:**

**🔸 TAMAÑOS PEQUEÑOS:**
- `h-6` = 24px de alto (súper pequeño)
- `h-8` = 32px de alto (muy pequeño) 
- `h-10` = 40px de alto (pequeño)
- `h-12` = 48px de alto (mediano-pequeño) - **ACTUAL**

**🔸 TAMAÑOS MEDIANOS:**
- `h-14` = 56px de alto (mediano)
- `h-16` = 64px de alto (mediano-grande)
- `h-18` = 72px de alto (grande)

**🔸 TAMAÑOS GRANDES:**
- `h-20` = 80px de alto (muy grande)
- `h-24` = 96px de alto (extra grande)
- `h-28` = 112px de alto (súper grande)
- `h-32` = 128px de alto (gigante)

**Ejemplo:** Para logo más grande cambiar a:
```jsx
className="h-16 mx-auto hover:scale-105 transition-transform cursor-pointer opacity-70 hover:opacity-100"
```

### Cambiar la Imagen del Logo
**Archivo:** `client/src/pages/Index.tsx` (línea aproximada 330)

Busca esta línea:
```jsx
src="/logo-olan.png"
```

1. Sube tu nueva imagen a `client/public/`
2. Cambia el nombre del archivo en el código:
```jsx
src="/tu-nuevo-logo.png"
```

### Mover el Logo del Footer
Si quieres que el logo aparezca arriba en lugar del footer:
1. Corta toda la sección del footer (líneas 329-343)
2. Pégala después del banner, antes del título principal

---

## 🅰️ Cómo Modificar las Tipografías

### Cambiar la Fuente Principal de Toda la Web
**Archivo:** `client/src/index.css` (líneas 6-8)

Busca esta sección:
```css
/* Aquí puedes cambiar la tipografía principal */
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
```

**Opciones de fuentes recomendadas:**
```css
/* Moderna y limpia */
font-family: 'Inter', sans-serif;

/* Elegante y sofisticada */
font-family: 'Playfair Display', serif;

/* Amigable y redonda */
font-family: 'Nunito', sans-serif;

/* Clásica y legible */
font-family: 'Open Sans', sans-serif;

/* Minimalista */
font-family: 'Roboto', sans-serif;

/* Solo fuentes del sistema (más rápido) */
font-family: system-ui, -apple-system, sans-serif;
```

### Cambiar el Tamaño del Título Principal
**Archivo:** `client/src/pages/Index.tsx` (línea aproximada 242)

Busca esta línea:
```jsx
<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
```

**Opciones de tamaño:**
- `text-2xl md:text-3xl` = Pequeño
- `text-3xl md:text-4xl` = Mediano
- `text-4xl md:text-5xl` = Grande (actual)
- `text-5xl md:text-6xl` = Muy grande
- `text-6xl md:text-7xl` = Extra grande

### Cambiar el Peso de la Fuente (Grosor)
En la misma línea del título, cambia `font-bold` por:
- `font-light` = Muy delgada
- `font-normal` = Normal
- `font-medium` = Mediana
- `font-semibold` = Semi-gruesa
- `font-bold` = Gruesa (actual)
- `font-extrabold` = Extra gruesa

### Cambiar el Tamaño del Subtítulo
**Archivo:** `client/src/pages/Index.tsx` (línea aproximada 245)

Busca esta línea:
```jsx
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
```

**Opciones de tamaño:**
- `text-sm` = Pequeño
- `text-base` = Normal
- `text-lg` = Grande (actual)
- `text-xl` = Muy grande
- `text-2xl` = Extra grande

---

## 🎨 Cambios Rápidos de Estilo

### Cambiar el Color del Fondo del Banner de Imagen
**Archivo:** `client/src/pages/Index.tsx` (línea aproximada 212)

Cambiar:
```jsx
className="relative bg-gradient-to-r from-gray-100 to-gray-200"
```

Por alguna de estas opciones:
```jsx
{/* Rosa suave */}
className="relative bg-gradient-to-r from-rose-100 to-pink-200"

{/* Azul suave */} 
className="relative bg-gradient-to-r from-blue-100 to-sky-200"

{/* Verde suave */}
className="relative bg-gradient-to-r from-green-100 to-emerald-200"

{/* Morado suave */}
className="relative bg-gradient-to-r from-purple-100 to-violet-200"
```

### Hacer el Banner del Título Más Colorido
**Archivo:** `client/src/pages/Index.tsx` (línea aproximada 232)

Cambiar:
```jsx
className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10"
```

Por:
```jsx
className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20"
```

### Centrar Todo el Texto
Agregar `text-center` a cualquier elemento:
```jsx
className="text-center tu-clase-actual"
```

---

## ⚠️ Notas Importantes
- Después de hacer cambios, la página se actualiza automáticamente
- Siempre prueba en móvil y escritorio
- Si algo se ve mal, puedes deshacer el cambio
- Los cambios en `index.css` afectan toda la web
- Los cambios en componentes específicos solo afectan esa sección