---
title: "Asignaciones e imputaciones de activos"
description: "Cómo asignar un activo a un usuario, ubicación u otro activo, y cómo funciona la imputación contable."
sidebar:
  order: 3
---

## Asignación triple: usuario, ubicación u otro activo

Un activo se puede asignar a tres tipos de destino distintos (nunca a más de uno a la vez):

- **Usuario**: el activo queda en poder de una persona (ej. una notebook asignada a un empleado).
- **Ubicación**: el activo queda en un lugar físico sin un responsable individual (ej. una impresora de sala).
- **Otro activo**: el activo queda "dentro" de otro activo padre (ej. un UPS asignado a un servidor, o un
  accesorio asignado a un equipo principal).

Desde la ficha del activo, **Asignar** abre el formulario donde se elige el tipo de destino y el destino
puntual, más notas opcionales.

### Qué pasa al asignar

- Se cierra automáticamente cualquier asignación activa anterior de ese activo (queda en el historial con su
  fecha de devolución).
- El estado del activo pasa a **Asignado** automáticamente.
- Si el destino es una **ubicación**, la sede del activo se actualiza según la sede a la que pertenece esa
  ubicación (a través de su centro de costo).
- Queda registro en el historial de asignaciones del activo y en el log de auditoría.

### Desasignar

**Desasignar** cierra la asignación activa (queda con fecha de devolución) y devuelve el activo al estado
**Disponible**.

## Historial de asignaciones

La ficha del activo muestra todas sus asignaciones pasadas y la activa, con fechas de inicio y devolución,
destino y notas — útil para saber "quién tuvo este equipo" en cualquier momento.

## Imputación contable de activos (🔒 superadmin)

Cuando se asigna un activo **por primera vez** (es decir, es un activo nuevo que nunca tuvo asignación previa),
se puede marcar la casilla **Generar imputación** al asignarlo. Esto crea una imputación contable en estado
**Pendiente**, para que el área contable/administrativa registre el gasto contra el centro de costo
correspondiente.

Las imputaciones pendientes se gestionan en **Imputaciones Activos** (menú, solo superadmin):

| Estado | Significado |
|---|---|
| Pendiente | El activo fue asignado pero todavía no se registró/contabilizó el gasto. |
| Procesado | La imputación ya fue tomada por contabilidad. |

Acciones disponibles:

- **Procesar** (individual o en lote): marca la imputación como Procesada, con posibilidad de agregar una nota.
- **Reiniciar**: vuelve una imputación procesada a estado Pendiente (por si se procesó por error).
- **Exportar** a CSV o XLSX con todos los datos necesarios para contabilidad: tag, categoría, modelo, número de
  serie, costo de compra, destino, centro de costo, fecha de asignación y estado.
- Se puede filtrar por estado y por rango de fechas de asignación.

Importante: la imputación **solo se genera si se marca la casilla al momento de asignar**; no es automática en
cada asignación, y solo aplica a la asignación inicial del activo (no a reasignaciones posteriores).
