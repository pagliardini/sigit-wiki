---
title: "Compras"
description: "Proveedores y facturas de compra: cómo procesarlas para dar de alta activos y stock automáticamente."
sidebar:
  order: 7
---

*Sección visible solo para usuarios superadmin.*

## Proveedores

**Catálogo → Proveedores** (dentro del submenú Catálogo). Cada proveedor guarda razón social, CUIT/identificación
fiscal, contacto, email, teléfono y si está activo. Los proveedores inactivos no aparecen para elegir al cargar
una nueva factura.

## Facturas de compra

Una **factura de compra** es el registro de una compra, pensado para auditoría y para dar de alta activos y
stock de consumibles de forma masiva y trazable.

### Estados

| Estado | Significado |
|---|---|
| **Borrador** | La factura se cargó pero todavía no generó activos ni stock. Se puede seguir editando o cancelar. |
| **Recibido** | Ya se procesó: los activos y el stock ya existen en el sistema. No se puede deshacer. |
| **Cancelada** | Se anuló sin llegar a procesarse. |

### Cargar una factura

**Compras → Nueva factura**. Se completa número de factura, fecha, proveedor (o datos manuales si el proveedor
no está en el catálogo) y se agregan renglones. Cada renglón puede ser:

- **Activo**: se indica descripción, categoría, modelo, cantidad y costo unitario.
- **Consumible**: se puede elegir un consumible existente (para sumarle stock) o dejarlo en blanco con una
  categoría de consumible, en cuyo caso se **crea un consumible nuevo** al procesar la factura.

### Procesar una factura

Al **Procesar** una factura en Borrador:

- Por cada renglón de **activo**, se crea automáticamente un activo por cada unidad de la cantidad indicada,
  con un Asset Tag correlativo generado según su categoría, estado **Disponible**, y una nota indicando de qué
  factura proviene. La factura queda con el vínculo a cada activo creado (visible en el detalle de la factura).
- Por cada renglón de **consumible**: si se eligió un consumible existente, se suma stock a la sede del usuario
  que procesa; si no existía, se crea el consumible nuevo con ese stock inicial.
- La factura pasa a estado **Recibido** (con fecha de recepción si no se había indicado una).

Una factura ya **Recibida** no se puede volver a procesar ni cancelar.

### Cancelar una factura

Solo se puede cancelar una factura en estado **Borrador** (no una ya recibida, para no dejar activos/stock
huérfanos de una reversión parcial).
