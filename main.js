/**
 * Created by Максим on 06.02.2015.
 */
function getChar(event)
{
    if (event.which == null)
    {
        if (event.keyCode < 32)
        {
            return null;
        }
        return String.fromCharCode(event.keyCode)
    }

    if (event.which!=0 && event.charCode!=0)
    {
        if (event.which < 32)
        {
            return null;
        }
        return String.fromCharCode(event.which);
    }

    return null;
}

input = document.getElementById('input');

var text = document.getElementById('text').innerHTML + '';
var word = text.split(' ');

function ifSpace(event)
{
    if (event.keyCode == 32)
    {
        input.value = '';
        //word[i].style.textDecoration = "underline";
    }
}
var i=0;
function changeWord(i)
{
    for (i; i<word.length; i++) 
    {
        word[i];
    }
};
console.log(word[i]);
function compare(event)
{
    var newWord = input.value + getChar(event);
    if (newWord != word[i])
    {
        var onKeyPress = function()
        {
            return false;
        };
        input.onkeypress = onKeyPress;
        onKeyPress();
    } 
    else
    {
        changeWord();
    }
}
