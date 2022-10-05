canvas = document.getElementById('myCanvas');
//dentro del canvas mandas a llamar el id myCanvas
ctx = canvas.getContext("2d");
 //indica que el dibujo es en 2d
rover_width = 100;
//variable ancho de rober con valor de 100
rover_height = 90;
 //variable alto de rober con valor de 90
background_image = "mars.jpg";
 //se pone la imagen de fondo mars.jpg
rover_image = "rover.png";
 //variable rover image como rover.png
rover_x = 10;
//coordenada de rover en x 10
rover_y = 10;
 //coordenada de rover en y 10
function add() {
    //se crea la funcion add
    background_imgTag = new Image(); //define una variable con la imagen nuevae
    background_imgTag.onload = uploadBackground; // establece la función para cargar esta variable
    //cuando se carga la pagina manda a llamar la función uploadBackground
    background_imgTag.src = background_image;   // carga la imagen
    rover_imgTag = new Image(); //define una variable para la imagen nueva
    rover_imgTag.onload = uploadrover; // establece la función para cargar esta variable
    //cuando la pagina web carga manda a llamar la función uploadrover
    rover_imgTag.src = rover_image;   // carga la imagen
    //carga la imagen que tiene la variable rover_image
}
 
function uploadBackground() {
    //crea la función uploadBackground
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    //se dibuja la imagen y se adapta al anch y alto del canvas
}
 
function uploadrover() {
    //se crea la función uploadrover
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
    //dibuja la imagen de acuerdo a los valores de las variables
}
 
 
window.addEventListener("keydown", my_keydown);
 //en esta ventana va a haber un evento de keydown y cuando ocurre manda a llamar la función my_keydown
function my_keydown(e)
//se crea la función de my_keydown
{
    keyPressed = e.keyCode;
    //la variable keypressed le asignas el evento de keycode de la tecla presionada
    console.log(keyPressed);
    //la variabla keypressed se manda a la consola
        if(keyPressed == '38')
        //si la variable keypressed es igual a 38 ejecuta la fución de up (arriba)
        {
            up();
            //función up
            console.log("up");
            //se manda a la consola el texto up
        }
        if(keyPressed == '40')
        // si la variable  keypressed es igual a 40 se ejecuta la función down
        {
            down();
            //función down
            console.log("down");
            //se manda a la consola el texto down
        }
        if(keyPressed == '37')
        //si la variable keypressed es igual a 37 se ejecuta la función left
        {
            left();
            //función left
            console.log("left");
            //se manda a la consola el texto de left
        }
        if(keyPressed == '39')
        //si la variable keypressed es igual a 39 se ejecuta la función right
        {
            right();
            //función right
            console.log("right");
            //se manda a la consola el texto de rigth
        }
}
 
function up()
//se crea la función up
{
    if(rover_y >=0)
    //si la posición de la variable rover en y es mayor a 0 se le resta 10 de valor a la variable rover_y
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        //se manda a la consola en texto de when up arroy is pressed, se concatenan las variables rover x y rover y con el texto
         uploadBackground();
         //se manda a llamar la función
         uploadrover();
         //se manda a llamar la función
    }
}
function down()
//se crea la función down
{
    if(rover_y <=500)
    //si la variable rover_y es menor que 500
    {
        rover_y =rover_y+ 10;
        //se le suman 10 a la variable rover_y
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        //se manda a la consola el texto de: when down arrow is pressed, se concatenan las variable rover_x y rover_y con el texto
        uploadBackground();
        //se manda a llamar a la función
         uploadrover();
         //se manda a llamar a la función
    }
}
function left()
{
    if(rover_x >= 0)
    {
        rover_x =rover_x - 10;
        console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
         uploadrover();
    }
}
function right()
{
    if(rover_x <= 700)
    {
        rover_x =rover_x + 10;
        console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
   }
}
   
