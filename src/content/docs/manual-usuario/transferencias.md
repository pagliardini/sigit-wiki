---
title: "Transferencias"
description: "Envío de activos y consumibles entre sedes: creación, recepción y cancelación."
sidebar:
  order: 6
---

# Transferencias

Una **transferencia** es el envío de uno o más activos y/o cantidades de consumibles desde una sede de origen a
una sede de destino (y, opcionalmente, a una ubicación puntual dentro de esa sede).

## Estados de una transferencia

| Estado | Significado |
|---|---|
| **Pendiente** | Se creó la transferencia; los ítems ya salieron del stock/ubicación de origen pero todavía no llegaron a destino. |
| **En tránsito** | Estado que toman los *activos* incluidos en una transferencia pendiente (no es un estado de la transferencia en sí, sino del activo). |
| **Recibido** | El destino confirmó la recepción; el stock/ubicación ya se actualizó en destino. |
| **Cancelado** | La transferencia se anuló antes de ser recibida; se restaura todo a su situación de origen. |

## Crear una transferencia

**Transferencias → Nueva transferencia**. Se elige sede de origen, sede de destino y, opcionalmente, una
ubicación de destino puntual. Luego se agregan renglones, cada uno de:

- **Un consumible** con una cantidad (se valida que la sede de origen tenga stock suficiente; si hay varios
  renglones del mismo consumible, se descuentan entre sí antes de confirmar).
- **Un activo** puntual (se valida que pertenezca a la sede de origen elegida). Opcionalmente se puede indicar
  el **estado destino** que debe tomar ese activo al llegar (por ejemplo, enviarlo para que llegue en
  "Mantenimiento" en vez de "Disponible").

Un usuario técnico solo puede crear transferencias **desde su propia sede**; un superadmin puede elegir
cualquier origen.

Al confirmar:
- Los consumibles se descuentan del stock de la sede de origen.
- Los activos pasan a estado **En tránsito** y quedan con la sede de origen hasta ser recibidos.
- Se envía una notificación a los usuarios de la sede de destino (salvo que se marque "no notificar" al crear
  la transferencia).

## Recibir una transferencia

Solo puede recibir la transferencia un usuario de la **sede de destino** (o un superadmin). Al recibir:

- Los consumibles se suman al stock de la sede de destino.
- Cada activo pasa a la sede de destino y toma:
  - El **estado destino** indicado en la transferencia, si se especificó uno; si no, pasa a **Disponible**.
  - La **ubicación destino** de la transferencia si se indicó; si no, la **ubicación de llegada por defecto**
    configurada para esa sede (ver [Configuración](/manual-usuario/otras-funciones/)); si tampoco hay, el activo queda sin
    ubicación asignada.
  - Si el estado destino es uno "especial" (Mantenimiento, Reparación, Roto, Retirado), el activo **no** se
    asigna automáticamente a la ubicación — se asume que no está operativo todavía.
- La asignación anterior del activo (si tenía una ubicación/responsable) se cierra automáticamente.

## Cancelar una transferencia

Solo puede cancelarla quien la creó o un superadmin, y solo mientras esté **Pendiente** (no se puede cancelar
una ya recibida). Al cancelar:
- El stock de consumibles se devuelve a la sede de origen.
- Los activos vuelven a estado **Disponible**.

## Notificaciones de transferencias pendientes

El ícono de notificaciones en la barra superior muestra la cantidad de transferencias pendientes dirigidas a las
sedes visibles del usuario, con acceso directo a cada una. Cada usuario puede activar o desactivar en su perfil
si quiere recibir avisos por email de transferencias entrantes.

## Filtros del listado

**Transferencias** se puede filtrar por estado, por tipo de ítem (activo/consumible) y por dirección
(entrantes/salientes/todas, relativo a la sede del usuario).
