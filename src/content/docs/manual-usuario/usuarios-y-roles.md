---
title: "Usuarios y roles"
description: "Gestión de usuarios, roles superadmin/técnico y acceso a sedes."
sidebar:
  order: 9
---

## Listado y alta de usuarios 🔒

**Usuarios** (menú, solo superadmin) lista todos los usuarios con búsqueda y ordenamiento. Desde
**Nuevo Usuario** se completa: usuario, email, nombre completo, contraseña, rol, sede y opcionalmente una foto
de perfil.

- Solo un **superadmin** puede crear otro usuario con rol **superadmin**; si un técnico intentara crearlo
  (por ejemplo mediante una petición directa), el sistema lo fuerza a rol técnico.
- Las contraseñas deben cumplir una política mínima: 8 caracteres, al menos una mayúscula, una minúscula, un
  número y un carácter especial.

## Ver y editar un perfil

Cualquier usuario puede ver y editar **su propio perfil** (nombre, email, contraseña, foto). Un superadmin
además puede:

- Ver y editar el perfil de **cualquier** usuario.
- Cambiar el **rol** de un usuario.
- Cambiar la **sede principal** de un usuario.
- Dar **acceso adicional a otras sedes**: además de su sede principal, un usuario puede tener sedes extra
  visibles (útil para alguien que necesita ver/operar sobre más de una sede sin ser superadmin).
- Activar o desactivar si el usuario **recibe notificaciones por email** de transferencias entrantes.

## Qué ve cada rol

| Alcance | Técnico | Superadmin |
|---|---|---|
| Activos y consumibles de su sede | Ver y operar | Ver y operar en cualquier sede |
| Activos y consumibles de otras sedes | Solo si tiene acceso adicional configurado | Siempre |
| Crear/editar/eliminar activos, consumibles y catálogos (categorías, estados, marcas, modelos, centros de costo, ubicaciones) | Sí | Sí |
| Editar el número de serie de un activo ya creado | No | Sí |
| Acciones masivas (borrado en lote de activos) | No | Sí |
| Crear transferencias | Solo desde su propia sede | Desde cualquier sede |
| Usuarios | Solo su propio perfil | Gestión completa |
| Compras (proveedores y facturas) | No | Sí |
| Imputaciones contables de activos | No | Sí |
| Reposiciones (listado y gestión) | No | Sí |
| Sedes | No | Sí |
| Importar catálogo (CSV/XLSX masivo) | No | Sí |
| Log de auditoría (Reportes → actividad) | No | Sí |
| Configuración del sistema | No | Sí |
| Reportar un bug | Sí | Sí |
| Ver listado de bugs reportados | No | Sí |

## Sedes visibles de un usuario

Internamente, cada usuario "ve" un conjunto de sedes: su sede principal más las sedes adicionales que se le
hayan otorgado. Un superadmin no tiene esta restricción: siempre ve todas las sedes. Esto determina, por
ejemplo, qué notificaciones de transferencias pendientes le llegan a cada usuario.
