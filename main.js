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

function ifSpace(event)
{
    if (event.keyCode == 32)
    {
        input.value = '';
    }
}

text = document.getElementById('text');

function compare(event)
{
    if (event.char != text.char)
    {
        input.onkeypress = 'return false';
    }
}
