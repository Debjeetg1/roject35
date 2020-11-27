var dog;
var food;
var foodCount = 0 , foodStack ;
var dog_happy , dog_image;
var database;

function preload()
{
   dog_image = loadImage("images/dogImg.png");
   dog_happy = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(800, 700);


  database = firebase.database();
  
  dog = createSprite(400 , 600);
  dog.addImage(dog_image);
  dog.scale = 0.2;




  
}


function draw() {  

  
  background(46, 139, 87);

  


  

  foodStack = database.ref('Food');
  foodStack.on("value" ,readFoodAmount)

  drawSprites();

  textSize(50);
  stroke("darkblack")
  text(foodCount + " Bottles left" , 250 , 50)

}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    updateFoodAmount(1)
    
    console.log(Food)
  }
}

function readFoodAmount(data)
{
  
  food = data.val();
  foodCount = food;
  
 
   
}

function updateFoodAmount(x)
{
  database.ref("Food").update({
    Food: foodCount - x
  });
}





