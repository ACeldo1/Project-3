jQuery(document).ready (function($){
    axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
    
    var inch = result.data
        return $('<p>').addClass('inch').data('id', inch.centimetersInInch).html(inch.centimetersInInch * inch);
    });

    $('#inch').on('click', '.inch', function(){
        var inchCm = $(this).data('id');
        var url = "http://statenweb.mockable.io/conversions/" + inchCm;

        axios.get(url).then(function(inch){

            var output = $('<h6>').html(inch.data.centimetersInInch);
        });

    });

    axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
    
        var cm = result.data
            return $('<p>').addClass('cm').data('id', inch.inchesInCm).html(inch.inchesInCm * cm);
        });
    
        $('#cm').on('click', '.cm', function(){
            var cmInch = $(this).data('id');
            var url = "http://statenweb.mockable.io/conversions/" + cmInch;
    
            axios.get(url).then(function(cm){
    
                var output = $('<h6>').html(inch.data.inchesInCm);
            });
    
        });
});