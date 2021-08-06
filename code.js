var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8de3aba6-a3b1-4c41-80f7-e8c6d3f087b0","f9bd9a90-3fb3-4690-8511-d4da817dac71","a1a58f37-ebbb-4535-a6e1-1e4e742476e7","25a19a2f-e140-40e0-ab7b-27adfd86634a"],"propsByKey":{"8de3aba6-a3b1-4c41-80f7-e8c6d3f087b0":{"name":"retro_red_heart_1","sourceUrl":null,"frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":12,"version":"MjHGuiOJku3S91i9rN1Bhi6wGgAimTi9","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/8de3aba6-a3b1-4c41-80f7-e8c6d3f087b0.png"},"f9bd9a90-3fb3-4690-8511-d4da817dac71":{"name":"cat","sourceUrl":null,"frameSize":{"x":20,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZUOJeSPiTpnVG30ZoeRNvxoakads1vEQ","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":17},"rootRelativePath":"assets/f9bd9a90-3fb3-4690-8511-d4da817dac71.png"},"a1a58f37-ebbb-4535-a6e1-1e4e742476e7":{"name":"dog","sourceUrl":null,"frameSize":{"x":18,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"fc3GlTflueD6v5paVXHNy8fuvYutO5xy","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":18,"y":17},"rootRelativePath":"assets/a1a58f37-ebbb-4535-a6e1-1e4e742476e7.png"},"25a19a2f-e140-40e0-ab7b-27adfd86634a":{"name":"home","sourceUrl":null,"frameSize":{"x":40,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"0CvuOwWxGBtDc0wJOtwmu_KHdSWloc1Q","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":28},"rootRelativePath":"assets/25a19a2f-e140-40e0-ab7b-27adfd86634a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the sprites and adding animation to them
var fail = 0;
var cat = createSprite(20,190,13,13);
cat.setAnimation("cat");

var home = createSprite(370,190,13,13);
home.setAnimation("home");

var boundary1 = createSprite(190,120,420,3);
var boundary2 = createSprite(190,260,420,3);

  var dog1 = createSprite(80,130,10,10);
  dog1.setAnimation("dog");
  var dog2 = createSprite(185,130,10,10);
  dog2.setAnimation("dog");
  var dog3 = createSprite(135,250,10,10);
  dog3.setAnimation("dog");
  var dog4 = createSprite(240,250,10,10);
  dog4.setAnimation("dog");
  var dog5= createSprite(290,130,10,10);
  dog5.setAnimation("dog");
  //setting the velocity of the sprites
  dog1.velocityY = 6;
  dog2.velocityY = 6;
  dog3.velocityY = -6;
  dog4.velocityY = -6;
 dog5.velocityY= 6;

function draw(){
  //clearing the screen
  background("white");
  
//creating text
  fill("pink");
strokeWeight(2);
stroke("black");
  textSize(15);
  text("fails: " + fail ,40,100);
  strokeWeight(0);
  fill("brown");
  rect(0,120,52,140);
  fill("pink");
  rect(345,120,52,140);
  
  //making sure the sprites bounce off the boundaries
  dog1.bounceOff(boundary1);
  dog1.bounceOff(boundary2);
  dog2.bounceOff(boundary1);
  dog2.bounceOff(boundary2);
  dog3.bounceOff(boundary1);
  dog3.bounceOff(boundary2);
  dog4.bounceOff(boundary1);
  dog4.bounceOff(boundary2);
  dog5.bounceOff(boundary1);
  dog5.bounceOff(boundary2);
  
  //making the sprite move with the keys
  if(keyDown("right")){
    cat.x = cat.x + 2;
  }
  if(keyDown("left")){
    cat.x = cat.x - 2;
  }
  if(//adding score
     cat.isTouching(dog1)||
     cat.isTouching(dog2)||
     cat.isTouching(dog3)||
     cat.isTouching(dog4))
  {
     cat.x = 20;
     cat.y = 190;
     fail = fail + 1;
  }
  if(//adding sound effects
     cat.isTouching(dog1)||
     cat.isTouching(dog2)||
     cat.isTouching(dog3)||
     cat.isTouching(dog4)||
     cat.isTouching(dog5))
     {
       playSound("https://youtu.be/6wvFozENHb8");
       
     }
     
     if //displaying text
    (cat.isTouching(home))
   { 
  stroke("black");
strokeWeight(2);
   fill("brown");
   textSize(15);
   text("cat has reached her home!", 200, 280);
   }
   
  
     
     
  
  
 drawSprites();
}
 
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
