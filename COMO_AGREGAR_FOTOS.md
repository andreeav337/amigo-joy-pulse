# 📸 CÓMO AGREGAR FOTOS A TUS PRODUCTOS

## 🔗 **OPCIÓN 1: USANDO FOTOS QUE SUBAS A REPLIT**

### **Paso 1: Crear carpeta de imágenes**
1. Crear carpeta `client/public/images/` 
2. Subir tus fotos ahí con nombres como:
   - `collar-dorado.jpg`
   - `pulsera-plata.jpg`
   - `dije-corazon.jpg`

### **Paso 2: Modificar código para cadenas**
En `client/src/components/BaseSelector.tsx` línea 45-49:

**ANTES (con emojis):**
```javascript
<div className="aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center">
  <div className="text-2xl">
    {option.type === "collar" ? "🔗" : "⛓️"}
  </div>
</div>
```

**DESPUÉS (con fotos):**
```javascript
<div className="aspect-square bg-muted rounded-lg mb-2 overflow-hidden">
  <img 
    src={`/images/${option.id}.jpg`}
    alt={option.name}
    className="w-full h-full object-cover rounded-lg"
  />
</div>
```

### **Paso 3: Modificar código para dijes**
En `client/src/components/CharmCategories.tsx` línea 107:

**ANTES (con emojis):**
```javascript
<div className="text-2xl mb-2">{charm.emoji}</div>
```

**DESPUÉS (con fotos):**
```javascript
<div className="w-12 h-12 mx-auto mb-2 overflow-hidden rounded">
  <img 
    src={`/images/${charm.id}.jpg`}
    alt={charm.name}
    className="w-full h-full object-cover"
  />
</div>
```

---

## 🌐 **OPCIÓN 2: USANDO ENLACES DE INTERNET**

### **Modificar directamente con URLs:**

**Para cadenas:**
```javascript
const baseOptions: BaseOption[] = [
  { 
    id: "collar-cadena-dorada", 
    name: "Collar de Cadena Dorada", 
    price: 35, 
    type: "collar",
    image: "https://ejemplo.com/collar-dorado.jpg"  // ← Agregar esto
  },
];
```

**Para dijes:**
```javascript
{ 
  id: "corazon-rojo", 
  name: "Corazón Rojo", 
  price: 12, 
  emoji: "❤️", 
  category: "colores",
  image: "https://ejemplo.com/corazon-rojo.jpg"  // ← Agregar esto
},
```

---

## 💾 **OPCIÓN 3: SUBIR ARCHIVOS ADJUNTOS**

Si tienes fotos en tu computadora:
1. **Súbelas como archivos adjuntos** en el chat
2. Yo las moveré a la carpeta correcta
3. Actualizaré el código automáticamente

---

## 📝 **NOMBRES DE ARCHIVOS SUGERIDOS:**

### **Para cadenas:**
- `collar-cadena-dorada.jpg`
- `pulsera-cadena-dorada.jpg`
- `collar-cadena-plata.jpg`
- `pulsera-cadena-plata.jpg`
- `collar-oro-rosa.jpg`

### **Para dijes (algunos ejemplos):**
- `letra-a.jpg`
- `corazon-rojo.jpg`
- `estrella-azul.jpg`
- `corona-dorada.jpg`
- `gato.jpg`

---

## ⚡ **IMPLEMENTACIÓN RÁPIDA:**

**¿Cuál prefieres?**

1. **Opción fácil:** Subir fotos y yo hago todo el código
2. **Opción manual:** Te doy el código exacto para copiar/pegar
3. **Opción mixta:** Algunos con fotos, otros con emojis

**¿Tienes las fotos listas o necesitas ayuda para organizarlas?**