# 📝 GUÍA FÁCIL PARA MODIFICAR TU PÁGINA

## ✨ 1. CÓMO CAMBIAR LA TIPOGRAFÍA

### Paso 1: Cambiar fuente en `client/index.html` (línea 9)
```html
<!-- Reemplaza 'Inter' por la fuente que quieras de Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE_AQUI:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Paso 2: Cambiar fuente en `client/src/index.css` (línea 6)
```css
body {
  font-family: 'TU_FUENTE_AQUI', system-ui, -apple-system, sans-serif;
}
```

**Fuentes populares para copiar:**
- Poppins: `family=Poppins:wght@300;400;500;600;700`
- Montserrat: `family=Montserrat:wght@300;400;500;600;700`
- Roboto: `family=Roboto:wght@300;400;500;600;700`

---

## 🎨 2. CÓMO CAMBIAR COLORES

### Ve al archivo `client/src/index.css` línea 10-60:

**Color principal (botones, acentos):**
```css
--primary: 45 85% 45%;  /* Cambia estos números */
```

**Colores de ejemplo:**
- Azul: `220 100% 50%`
- Rosa: `350 70% 60%`
- Verde: `140 70% 45%`
- Morado: `270 70% 55%`

**Fondo de la página:**
```css
--background: 0 0% 98%;  /* Cambia el último número (98% = casi blanco)*/
```

---

## 🏷️ 3. CÓMO CAMBIAR/AGREGAR TU LOGO

### En `client/src/pages/Index.tsx` línea 80-82:

**Para usar tu logo como imagen:**
1. Sube tu logo a `client/public/` con el nombre `logo.png`
2. Reemplaza las líneas 75-79 por:
```jsx
<img src="/logo.png" alt="Color Joyería" className="h-16 mx-auto" />
```

**Para cambiar solo el texto:**
```jsx
<span>TU NOMBRE AQUÍ</span>
```

---

## 💰 4. CÓMO CAMBIAR PRECIOS

### En `client/src/pages/Index.tsx` línea 16-22 (precios de cadenas):
```javascript
{ id: "collar-cadena-dorada", name: "Collar de Cadena Dorada", price: 35 },
```
Solo cambia el número después de `price:`

### En `client/src/pages/Index.tsx` línea 24-29 (precios de dijes):
```javascript
"letra-a": 8,  // Cambia el 8 por el precio que quieras
```

---

## 🔗 5. CÓMO AGREGAR/QUITAR TIPOS DE CADENAS

### En `client/src/components/BaseSelector.tsx` línea 18-23:
```javascript
// Para agregar una nueva opción, copia una línea y modifica:
{ id: "nuevo-tipo", name: "Nombre que aparece", price: 40, type: "collar" },
```

**IMPORTANTE:** Si agregas una cadena nueva, también agrégala en `client/src/pages/Index.tsx` línea 16-22

---

## 📱 6. CÓMO CAMBIAR TEXTOS

### Títulos principales:
- `client/src/pages/Index.tsx` línea 84: "Diseña Tu Joyería"
- `client/src/pages/Index.tsx` línea 87: Descripción bajo el título

### Nombres de pasos:
- `client/src/components/BaseSelector.tsx` línea 33: "Elige tu tipo de cadena"
- `client/src/components/CharmCategories.tsx` línea 75: "Selecciona tus charms"
- `client/src/components/OrderInput.tsx` línea 29: "Especifica el orden de tus dijes"

---

## 🛠️ CONSEJOS IMPORTANTES:

1. **Siempre guarda los cambios** - La página se actualiza automáticamente
2. **Si algo se rompe**, usa el botón de "rollback" en el chat
3. **Los números de línea** pueden cambiar si agregas/quitas texto
4. **Para buscar texto**, usa Ctrl+F en tu navegador
5. **Haz un cambio a la vez** para probar que funciona

---

## 🆘 ¿NECESITAS AYUDA?

Si algo no funciona o quieres hacer cambios más complejos, solo pregúntame:
- "Cambia el color a rosa"
- "Agrega una nueva cadena de plata"
- "Quiero que el logo sea más grande"
- etc.

¡Estoy aquí para ayudarte! 😊