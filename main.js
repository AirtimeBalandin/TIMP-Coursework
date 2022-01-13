
    $('.add').click(function(e){
    var add = $(this).parents('.add');
    add.append('<div class="animtocart"></div>');
    $('.animtocart').css({
    'position' : 'absolute',
    'background' : '#07578b',
    'width' :  '25px',
    'height' : '25px',
    'border-radius' : '100px',
    'z-index' : '9999999999',
    'left' : e.pageX-25,
    'top' : e.pageY-25,
});
    $('.animtocart').animate({ top: cart.top + 'px', left: cart.left + 'px', width: 0, height: 0 }, 800, function(){
    $(this).remove();
});
});
