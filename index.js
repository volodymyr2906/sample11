var n = +prompt('Enter number greater 0', '');
function Fibonacci(n) {
    var x=0, a = 1;

    while ( n-- > 0 ) {
        x += a;
        a = (x-a);
    }
    return x;
    }
    alert( Fibonacci(n) );