var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];


$(".btn").click(function()
{
   var userChosenColour=$(this).attr("id");
   userClickedPattern.push(userChosenColour);
   checkAnswer(userClickedPattern.length-1);

});

function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}


function nextSequence()
{
    var randomNumber=Math.floor((Math.random()*4));
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    $("h1").text("level "+level);
    level=level+1;
}

function animatePress(currentColour)
{
    $(".btn").click(function()
    {
          clickedButton=$(this).attr("id");
          $("#"+clickedButton).addClass("pressed");
          setTimeout(function()
          {
            $("#"+clickedButton).removeClass("pressed");
          },100);

    });
}

function checkAnswer(currentLevel)
{
    if (userClickedPattern[currentLevel]=== gamePattern[currentLevel])
    {
        if (userClickedPattern.toString()===gamePattern.toString())
        {
            setTimeout(function()
            {nextSequence();},1000);
            userClickedPattern=[];
        }
        
    }
    else
    {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function()
        {
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();

    }
    
}

function startOver()
{
    level=0;
    gamePattern=[];
    userClickedPattern=[];
}
var level=0;
$(document).keydown(function()
{
    nextSequence();
    
});



