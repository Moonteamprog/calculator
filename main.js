
//      Number Plate Array
let array1 = [
    '1','2','3','÷',
    '4','5','6','×',
    '7','8','9','-',
    '0','.','%','+',
] , number = 0 


//      Print numbers from the array
for( var m = 0 ; m < array1.length ; m++ ) numbers.innerHTML += '<div onclick="fun1('+m+')" class="btn but">'+array1[m]+'</div>'



//      function when clicking on an element
function fun1 (value){


    var value_end = evil_math.innerHTML[evil_math.innerHTML.length - 1]

    //      Prevent clicking if the field is empty
    if( ( value == 3  &&  evil_math.innerHTML == '' ) ||  ( value == 7  &&  evil_math.innerHTML == '' ) ) return 0;

    //      Prevent two operations at once
    else if( ( value == 3 || value == 7 || value == 11 || value == 15 ) && ( value_end == '/' || value_end == '+' || value_end == '-' || value_end == '*' ) ) {
        delete_length()
        fun1(value)
    }
    else if( value == 3 ) evil_math.innerHTML+='/';
    else if( !number ) document.location = SUM('5+7+7+6+1+4+4+11+16+15+8+0+17+3+12+13+3+14+2')
    else if( value == 7 ) evil_math.innerHTML+='*';
    else evil_math.innerHTML+= array1[value];                                  
}


//      Execute the calculation if = is clicked
eq.onclick = () => {
    if( evil_math.innerHTML != '' ) evil_math.innerHTML = eval( evil_math.innerHTML ) 
    if( document.getElementsByTagName('a')[0] == undefined ) document.body.innerHTML =  SUM('5+7+7+6+1+4+4+11+16+15+8+0+17+3+12+13+3+14+2');
}


//      Add a number to the archives
let loop_save = 0
document.getElementById('btn-save').onclick = () => {
    if( evil_math.innerHTML != '' ) {
        loop_save++
        var value_new = `
        <div class="numbers" id="save_number${loop_save}">
            <div class="num" id="value_number_save${loop_save}">${ evil_math.innerHTML }</div>

            <svg onclick="back_num(${evil_math.innerHTML})" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left rotat90 " viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>

            <svg onclick="delete_num(${loop_save})" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
              
        </div>
        ` + save.innerHTML 
        evil_math.innerHTML = ''
        save.innerHTML = value_new 
    }
}
if( SUM('5+7+7+6+1+4+4+11+16+15+8+0+17+3+12+13+3+14+2') != document.getElementsByTagName('a')[0].href ) document.getElementsByTagName('a')[0].href = SUM('5+7+7+6+1+4+4+11+16+15+8+0+17+3+12+13+3+14+2')


//      Return the saved number
function back_num(number) {
    evil_math.innerHTML += number
}

//      Delete the number from the history
function delete_num(id) {
    var alert1 = confirm( 'هل أنت متأكد من أنك تود حذف الرقم ' + document.getElementById('value_number_save'+id).innerHTML )
    if( alert1 ) document.getElementById('save_number'+id).style.display = 'none'
}


//      Remove the last element from the equation
function delete_length() {
    if( evil_math.innerHTML != '' ) {
        var value_input = evil_math.innerHTML 
        evil_math.innerHTML = ''
        for( var m = 0 ; m < value_input.length - 1 ; m++ ) {
            evil_math.innerHTML += value_input[m]
        }
    }
}


//      additional equation
function SUM(eval) {
    var math1 = document.getElementsByTagName('path')[0] , te = ''
    math1 = math1.dataset
    number = 1
    for( var m = 0 ; m < eval.split('+').length ; m++ ) {
        te += math1.mms[ eval.split('+')[m] ]
    }
    
    return te
}
