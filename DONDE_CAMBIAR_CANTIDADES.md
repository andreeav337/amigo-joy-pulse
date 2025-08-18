# 🔧 DÓNDE CAMBIAR LAS CANTIDADES DE CHARMS

## 📍 Archivo: `client/src/pages/Index.tsx`

### 🎯 BUSCA ESTA SECCIÓN (línea 27-59):

```javascript
// 📦 INVENTARIO DE CHARMS (Modifica las cantidades y precios aquí)
const charmInventory: { [key: string]: { price: number; stock: number } } = {
  // 🔤 Letras
  "letra-a": { price: 8, stock: 10 },    ← AQUÍ cambias la cantidad
  "letra-b": { price: 8, stock: 8 },     ← AQUÍ cambias la cantidad
  "letra-c": { price: 8, stock: 12 },    ← AQUÍ cambias la cantidad
  
  // 🌈 Charms de colores
  "corazon-rojo": { price: 12, stock: 6 },    ← AQUÍ cambias la cantidad
  "estrella-azul": { price: 10, stock: 4 },   ← AQUÍ cambias la cantidad
  
  // ⭐ Charms dorados
  "corona-dorada": { price: 18, stock: 2 },   ← AQUÍ cambias la cantidad
  
  // 🐾 Animales
  "gato": { price: 12, stock: 7 },            ← AQUÍ cambias la cantidad
};
```

## 🔄 CÓMO CAMBIAR:

### Para cambiar cantidad de Letra A de 10 a 5:
```javascript
"letra-a": { price: 8, stock: 5 },
```

### Para cambiar cantidad de Corazón Rojo de 6 a 3:
```javascript
"corazon-rojo": { price: 12, stock: 3 },
```

### Para marcar como agotado (0 unidades):
```javascript
"corona-dorada": { price: 18, stock: 0 },
```

## 📋 LISTA COMPLETA DE CHARMS:

| Charm | ID en código | Cambiar aquí |
|-------|--------------|--------------|
| Letra A | "letra-a" | `stock: 10` |
| Letra B | "letra-b" | `stock: 8` |
| Letra C | "letra-c" | `stock: 12` |
| Letra D | "letra-d" | `stock: 5` |
| Letra E | "letra-e" | `stock: 7` |
| Letra F | "letra-f" | `stock: 9` |
| Corazón Rojo | "corazon-rojo" | `stock: 6` |
| Estrella Azul | "estrella-azul" | `stock: 4` |
| Luna Morada | "luna-morada" | `stock: 3` |
| Sol Amarillo | "sol-amarillo" | `stock: 8` |
| Mariposa Rosa | "mariposa-rosa" | `stock: 2` |
| Flor Verde | "flor-verde" | `stock: 5` |
| Corona Dorada | "corona-dorada" | `stock: 2` |
| Llave Dorada | "llave-dorada" | `stock: 1` |
| Estrella Dorada | "estrella-dorada" | `stock: 3` |
| Corazón Dorado | "corazon-dorado" | `stock: 4` |
| Herradura Dorada | "herradura-dorada" | `stock: 1` |
| Sol Dorado | "sol-dorado" | `stock: 2` |
| Gato | "gato" | `stock: 7` |
| Perro | "perro" | `stock: 5` |
| Mariposa | "mariposa" | `stock: 6` |
| Pez | "pez" | `stock: 4` |
| Pájaro | "pajaro" | `stock: 3` |
| Unicornio | "unicornio" | `stock: 1` |

## 🎯 PASOS RÁPIDOS:

1. Abre `client/src/pages/Index.tsx`
2. Ve a la línea 27 (busca "INVENTARIO DE CHARMS")
3. Encuentra el charm que quieres cambiar
4. Cambia el número después de `stock:`
5. Guarda el archivo
6. ¡Listo! Los cambios se aplican automáticamente

## ⚠️ IMPORTANTE:
- `stock: 0` = Agotado (aparece gris)
- `stock: 1` o más = Disponible 
- Los clientes NO ven las cantidades, solo si está disponible o agotado