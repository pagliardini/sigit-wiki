---
title: "Catálogos"
description: "Categorías, estados, marcas, modelos, centros de costo, ubicaciones, sedes y proveedores."
sidebar:
  order: 8
---

Los catálogos son las listas maestras que usan los activos y consumibles. Se gestionan desde el submenú
**Catálogo** de la barra lateral. Salvo indicación contraria, cualquier usuario (técnico o superadmin) puede
crear, editar y borrar entradas de catálogo — solo **Sedes**, **Proveedores** e **Importar Catálogo** son
exclusivos de superadmin.

## Categ. Activos (Categorías)

Clasifican los activos (Notebooks, Impresoras, UPS, Monitores, etc.). Se usan para: agrupar y filtrar activos,
generar el prefijo del Asset Tag automático, y como criterio de compatibilidad de consumibles en los modelos.

## Estados

Los **estados** definen en qué situación está un activo. Cada estado tiene nombre, un código interno, color e
ícono para la interfaz, y puede activarse/desactivarse. Estados típicos:

| Estado | Código | Uso |
|---|---|---|
| Disponible | `available` | Activo libre, sin asignar. Es el estado por defecto tras crear, desasignar o cancelar una transferencia. |
| Asignado | `assigned` | Se pone solo al asignar el activo a alguien. |
| En Mantenimiento | `maintenance` | Activo fuera de servicio por mantenimiento. |
| En Reparación | `repair` | Activo en reparación. |
| Retirado | `retired` | Dado de baja definitivamente. |
| Perdido | `lost` | Extraviado. |
| Robado | `stolen` | Reportado como robado. |
| En tránsito | `in_transit` | Estado interno que toma un activo mientras está en camino en una transferencia; no se ofrece para elegir manualmente. |

Se pueden agregar estados propios además de los anteriores. Los estados marcados como Mantenimiento, Reparación,
Roto o Retirado tienen un comportamiento especial al recibir una transferencia: el activo **no** se asigna
automáticamente a una ubicación (ver [Transferencias](/manual-usuario/transferencias/)).

## Marcas y Modelos

- **Marcas**: fabricantes (HP, Epson, Canon, Dell, etc.).
- **Modelos**: modelo específico de una marca (ej. "LaserJet Pro M404dn" de HP), con imagen opcional. Cada
  modelo puede tener asociada una **categoría** por defecto.
- En cada modelo se puede definir qué **consumibles** o **categorías de consumibles** son compatibles con él.
  Esto es lo que usa SIGIT para sugerir automáticamente el tóner/insumo correcto al imputar un consumible a un
  activo de ese modelo (ver [Consumibles](/manual-usuario/consumibles/)).

## Categ. Consumibles

Clasifican los consumibles (Tóner, Tinta, Papel, Baterías, etc.). Cada categoría tiene además un código interno.

## Centros de Costo

Agrupan ubicaciones dentro de una sede y sirven como unidad de imputación contable (ver
[Conceptos generales](/manual-usuario/conceptos-generales/)). Tienen nombre, código y pertenecen a una sede.

## Ubicaciones

El lugar físico concreto donde vive un activo, dentro de un centro de costo. Desde la ficha de una ubicación se
ve el listado de activos actualmente asignados ahí.

## Sedes 🔒

Solo superadmin puede crear, editar o borrar sedes. Cada sede tiene nombre, código, dirección, y puede marcarse
como sede por defecto. También se define ahí la **ubicación de llegada por defecto**, usada al recibir
transferencias sin ubicación destino explícita (configurable también desde **Configuración**, ver
[Otras funciones](/manual-usuario/otras-funciones/)).

## Proveedores 🔒

Ver [Compras](/manual-usuario/compras/).

## Importar Catálogo 🔒

**Catálogo → Importar Catálogo** permite cargar en lote, desde un archivo **CSV, XLS o XLSX**, alguno de estos
tres catálogos:

| Entidad | Columnas esperadas (nombre o alternativa en español) |
|---|---|
| Marcas | `name`/`nombre`, `description`/`descripcion` |
| Modelos | `name`/`modelo`, `brand`/`brand_name`/`marca` (obligatoria), `description`/`descripcion` |
| Ubicaciones | `name`/`nombre`, `address`/`direccion`/`ubicacion`, `description`/`descripcion` |

Reglas de la importación:
- Los nombres de columna no distinguen mayúsculas/minúsculas ni espacios sobrantes.
- Si ya existe un registro con el mismo nombre (y, para modelos, la misma marca), se **actualiza** su
  descripción en vez de duplicarlo.
- Las filas sin los campos obligatorios se omiten (se informa cuántas al final).
- Al terminar, se muestra cuántos registros se procesaron, cuántos se omitieron y el detalle de los primeros
  errores encontrados, si los hubo.
