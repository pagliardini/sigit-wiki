---
title: "Consumibles"
description: "Stock por sede, asignación a activos/usuarios/ubicaciones, vencimientos y alertas de stock bajo."
sidebar:
  order: 4
---

# Consumibles

Un **consumible** es un insumo que se gasta con el uso: tóners, cartuchos de tinta, papel, baterías, etc. A
diferencia de un activo, un consumible se controla por **cantidad de stock**, no de forma unitaria.

## Datos de un consumible

| Campo | Descripción |
|---|---|
| Nombre | Nombre del insumo. |
| Categoría de consumible | Tóner, Tinta, Papel, Baterías, etc. — ver [Catálogos](/manual-usuario/catalogos/). |
| Nº de artículo / Marca / Fabricante | Datos identificatorios del producto. |
| Cantidad / Stock mínimo | Ver "Stock por sede" abajo. |
| Costo de compra | Costo unitario de referencia. |

## Stock por sede

El stock de un consumible **no es un único número global**: se lleva por sede (tabla de stock por sede, con su
propio stock mínimo por sede). La cantidad global que ves en la ficha del consumible es la suma del stock de
todas las sedes, y se recalcula automáticamente cada vez que hay un movimiento.

- Un **técnico** ve y opera siempre sobre el stock de **su propia sede**.
- Un **superadmin** puede ver y elegir la sede al operar.

**Aumentar stock** (compra directa de insumos, sin pasar por una factura) suma unidades al stock de una sede
puntual y deja una nota con fecha en el historial del consumible.

## Alertas de stock bajo

Un consumible está en **stock bajo** cuando su cantidad en una sede es menor o igual a su stock mínimo definido
para esa sede. El listado de Consumibles permite filtrar por "stock bajo", y el Dashboard muestra cuántos
consumibles están en esa situación.

## Asignar (imputar) un consumible

Imputar un consumible significa descontar unidades del stock de la sede y dejar registro de a dónde fueron. Se
puede imputar a tres tipos de destino, igual que con los activos:

- **A un activo**: el activo **debe estar asignado previamente** a un usuario, ubicación u otro activo — SIGIT
  no permite imputar consumibles a un activo que todavía está "libre" (Disponible sin asignar), porque no
  habría a quién atribuir el gasto.
- **A un usuario** directamente.
- **A una ubicación** directamente.

Al imputar se puede indicar:
- **Cantidad** a descontar (no puede superar el stock disponible en la sede).
- **Notas**.
- **Fecha de vencimiento** opcional y días de aviso previo — útil para insumos perecederos (baterías, tinta,
  etc.). SIGIT calcula automáticamente si está por vencer o vencido y lo muestra en el Dashboard.

### Consumibles compatibles con un modelo de activo

En el catálogo de **Modelos** se puede marcar qué consumibles (o categorías de consumibles) son compatibles con
cada modelo de activo. Al imputar un consumible a un activo, SIGIT prioriza mostrar esa lista de compatibles; si
el modelo no tiene compatibilidades cargadas, ofrece todos los consumibles disponibles.

## Quitar o eliminar una imputación

- **Desasignar / marcar como removido**: da de baja el uso de ese consumible en el destino (por ejemplo, se
  cambió el tóner de una impresora) **sin borrar el historial** ni devolver stock — queda registrado que se usó
  y luego se retiró.
- **Eliminar del historial**: borra por completo el registro. Pensado únicamente para corregir errores de carga,
  no para el flujo normal de uso.
- **Desasignar consumible** (`/consumables/<id>/unassign`) sí devuelve la cantidad usada al stock de la sede del
  usuario que ejecuta la acción — pensado para revertir una imputación reciente.

## Reposición

Cada imputación de consumible queda además con un **estado de reposición** (Pendiente / Solicitado / Repuesto)
para hacer seguimiento de la compra del reemplazo. Ver el detalle en
[Reposiciones](/manual-usuario/reposiciones/).

## Exportar

**Consumibles → Exportar** permite bajar el listado filtrado en CSV o XLSX.
