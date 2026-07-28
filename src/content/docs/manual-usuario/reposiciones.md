---
title: "Reposiciones"
description: "Seguimiento de qué consumibles imputados hay que volver a comprar."
sidebar:
  order: 5
---

*Sección visible solo para usuarios superadmin.*

Cada vez que se imputa un consumible (a un activo, usuario o ubicación), esa imputación queda con un **estado de
reposición** independiente de su estado de uso. Sirve para que el área de compras sepa qué hay que reponer al
stock.

## Estados de reposición

| Estado | Significado |
|---|---|
| **Pendiente** | Se usó el consumible pero todavía no se avisó a compras. |
| **Solicitado** | Ya se pidió la compra de reposición. |
| **Repuesto** | El stock ya fue repuesto (la compra llegó). |

## Pantalla de Reposiciones

En **Reposiciones** se listan todas las imputaciones con su estado, agrupadas por consumible (para ver el total
pendiente de cada uno) y también agrupadas por día de solicitud (para cotejar contra una factura de compra
puntual). Se puede filtrar por estado, por consumible, por rango de fecha de imputación y por rango de fecha de
solicitud, y buscar por texto (consumible, destino, centro de costo, notas).

## Acciones

- **Solicitar**: pasa la imputación de Pendiente a Solicitado (con nota opcional). Disponible individual o en
  lote (seleccionando varias filas).
- **Reponer**: pasa la imputación a Repuesto, indicando que el stock ya se recompuso. Disponible individual o en
  lote.
- **Reiniciar**: vuelve una imputación a Pendiente, por si se marcó por error.
- **Exportar** a CSV o XLSX: genera un listado listo para enviar al área de compras, con consumible, categoría,
  cantidad, destino, centro de costo, activo asociado y fechas.

## Relación con Compras

Marcar una reposición como "Solicitada" o "Repuesta" es solo un cambio de estado informativo: **no crea
automáticamente stock**. El ingreso real de stock se hace desde [Compras](/manual-usuario/compras/) (al procesar una
factura) o directamente desde **Aumentar stock** en la ficha del consumible.
