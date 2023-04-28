# JUEGO EN JAVASCRIPT

Para comenzar tuve la idea de hacer un juego que genere circulos y cuadrados aleatorios y lo que tiene que hacer el jugador es esquivar esos objetos.
Para poder llevar a cabo lo que tenia en mente, tuve que investigar en varias fuentes y ver muchos ejemplos de otros programadores que hicieron juegos de este tipo para saber como hacerlo y de que manera yo lo podia implementar en mi codigo.
Inicie con la clase "Shape" como la clase base que tendria las propiedades y metodos comunes a todas las formas, despues las clases 'Cicle' y 'Square' extienden la clase, lo que les permite heredar sus metodos y propiedades.
Luego con la funcion 'setup' inicio el canvas y creo circulos y cuadrados, despues la funcion 'draw' que se encarga de actualizar la posicion de las formas y dibujarlas en el canvas. El polimorfismo se logra a traves del metodo 'display' que esta definido en la clase base pero se sobrescribe en las subclases.
Despues con la variable booleana 'isCircle' determino si la forma actual es un cuadrado o un circulo, el 'setup' crea las formas al inicio en base a la variable 'isCircle'.
La funcion 'changeShape' cambia el valor de la variable 'isCircle' para determinar que forma crear,  y con la funcion 'keyPressed' detecta cuando se presiona la barra de espacio para cambiar el valor de la variable 'isCircle' y que así el arreglo 'shapes' se limpie para eliminar las formas anteriores y genere las nuevas formas ya sea de cuadrados a circulos o viceversa.

## DIAGRAMA UML DEL JUEGO
Una posible representacion del juego en el diamagra UML es la siguiente, que representa las herencias y las relaciones que hay entre las clases y funciones del juego.
![](https://github.com/DRB03/FigurasFork/blob/main/diagrama%20del%20juego%20javascript.png)
