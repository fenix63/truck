function proverka(input) { 
                var value = input.value; 
                var rep = /^[0-9]+$/;
                //var rep = /^[a-zA-Z]^[0-9]+$/;
                //var rep = /^[a-z0-9A-Z]+$/;
                //var rep = /^[a-zA-Z]+$|^[0-9a-zA-Z]+$|^[a-z0-9A-Z]+$|^[a-zA-Z0-9]+$/; 
                if (rep.test(value)) { 
                    value = value.replace(rep, ''); 
                    input.value = value; 
                } 
            }

//Функция проверяет, содержит ли строка цифры и пробелы. И если содержит то false, если не содержит то true
function isTextOnly(str){

    if(str.indexOf('1')==-1 && str.indexOf('2')==-1 && str.indexOf('3')==-1 && str.indexOf('4')==-1 && str.indexOf('5')==-1 &&
        str.indexOf('6')==-1 && str.indexOf('7')==-1 && str.indexOf('8')==-1 && str.indexOf('9')==-1 && str.indexOf('0')==-1 &&
        str.indexOf(' ')==-1
        )
        return false;
    else
        return true;


}