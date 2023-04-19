$(document).ready(function () {


    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeExercicio = $('#nome-exercicio').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<li>${nomeExercicio}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nome-exercicio').val('')
    })

})

