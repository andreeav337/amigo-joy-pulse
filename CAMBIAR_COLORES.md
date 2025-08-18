# 🎨 CÓMO CAMBIAR COLORES DE LA APP

## 📍 Archivo principal: `client/src/index.css`

### 🎯 COLORES ACTUALES:

```css
:root {
  --primary: 20 14.3% 4.1%;           /* Negro principal */
  --primary-foreground: 60 9.1% 97.8%; /* Blanco sobre negro */
  --secondary: 60 4.8% 95.9%;         /* Gris claro */
  --muted: 60 4.8% 95.9%;             /* Gris muy suave */
  --accent: 60 4.8% 95.9%;            /* Color de acento */
  --background: 0 0% 100%;            /* Blanco de fondo */
  --foreground: 20 14.3% 4.1%;       /* Negro del texto */
  --border: 20 5.9% 90%;              /* Bordes */
}
```

---

## 🌈 OPCIONES RECOMENDADAS:

### 💎 **ELEGANTE DORADO** (Para joyería):
```css
:root {
  --primary: 45 100% 51%;             /* Dorado principal */
  --primary-foreground: 0 0% 100%;    /* Blanco sobre dorado */
  --secondary: 45 20% 95%;            /* Crema claro */
  --muted: 45 15% 92%;                /* Beige suave */
  --accent: 45 60% 70%;               /* Dorado claro */
  --background: 0 0% 100%;            /* Blanco */
  --foreground: 45 25% 15%;           /* Marrón oscuro */
}
```

### 🌸 **ROSA ELEGANTE**:
```css
:root {
  --primary: 340 82% 52%;             /* Rosa principal */
  --primary-foreground: 0 0% 100%;    /* Blanco */
  --secondary: 340 20% 95%;           /* Rosa muy claro */
  --muted: 340 15% 92%;               /* Rosa pastel */
  --accent: 340 60% 70%;              /* Rosa medio */
  --background: 0 0% 100%;            /* Blanco */
  --foreground: 340 25% 15%;          /* Rosa muy oscuro */
}
```

### 🖤 **NEGRO MINIMALISTA**:
```css
:root {
  --primary: 0 0% 9%;                 /* Negro */
  --primary-foreground: 0 0% 98%;     /* Blanco */
  --secondary: 0 0% 96%;              /* Gris muy claro */
  --muted: 0 0% 90%;                  /* Gris claro */
  --accent: 0 0% 15%;                 /* Gris oscuro */
  --background: 0 0% 100%;            /* Blanco */
  --foreground: 0 0% 15%;             /* Gris muy oscuro */
}
```

### 💜 **MORADO SOFISTICADO**:
```css
:root {
  --primary: 262 83% 58%;             /* Morado principal */
  --primary-foreground: 0 0% 100%;    /* Blanco */
  --secondary: 262 20% 95%;           /* Lila muy claro */
  --muted: 262 15% 92%;               /* Lila pastel */
  --accent: 262 60% 70%;              /* Morado claro */
  --background: 0 0% 100%;            /* Blanco */
  --foreground: 262 25% 15%;          /* Morado muy oscuro */
}
```

---

## 🔧 CÓMO CAMBIAR:

1. Abre `client/src/index.css`
2. Ve a la línea 75-85 (sección `:root`)
3. Reemplaza los valores por los de tu color preferido
4. Guarda el archivo
5. ¡Los cambios se aplican automáticamente!

## 🎨 CREAR TU PROPIO COLOR:

### Para usar tu color favorito:
1. Ve a https://uicolors.app/create
2. Elige tu color principal
3. Copia los valores HSL
4. Reemplaza en el código

### Ejemplo con azul:
```css
:root {
  --primary: 217 91% 60%;             /* Tu azul favorito */
  --primary-foreground: 0 0% 100%;    /* Blanco */
  /* ... resto igual */
}
```

¿Qué color te gustaría usar para tu joyería?