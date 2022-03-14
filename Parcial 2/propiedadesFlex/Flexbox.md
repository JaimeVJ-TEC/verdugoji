# Flexbox

Antes del módulo Flexbox, había cuatro modos de diseño:

- Bloque, para secciones en una página web
- En línea, para texto
- Tabla, para datos de tablas bidimensionales
- Posicionado, para la posición explícita de un elemento

El módulo de diseño de caja flexible facilita el diseño de una estructura de receptiva flexible sin usar float o posicionamiento.

## Propiedades del padre (flex container)

| Propiedad | Descripcion | Valores |
| --------- | ----------- | ------- |
| display | Define un contenedor flexible; en línea o bloque dependiendo del valor dado | flexbox, inline-flex |
| flex-direction | Establece el eje principal, definiendo así la dirección en que se colocan los artículos flexibles en el contenedor flexible | row, row-reverse, column, column-reverse |
| flex-wrap | De forma predeterminada, todos los elementos flexibles intentarán encajar en una línea. Puede cambiar eso y permitir que los elementos se ajusten según sea necesario con esta propiedad. | nowrap, wrap, wrap-reverse |
| flex-flow | Esta es una abreviatura de las propiedades de flex-direction y flex-wrap. | <‘flex-direction’>, <‘flex-wrap’> |
| justify-content | Define la alineación a lo largo del eje principal. | flex-start, flex-end, center, space-between, space-around |
| align-items | Define el comportamiento predeterminado de cómo se distribuyen los elementos flexibles a lo largo del eje transversal en la línea actual. | flex-start, flex-end, center, baseline, stretch |
| align-content | Esto alinea las líneas de un contenedor flexible cuando hay espacio adicional en el eje transversal | flex-start, flex-end, center, space-between, space-around, stretch |

## Propiedades de los hijos (flex items)

| Propiedad | Descripcion | Valores |
| --------- | ----------- | ------- |
| order | De forma predeterminada, los elementos flexibles se presentan en el orden de origen. Sin embargo, la propiedad order controla el orden en que aparecen en el contenedor flexible. | ```<integer>``` |
| flex-grow | Define la capacidad de crecimiento de un elemento flexible si es necesario. Acepta un valor sin unidades que sirve como proporción. | ```<number>``` |
| flex-shrink | Esto define la capacidad de que un elemento flexible se encoja si es necesario. | ```<number>``` |
| flex-basis | Define el tamaño predeterminado de un elemento antes de que se distribuya el espacio restante. Puede ser una longitud (por ejemplo, 20 %, 5 rem, etc.) o una palabra clave. | ```<length>``` , auto |
| flex | Esta es la abreviatura de flex-grow, flex-shrink y flex-basis combinados. | none , [ <'flex-grow'> <'flex-shrink'>? <'flex-basis'> ] |
| align-self | Esto permite anular la alineación predeterminada (o la especificada por elementos de alineación) para elementos flexibles individuales. | auto , flex-start , flex-end , center , baseline , stretch |
