# 🎨 CAMBIAR COLORES DE EFECTOS HOVER

## 🎯 DÓNDE ESTÁN LOS HOVER EFFECTS:

### 📱 Para CHARMS (`client/src/components/CharmCategories.tsx`)
**Línea 115:**
```javascript
'hover:scale-110 hover:shadow-lg cursor-pointer'
```

### 📿 Para CADENAS (`client/src/components/BaseSelector.tsx`)
**Línea 37:**
```javascript
'cursor-pointer hover:bg-gray-50 hover:shadow-md'
```

---

## 🌈 OPCIONES DE COLORES HOVER:

### ✨ **DORADO SUAVE**:
```javascript
// Para charms:
'hover:scale-110 hover:shadow-lg hover:bg-yellow-50 hover:border-yellow-200 cursor-pointer'

// Para cadenas:
'cursor-pointer hover:bg-yellow-50 hover:shadow-md hover:border-yellow-200'
```

### 🌸 **ROSA SUAVE**:
```javascript
// Para charms:
'hover:scale-110 hover:shadow-lg hover:bg-pink-50 hover:border-pink-200 cursor-pointer'

// Para cadenas:
'cursor-pointer hover:bg-pink-50 hover:shadow-md hover:border-pink-200'
```

### 💜 **MORADO SUAVE**:
```javascript
// Para charms:
'hover:scale-110 hover:shadow-lg hover:bg-purple-50 hover:border-purple-200 cursor-pointer'

// Para cadenas:
'cursor-pointer hover:bg-purple-50 hover:shadow-md hover:border-purple-200'
```

### 🔥 **EFECTO BRILLANTE**:
```javascript
// Para charms:
'hover:scale-110 hover:shadow-xl hover:brightness-110 cursor-pointer'

// Para cadenas:
'cursor-pointer hover:brightness-105 hover:shadow-lg'
```

---

## 🔧 CÓMO CAMBIAR:

### Para cambiar color de hover en CHARMS:
1. Abre `client/src/components/CharmCategories.tsx`
2. Ve a la línea 115
3. Cambia la clase hover por tu preferida

### Para cambiar color de hover en CADENAS:
1. Abre `client/src/components/BaseSelector.tsx`
2. Ve a la línea 37
3. Cambia la clase hover por tu preferida

## 💡 COMBINAR CON TU COLOR PRINCIPAL:

Si cambias el color principal de la app, usa hover que combine:

- **App dorada** → `hover:bg-yellow-50`
- **App rosa** → `hover:bg-pink-50`
- **App morada** → `hover:bg-purple-50`
- **App azul** → `hover:bg-blue-50`

¿Qué efecto hover prefieres?