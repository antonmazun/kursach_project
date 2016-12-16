function readyClickFuncCart(){
$(document).ready(function(){
    $(".add").click(function(){
        btn = $(this);
       // alert(btn.attr("value"));
        $.ajax({type: "POST", url:"/", data: {add: btn.attr("value"), xhr: true}, success: function(result){
             let status = jQuery.parseJSON(result);
            if(status.status !== "ok"){
                alert(status.status)
            }
            else{
               btn.hide();
            }
        }});
    });
});
};

readyClickFuncCart();

$(document).ready(function(){
        $(".deletePhone").click(function(){
            btn = $(this);
            //alert(btn.attr("value"));
            $.ajax({type: "delete", url: $(location).attr('pathname') + '?phone=' + btn.attr("value"), success: function(result){
//                alert(result);
               
                if (result.status === 'error'){
                    alert('error');}
                else
                    {$("#phone_" + btn.attr("value")).remove();}
            }});
        });
    });

//      function getCookie(name) {
//        var cookieValue = null;
//        if (document.cookie && document.cookie !== '') {
//            var cookies = document.cookie.split(';');
//            for (var i = 0; i < cookies.length; i++) {
//                var cookie = jQuery.trim(cookies[i]);
//                // Does this cookie string begin with the name we want?
//                if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                    break;
//                }
//            }
//        }
//        return cookieValue;
//    }
//    var csrftoken = getCookie('csrftoken');
//    function csrfSafeMethod(method) {
//        // these HTTP methods do not require CSRF protection
//        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
//    }
//    $.ajaxSetup({
//        beforeSend: function(xhr, settings) {
//            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
//                xhr.setRequestHeader("X-CSRFToken", csrftoken);
//            }
//        }
//    });
//

$(document).ready(function(){
    $(".search_par").click(function(){
        btn = $(this);
        inp = [];
        min = $("#txtMinprice").val();
        max = $("#txtMaxprice").val();
        inp.push($("#apple"));
        inp.push($("#samsung"));
        inp.push($("#nokia"));
        inp.push($("#meizu"));
        inp.push($("#lenovo"));
        inp.push($("#sony"));
        str = "";
        for (i in inp){
            if(inp[i].prop('checked'))
                str += inp[i].attr("name") + ' ';
        }
        $.ajax({
            type: "GET",
            url : "/search_par/",
            data:{minPrice : min, maxPrice :max , manuf: str},
            success: function(result){
           // alert(result);
               result = jQuery.parseJSON(result);
                
                $(".phone_container").remove();
                $(".comments").remove();
                $(".pagination_page").remove();
                $(".about_list").remove();
                $(".contact").remove();
                $(".contact_number").remove();
                  if(result.length == 0){
                    $("#phones_container").append('<div class = "phone_container"><h1>Not Found!</h1></div>');
                }
             else
            for(i in result){
                $("#phones_container").append('<div class = "col-sm-4 phone_container" id = "phone_' + result[i].id + '"><div class = "thumbnail"><img src = "' + result[i].url + '" alt = ""  class = "img-responsive" id = "content_image"><div class = "caption"><h3>Виробник:' + result[i].title + ' </h3><p>Ціна $: ' + result[i].price + '</p><p>Рейтинг:' + result[i].rate + '</p><a href  = "/phones_view/get/'+ result[i].id + '" class = "btn btn-success">Детальніше...</a><button class = "btn btn-info pull-right add" value = "' + result[i].id +'">Додати в кошик</button></div></div></div>');
            };
            readyClickFuncCart();
            }});
        });
    }); 

$(document).ready(function(){
    $(".search").click(function(){
        btn = $(this);
        inp = $("#search");
        $.ajax({
            type: "GET",
            url : "/search/",
            data: {search: inp.val(), xhr: true},
            success: function(result){

               result = jQuery.parseJSON(result);
            // alert(result);
            $(".phone_container").remove();
            $(".about_list").remove();
            $(".comments").remove();
            $(".pagination_page").remove();
            $(".contact").remove();
            $(".contact_number").remove();
                
                if(result.length == 0){
                    $("#phones_container").append('<div class = "phone_container"><h1>Not Found!</h1></div>');
                }
                else
            for(i in result){
                $("#phones_container").append('<div class = "col-sm-4 phone_container" id = "phone_' + result[i].id + '"><div class = "thumbnail"><img src = "' + result[i].url + '" alt = ""  class = "img-responsive" id = "content_image"><div class = "caption"><h3>Виробник: ' + result[i].title + ' </h3><p>Ціна $: ' + result[i].price + '</p><p>Рейтинг:' + result[i].rate + '</p><a href  = "/phones_view/get/'+ result[i].id + '" class = "btn btn-success">Детальніше...</a><button class = "btn btn-info pull-right add" value = "' + result[i].id +'">Додати в кошик</button></div></div></div>');
            };
            readyClickFuncCart();
        }});
    });
});



//$(document).ready(function){
//    $('#login').click(function){
//       
//        
//    }
//    
//}

//$(document).ready(function(){
//    
//    $('#slider').slidert({
//        range :true;
//    });
//});