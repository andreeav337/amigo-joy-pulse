# 💻 CÓDIGO PARA USAR FOTOS EN LUGAR DE EMOJIS

## 🔗 **PARA CADENAS**
Archivo: `client/src/components/BaseSelector.tsx`

### **CAMBIAR LÍNEAS 45-49:**

**ANTES:**
```javascript
<div className="aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center">
  <div className="text-2xl">
    {option.type === "collar" ? "🔗" : "⛓️"}
  </div>
</div>
```

**DESPUÉS:**
```javascript
<div className="aspect-square bg-muted rounded-lg mb-2 overflow-hidden">
  <img 
    src={`/images/${option.id}.jpg`}
    alt={option.name}
    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform"
    onError={(e) => {
      // Si no encuentra la foto, mostrar emoji
      e.currentTarget.style.display = 'none';
      e.currentTarget.nextElementSibling.style.display = 'flex';
    }}
  />
  <div className="w-full h-full flex items-center justify-center text-2xl" style={{display: 'none'}}>
    {option.type === "collar" ? "🔗" : "⛓️"}
  </div>
</div>
```

---

## 💎 **PARA DIJES**
Archivo: `client/src/components/CharmCategories.tsx`

### **CAMBIAR LÍNEA 107:**

**ANTES:**
```javascript
<div className="text-2xl mb-2">{charm.emoji}</div>
```

**DESPUÉS:**
```javascript
<div className="w-12 h-12 mx-auto mb-2 overflow-hidden rounded bg-muted flex items-center justify-center">
  <img 
    src={`/images/${charm.id}.jpg`}
    alt={charm.name}
    className="w-full h-full object-cover hover:scale-110 transition-transform"
    onError={(e) => {
      // Si no encuentra la foto, mostrar emoji
      e.currentTarget.style.display = 'none';
      e.currentTarget.nextElementSibling.style.display = 'block';
    }}
  />
  <div className="text-2xl" style={{display: 'none'}}>{charm.emoji}</div>
</div>
```

---

## ⚙️ **EXPLICACIÓN DEL CÓDIGO:**

1. **`src={"/images/${option.id}.jpg"}`** - Busca la foto con el ID exacto
2. **`object-cover`** - La foto se ajusta perfectamente sin deformarse
3. **`onError`** - Si no encuentra la foto, muestra el emoji original
4. **`hover:scale-105`** - Efecto de zoom al pasar el mouse

---

## 🎯 **RESULTADO:**
- Si tienes la foto → Se muestra la foto
- Si no tienes la foto → Se muestra el emoji original
- Las fotos tienen efectos profesionales (hover, bordes redondeados)