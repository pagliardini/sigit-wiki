---
title: "Conceptos generales"
description: "Roles de usuario, jerarquía de sedes/centros de costo/ubicaciones y el dashboard de SIGIT."
sidebar:
  order: 1
---

# Conceptos generales

## Roles de usuario

SIGIT tiene dos roles:

| Rol | Qué puede hacer |
|---|---|
| **Técnico** | Uso diario: crear y editar activos y consumibles, asignarlos, crear transferencias, ver reportes. |
| **Superadmin** 🔒 | Todo lo del técnico, más: gestión de usuarios, compras, sedes, proveedores, imputaciones contables de activos, reposiciones, importación masiva de catálogos, configuración del sistema y log de auditoría. |

Un usuario superadmin puede crear otros usuarios superadmin; un técnico no.

## Jerarquía geográfica: Sede → Centro de Costo → Ubicación

SIGIT organiza la infraestructura física en tres niveles:

```
Sede (ej: Buenos Aires)
 └── Centro de Costo (ej: TI-BUE, ADM-BUE)
      └── Ubicación (ej: "Infraestructura Tecnológica")
```

- **Sede**: nivel más alto (una oficina, planta o sucursal). Cada sede tiene un código corto (ej. `BUE`) y puede
  marcarse como **sede por defecto**. También puede definirse una **ubicación de llegada por defecto**: es donde
  se coloca automáticamente un activo recibido por transferencia si no se indicó una ubicación destino puntual.
- **Centro de Costo**: agrupa ubicaciones dentro de una sede (por ejemplo, para separar TI de Administración).
  Sirve además para saber a qué área imputar contablemente el uso de un activo o consumible.
- **Ubicación**: el lugar físico concreto donde vive un activo (una oficina, depósito, sala de servidores, etc.).

Cada **usuario** pertenece a una sede (`site_id`). Un técnico normalmente solo ve y opera sobre los datos de su
propia sede, salvo que se le dé acceso adicional a otras sedes; un superadmin ve todas las sedes sin restricción.

## El Dashboard

Es la primera pantalla al iniciar sesión. Resume:

- Totales de activos, usuarios, ubicaciones y consumibles.
- Cantidad de activos **Disponibles** y **Asignados**.
- Cantidad de consumibles con **stock bajo** (stock actual ≤ stock mínimo definido).
- Las últimas 5 asignaciones activas.
- Consumibles asignados con fecha de vencimiento próxima (dentro de 90 días) o ya vencidos.

## Menú principal

La barra lateral agrupa las funciones así:

- **Dashboard**
- **Activos**
- **Consumibles**
- **Reposiciones** 🔒
- **Imputaciones Activos** 🔒
- **Transferencias**
- **Reportes**
- **Compras** 🔒
- **Catálogo** (submenú): Categ. Activos, Estados, Marcas, Modelos, Categ. Consumibles, Centros de Costo,
  Ubicaciones, y — solo superadmin — Sedes, Proveedores e Importar Catálogo.
- **Usuarios** 🔒 y **Configuración** 🔒

Al pie de cada página hay un enlace para **Reportar Bug**, disponible para cualquier usuario.
