let i=1;

    $('.i').click(function(){
       if(i==1){
        $('aside').css('display','block');
        $('.i').css('margin-right','600px');
        $('.a').css('display','flex');
        $('aside').toggleClass('aside');
       
        // $('.a').css('margin-right','100px');
        i=0;
        console.log(i)
    }else{
        $('aside').css('display','none');
        $('.i').css('margin-right','950px');
        i=1;
        console.log(i)
    }
    
    })
