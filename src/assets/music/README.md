# 🎵 Instrucciones para agregar tu canción

## Paso 1: Agregar el archivo MP3

1. **Consigue tu canción** en formato MP3
2. **Copia el archivo** a esta carpeta: `src/assets/music/`
3. **Renómbralo** a `song.mp3` (o el nombre que prefieras)

## Paso 2: Actualizar la ruta en el código

Si usaste un nombre diferente a `song.mp3`, ve a:
- **Archivo**: `src/components/MusicPlayer.jsx`
- **Línea**: Busca `<audio ref={audioRef} src="/src/assets/music/song.mp3"`
- **Cambia**: `song.mp3` por el nombre de tu archivo

## Paso 3: Sincronizar la letra

### Cómo obtener los tiempos:

1. **Reproduce tu canción** con un cronómetro o reproductor que muestre segundos
2. **Anota** en qué segundo empieza cada línea de la letra
3. **Ve a** `src/components/MusicPlayer.jsx`
4. **Busca** el array `lyrics` (está comentado)
5. **Reemplaza** con tu letra y tiempos

### Ejemplo:

```javascript
const lyrics = [
  { time: 0, text: "Primera línea de la canción" },
  { time: 5.5, text: "Segunda línea (empieza a los 5.5 segundos)" },
  { time: 10, text: "Tercera línea (empieza a los 10 segundos)" },
  // ... y así sucesivamente
];
```

### Tips:
- Los tiempos están en **segundos** (puedes usar decimales como 5.5)
- Puedes usar emojis en el texto 🎵 ❤️ ✨
- No necesitas poner TODAS las líneas, solo las que quieras mostrar

## Paso 4: ¡Disfruta!

Guarda los cambios y recarga la página. Tu canción debería reproducirse con la letra sincronizada.

---

## 🎨 Personalización adicional

### Cambiar colores:
- Ve a `src/index.css`
- Busca los comentarios que dicen "CÓMO MODIFICAR"
- Cambia los colores en las animaciones

### Cambiar velocidad de animaciones:
- En `src/index.css` busca las duraciones (ej: `15s`, `2s`)
- Números más pequeños = más rápido
- Números más grandes = más lento

### Cambiar el título:
- En `src/components/MusicPlayer.jsx`
- Busca `<h1>🎵 Music Player</h1>`
- Cambia el texto por lo que quieras
