# 🎨 CÓMO CAMBIAR COLORES DE FONDO

## 📁 **ARCHIVO PRINCIPAL:** `client/src/index.css`

## 🌈 **COLORES PRINCIPALES QUE PUEDES CAMBIAR:**

### **1. FONDO PRINCIPAL DE LA PÁGINA**
```css
--background: 0 0% 100%;        /* Blanco actual */
```

**Ejemplos para cambiar:**
```css
--background: 220 15% 97%;      /* Gris muy claro */
--background: 45 100% 98%;      /* Amarillo muy suave */
--background: 200 50% 95%;      /* Azul muy claro */
--background: 0 0% 8%;          /* Negro (modo oscuro) */
```

### **2. COLOR DE LAS TARJETAS Y CARDS**
```css
--card: 0 0% 100%;              /* Blanco actual */
```

**Ejemplos:**
```css
--card: 210 20% 98%;            /* Gris-azul claro */
--card: 45 30% 97%;             /* Beige claro */
```

### **3. COLOR PRINCIPAL (botones, enlaces)**
```css
--primary: 142 69% 58%;         /* Verde actual */
```

**Ejemplos:**
```css
--primary: 346 77% 49%;         /* Rosa/fucsia */
--primary: 217 91% 60%;         /* Azul */
--primary: 32 95% 44%;          /* Naranja */
--primary: 271 91% 65%;         /* Morado */
```

### **4. BORDES Y SEPARADORES**
```css
--border: 214 32% 91%;          /* Gris claro */
```

---

## 🎯 **EJEMPLOS COMPLETOS DE TEMAS:**

### **TEMA ROSA ELEGANTE:**
```css
--background: 330 100% 98%;     /* Rosa muy claro */
--card: 330 50% 96%;            /* Tarjetas rosa suave */
--primary: 346 77% 49%;         /* Botones rosa fuerte */
--border: 330 30% 85%;          /* Bordes rosa */
```

### **TEMA AZUL PROFESIONAL:**
```css
--background: 210 40% 98%;      /* Azul muy claro */
--card: 210 30% 96%;            /* Tarjetas azul suave */
--primary: 217 91% 60%;         /* Botones azul */
--border: 210 25% 88%;          /* Bordes azul */
```

### **TEMA DORADO ELEGANTE:**
```css
--background: 45 60% 98%;       /* Amarillo muy claro */
--card: 45 40% 96%;             /* Tarjetas crema */
--primary: 32 95% 44%;          /* Botones dorado */
--border: 45 30% 85%;           /* Bordes dorados */
```

---

## 📝 **CÓMO APLICAR LOS CAMBIOS:**

1. **Abre:** `client/src/index.css`
2. **Busca la sección:** `:root {`
3. **Cambia los valores** que quieras
4. **Guarda el archivo**
5. **Los cambios se ven inmediatamente**

---

## 🔧 **HERRAMIENTAS ÚTILES:**

### **Convertir color normal a HSL:**
- **Rojo** = `0 100% 50%`
- **Verde** = `120 100% 50%`
- **Azul** = `240 100% 50%`
- **Rosa** = `330 100% 50%`
- **Morado** = `270 100% 50%`

### **Para colores más suaves:**
- Cambiar el último número a `95%` o `98%` para fondos
- Cambiar el segundo número a `20%` o `30%` para menos saturación

---

## ⚡ **CAMBIO RÁPIDO:**
¿Qué color te gusta? Te puedo cambiar todo automáticamente:
- Rosa
- Azul 
- Morado
- Dorado
- Verde oscuro
- Otro color específico