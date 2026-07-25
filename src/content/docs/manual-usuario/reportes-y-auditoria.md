---
title: "Reportes y auditoría"
description: "Dashboard, log de actividad del sistema y exportaciones disponibles."
sidebar:
  order: 10
---

# Reportes y auditoría

## Dashboard

Ver [Conceptos generales](/manual-usuario/conceptos-generales/#el-dashboard) para el detalle de lo que muestra la pantalla
principal.

## Reportes

**Reportes** es la puerta de entrada a los distintos informes del sistema.

### Log de actividad 🔒

**Reportes → Log de Actividad** (solo superadmin) muestra el historial completo de acciones registradas en
SIGIT: creación/edición/eliminación de activos y consumibles, asignaciones y desasignaciones, transferencias,
imputaciones, cambios de stock, etc. Cada entrada guarda quién la hizo, cuándo, sobre qué elemento, hacia qué
destino, cantidades y valores anterior/nuevo cuando corresponde.

Se puede filtrar por tipo de acción, tipo de entidad y rango de fechas, y **exportar a Excel (XLSX)** el
resultado filtrado.

Este log es la fuente de verdad para auditoría: cualquier cambio relevante en activos, consumibles,
asignaciones, transferencias e imputaciones queda registrado ahí de forma permanente, aunque el registro
original se edite o borre después.

## Exportaciones disponibles en el sistema

Casi todos los listados principales permiten exportar lo que se está viendo en pantalla (respetando los filtros
aplicados):

| Sección | Formatos |
|---|---|
| Activos | CSV, XLSX, PDF |
| Consumibles | CSV, XLSX |
| Ubicaciones | CSV, XLSX |
| Usuarios | CSV, XLSX |
| Marcas / Modelos | CSV, XLSX |
| Imputaciones de activos | CSV, XLSX |
| Reposiciones | CSV, XLSX |
| Log de actividad | XLSX |

Los archivos CSV se generan con separador `;` y codificación UTF-8 (con BOM) para que Excel en español los abra
correctamente con tildes y símbolos.
