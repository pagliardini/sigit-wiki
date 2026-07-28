---
title: "Activos"
description: "Alta, edición, estados y ciclo de vida de los activos en SIGIT."
sidebar:
  order: 2
---

Un **activo** es cualquier equipo individual que se controla de forma unitaria: una notebook, una impresora, un
UPS, un monitor, etc. Cada activo tiene un **Asset Tag** único (código de inventario) que lo identifica.

## Datos de un activo

| Campo | Descripción |
|---|---|
| Asset Tag | Código único de inventario. Puede generarse automáticamente (ver abajo) o cargarse a mano. |
| Nombre | Nombre descriptivo del equipo. |
| Categoría | Tipo de activo (Impresoras, Notebooks, UPS, etc.) — ver [Catálogos](/manual-usuario/catalogos/). |
| Marca / Modelo | Fabricante y modelo específico, tomado del catálogo de Marcas y Modelos. |
| Nº de Serie | Número de serie del fabricante. Solo un **superadmin** * puede corregirlo una vez creado el activo. |
| Fecha y costo de compra | Datos de la compra original. |
| Estado | Estado actual del activo (Disponible, Asignado, En Mantenimiento, etc.) — ver [Catálogos](/manual-usuario/catalogos/). |
| Sede | Sede a la que pertenece el activo. Se completa sola según la sede de quien lo crea, o según la ubicación a la que se asigna. |
| Notas | Texto libre. |

### Generación automática del Asset Tag

Al elegir una categoría en el formulario de alta, SIGIT puede sugerir un tag automáticamente: toma las primeras
3 letras de la categoría en mayúsculas (sin tildes) y le agrega un número correlativo de 3 dígitos que no choque
con tags existentes (arranca en 510 para no pisar activos migrados de otro sistema). Por ejemplo, la categoría
"Impresoras" sugiere `IMP510`, `IMP511`, etc.

## Crear un activo

**Activos → Nuevo Activo**. Se completan los datos básicos y, opcionalmente, en el mismo formulario:

- Se puede **asignar el activo de inmediato** a un usuario, una ubicación u otro activo (ver
  [Asignaciones](/manual-usuario/asignaciones-e-imputaciones/)). Si el estado elegido es "Asignado", el sistema **exige**
  indicar el destino de la asignación.
- Se pueden **imputar consumibles compatibles** al activo en el mismo paso (por ejemplo, cargar el tóner con el
  que sale la impresora), indicando cantidad para cada uno.

## Ver y editar un activo

La ficha de un activo (**Activos → ver un activo**) muestra sus datos, su asignación activa, el historial de
asignaciones anteriores, los consumibles que tiene asociados y sus imputaciones contables (si las tiene).

Desde **Editar** se pueden corregir todos los campos salvo el número de serie, que —una vez creado el
activo— solo puede modificarlo un superadmin * (para evitar cambios accidentales sobre un dato sensible de
auditoría).

## Eliminar activos

Se puede eliminar un activo individual desde su ficha, o varios a la vez con la selección múltiple en el listado
(**acción masiva de borrado**, solo disponible para superadmin *). Al eliminar un activo se eliminan también su
historial de asignaciones y sus asociaciones de consumibles.

## Consumibles compatibles con un activo

Si el **modelo** del activo tiene consumibles marcados como compatibles en el catálogo (por ejemplo, un modelo de
impresora con su tóner específico), SIGIT los ofrece como sugerencia al imputar consumibles a ese activo. Si el
modelo no tiene compatibilidades explícitas cargadas, se ofrece la lista completa de consumibles.

## Exportar e importar

- **Activos → Exportar** genera un listado en CSV, XLSX o PDF con los activos filtrados en pantalla.
- El alta masiva de activos también puede hacerse indirectamente **procesando una factura de compra** (ver
  [Compras](/manual-usuario/compras/)), que crea automáticamente un activo por cada unidad comprada con su tag
  correlativo.
