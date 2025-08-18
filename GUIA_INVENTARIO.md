# 📦 GUÍA PARA MODIFICAR EL INVENTARIO

## ¿Qué es el inventario?
El inventario te permite controlar cuántas cadenas y charms tienes disponibles. Si tienes 3 collares sirena, los clientes solo podrán comprar máximo 3.

## 📍 ARCHIVO PRINCIPAL: `client/src/pages/Index.tsx`

### 🔧 PASO 1: Modificar las cantidades de cadenas

Busca esta sección (línea aproximada 15-21):
```javascript
const baseOptions = [
  { id: "collar-sirena", name: "Collar Sirena", price: 12, stock: 5 },
  { id: "collar-paperclip-mini", name: "Collar Paper Clip (mini)", price: 10, stock: 3 },
  { id: "collar-paperclip", name: "Collar Paper Clip", price: 10, stock: 2 },
  { id: "collar-chunky", name: "Collar Chunky", price: 12, stock: 1 },
  { id: "collar-balines", name: "Collar Balines", price: 8, stock: 4 },
];
```

**Para cambiar el inventario de cadenas:**
- Cambia el número después de `stock:` 
- Ejemplo: `stock: 5` significa que tienes 5 collares sirena
- Si pones `stock: 0`, esa cadena no estará disponible

### 🔧 PASO 2: Modificar las cantidades de charms

Busca esta sección (línea aproximada 23-28):
```javascript
const charmInventory = {
  // Letras (stock: cantidad disponible)
  "letra-a": { price: 8, stock: 10 },
  "letra-b": { price: 8, stock: 8 },
  "letra-c": { price: 8, stock: 12 },
  "letra-d": { price: 8, stock: 5 },
  
  // Charms de colores
  "corazon-rojo": { price: 12, stock: 6 },
  "estrella-azul": { price: 10, stock: 4 },
  "luna-morada": { price: 11, stock: 3 },
  
  // Charms dorados
  "corona-dorada": { price: 18, stock: 2 },
  "llave-dorada": { price: 15, stock: 1 },
  
  // Animales
  "gato": { price: 12, stock: 7 },
  "perro": { price: 12, stock: 5 }
};
```

**Para cambiar el inventario de charms:**
- Cambia el número después de `stock:`
- Ejemplo: `"letra-a": { price: 8, stock: 10 }` significa 10 letras A disponibles
- Si pones `stock: 0`, ese charm aparecerá como "Agotado"

### 🔧 PASO 3: Agregar nuevos charms

Para agregar un nuevo charm, añade una línea en el formato:
```javascript
"nombre-del-charm": { price: PRECIO, stock: CANTIDAD },
```

Ejemplo:
```javascript
"estrella-verde": { price: 11, stock: 8 },
```

### 🔧 PASO 4: Cambiar precios

Para cambiar precios:
- **Cadenas:** Cambia el número después de `price:` en `baseOptions`
- **Charms:** Cambia el número después de `price:` en `charmInventory`

## 🎯 EJEMPLOS PRÁCTICOS

### Ejemplo 1: Solo tienes 1 collar sirena
```javascript
{ id: "collar-sirena", name: "Collar Sirena", price: 12, stock: 1 }
```

### Ejemplo 2: Se agotaron las letras A
```javascript
"letra-a": { price: 8, stock: 0 }
```

### Ejemplo 3: Subir el precio del collar chunky a $15
```javascript
{ id: "collar-chunky", name: "Collar Chunky", price: 15, stock: 1 }
```

## 🚀 CÓMO APLICAR LOS CAMBIOS

1. Abre el archivo `client/src/pages/Index.tsx`
2. Busca las secciones mencionadas arriba
3. Modifica los números de `stock:` y `price:` según necesites
4. Guarda el archivo (Ctrl+S)
5. La página se actualizará automáticamente

## ✨ CÓMO FUNCIONA EL INVENTARIO

### Para las cadenas:
- Si `stock: 5` → Aparece "Disponible: 5" y se puede seleccionar
- Si `stock: 0` → Aparece "Agotado" en rojo y no se puede seleccionar

### Para los charms:
- Si `stock: 3` → Aparece "Stock: 3" y puedes agregar máximo 3
- Si `stock: 0` → Aparece "Agotado" y botón deshabilitado
- Los botones + y - controlan la cantidad automáticamente
- No puedes agregar más de la cantidad en stock

## 💡 CONSEJOS

- **Stock 0** = "Agotado" (aparece gris y no se puede seleccionar)
- **Stock mayor a 0** = Disponible para compra
- Los clientes no podrán agregar más cantidad de la que tienes en stock
- Siempre revisa que los precios estén correctos después de modificar
- El sistema previene automáticamente que vendan más de lo disponible
- Puedes cambiar precios y stock en tiempo real sin reiniciar nada

## 🔒 SOBRE LA CONTRASEÑA DE ADMIN

La contraseña está configurada en el código por seguridad:
- **Contraseña actual:** `colorjoyeria2024`
- **Para cambiarla:** Ve al archivo `client/src/pages/AdminLogin.tsx` línea 17
- Cambia `const ADMIN_PASSWORD = "colorjoyeria2024";` por tu nueva contraseña
- Guarda y listo

## ❓ ¿NECESITAS AYUDA?

Si necesitas ayuda con:
- Agregar nuevas categorías de charms
- Cambiar el diseño de cómo se muestran
- Funciones más avanzadas

¡Solo dime qué necesitas!