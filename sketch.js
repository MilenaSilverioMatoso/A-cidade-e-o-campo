function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(57,192,235)");;//cor do céu
fill("red");//cor da casa
  square(21, 260,70);//quadrado casa
   fill("brown");// cor do telhado
  triangle(7, 260, 55, 207, 103,260);//telhado casa
  fill("green");//cor da grama
rect(0,320,400);//grama
textSize(185,320,400);//tamanho da grama
  fill("gray");//cor da rua
  fill("rgb(243,243,20)");//cor do sol
 circle(320,56,64);//sol
  fill("brown");//cor do telhado
  triangle(7, 360,90);//tamanho do triangulo
  textSize(30);//tamanho
  text("🌾",5,350);//milho
   text("🌾",50,350);//milho
  text("🌾",100,350);//milho
  text("🌾",150,350);//milho
  text("🌾",5,380);//milho 
  text("🌾",50,380);//milho 
  text("🌾",100,380);//milho
  text("🌾",150,380);//milho
  text("☁️",220,88);//nuvem
  textSize(50);//tamanho da nuvem
  text("☁️",30,100);//nuvem
  textSize(80);//tamanho da nuvem
  text("☁️",150,98);//nuvem
  textSize(70);//tamanho da nuvem
   text("☁️",320,88);//nuvem
  textSize(50);//tamanho da nuvem
  text("☁️",300,88);//nuvem
  textSize(90);//tamanho da nuvem
  fill("gray");//cor da rua
  text("🏢",280,300);//prédio
  textSize(70);//tamanho do prédio
  text("🏥",195,305);//prédio
 textSize(45);//tamanho do prédio
  text("🚪",10,275,300);//porta
  textSize(20);//tamanho da porta
  text("🪟",60,270,300);//janela
  textSize(50);//tamanho da janela
  text("🚁",110,100);//elicóptero
  textSize(50);//tamanho do elicóptero
  text("🚜",90,310);//trator
 
  
    
  
  
  
  
  
 
 rect(184,320,300)
  
 if (mouseIsPressed){
 console.log(mouseX, mouseY)}
  
  
}