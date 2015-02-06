/**
 * Created by Максим on 06.02.2015.
 */
$(document).ready ( function()
    {
        $(".input").keyup(function()
        {
            $('#contentInput').text($(".input").val());
        });
    });
/*function if_space()
{
    if (contentInput = $('#contentInput').val(' ')) {
    }
        $('#contentInput').val('');
    }
}

