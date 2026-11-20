# Streamzio Legal — Páginas estáticas ES/EN

Sitio independiente del backend Laravel de desarrollo. Preparado para GitHub Pages, sin Node, PHP ni servidor propio.

## Carpetas

```
Streamzio-Legal/
  .nojekyll
  index.html
  assets/
    styles.css
    site.js
  terms-of-service/
    index.html
  privacy-policy/
    index.html
  refund-policy/
    index.html
```

## Publicación en GitHub Pages

1. Crea un repositorio público llamado, por ejemplo, `streamzio-legal`.
2. Sube **el contenido de `Streamzio-Legal/` a la raíz del repositorio**, no la carpeta contenedora.
3. En Settings → Pages selecciona Deploy from a branch, rama `main`, carpeta `/ (root)`.
4. GitHub mostrará el enlace público. Las URLs tendrán estructura `/streamzio-legal/terms-of-service/`, `/privacy-policy/` y `/refund-policy/`.
5. Copia las URLs públicas reales en TikTok Developers cuando estén accesibles.

No se incluyen secretos ni tokens. No publica tu aplicación Laravel ni la base de datos.

## Importante antes del lanzamiento público

- Completar identidad legal y contacto del proveedor responsable del servicio; no se debe fingir que ya existe una empresa registrada.
- Revisar términos y privacidad con asesoría local (Chile y demás mercados donde se ofrezca el servicio).
- Ajustar tratamiento de eventos, retención real, eliminación de cuenta, alojamiento, seguridad y proveedores efectivamente implementados.
- Confirmar precios, impuestos, condiciones de renovación y política final de reembolsos según el procesador elegido.
- Actualizar fecha de vigencia y retirar menciones a beta cuando corresponda.

Contacto: streamzio.team@gmail.com
