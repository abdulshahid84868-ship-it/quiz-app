function checkAnswer(answer)
{
    if(answer === 'A')
    {
        document.getElementById("result").innerHTML =
        "Correct Answer!";
    }
    else
    {
        document.getElementById("result").innerHTML =
        "Wrong Answer!";
    }
}