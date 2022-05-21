function contenido(id){
    return document.getElementById(id);
}
function promedio(){
    var an=parseInt(contenido("n1").value);
    var bn=parseInt(contenido("n2").value);
    var cn=parseInt(contenido("n3").value);
    var dn=parseInt(contenido("n4").value);
    var en=parseInt(contenido("n5").value);
    var ptotal=(an+bn+cn+dn+en)/5;
    contenido("prom").value=ptotal;
}
function suma(){
    var an=parseInt(contenido("n1").value);
    var bn=parseInt(contenido("n2").value);
    var cn=parseInt(contenido("n3").value);
    var dn=parseInt(contenido("n4").value);
    var en=parseInt(contenido("n5").value);
    var stotal=(an+bn+cn+dn+en);
    contenido("suma").value=stotal;
}
function mayor(){
    var a=parseInt(contenido("n1").value);
    var b=parseInt(contenido("n2").value);
    var c=parseInt(contenido("n3").value);
    var d=parseInt(contenido("n4").value);
    var e=parseInt(contenido("n5").value);
    if(a>=b && a>=c && a>=d && a>=e){
        contenido("mayo").value=a;
    }
    if(b>=a && b>=c && b>=d && b>=e){
        contenido("mayo").value=b;
    }
    if(c>=b && c>=a && c>=d && c>=e){
        contenido("mayo").value=c;
    }
    if(d>=b && d>=c && d>=a && d>=e){
        contenido("mayo").value=d;
    }
    if(e>=b && e>=c && e>=d && e>=a){
        contenido("mayo").value=e;
    }
}