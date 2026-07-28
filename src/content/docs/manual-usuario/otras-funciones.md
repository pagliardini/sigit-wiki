---
title: "Otras funciones"
description: "Chat interno, reporte de bugs y configuración de notificaciones por email."
sidebar:
  order: 11
---

## Chat interno

SIGIT incluye un chat en tiempo real entre usuarios del sistema (ícono de chat en la interfaz), con indicador de
usuarios conectados y de mensajes no leídos por conversación. Pensado para consultas rápidas entre técnicos y
administradores sin salir del sistema.

## Reportar un bug

Cualquier usuario puede reportar un problema desde el enlace **Reportar Bug** al pie de cualquier página. El
formulario pide título, descripción, pasos para reproducirlo, comportamiento esperado vs. observado y
prioridad (Baja, Media, Alta, Crítica).

Los reportes solo son visibles en el listado **Ver Bugs** para usuarios superadmin *, quienes pueden asignarlos
a alguien, cambiar su estado (Pendiente, En Progreso, Resuelto, Cerrado) y dejar notas de resolución.

## Configuración del sistema *

**Configuración** (solo superadmin) tiene dos partes:

### Ubicación de llegada por defecto de cada sede

Permite definir, por cada sede, a qué ubicación llega automáticamente un activo cuando se recibe una
transferencia sin ubicación destino explícita (ver [Transferencias](/manual-usuario/transferencias/)). Es la misma
configuración accesible también desde la ficha de cada sede en el catálogo.

### Notificaciones por email

Configuración del servidor SMTP saliente (host, puerto, TLS, usuario/contraseña, remitente) usado para dos
tipos de aviso automático relacionados a transferencias:

- **Aviso inmediato** a los usuarios de la sede destino cuando se crea una transferencia dirigida a ellos (a
  menos que se haya marcado "no notificar" al crearla), con un enlace directo a la transferencia.
- **Recordatorio automático**: si una transferencia queda pendiente de recibir más tiempo del configurado en
  **Horas para recordatorio**, el sistema envía un email de recordatorio a la sede destino (una sola vez por
  transferencia). Esto corre en un proceso en segundo plano dentro de la aplicación.

Cada usuario puede optar por no recibir estos avisos desde su propio perfil (**Notificaciones de
transferencias**, ver [Usuarios y roles](/manual-usuario/usuarios-y-roles/)).

Hay un botón para **enviar un email de prueba** a la propia dirección del superadmin conectado, útil para
validar la configuración SMTP antes de depender de ella.
