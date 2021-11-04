

 
function encontrarElemento(contenido)
{
    var el = document.getElementById("listaPrincipal").getElementsByTagName("li");
    for (var i=0; i<el.length; i++)
    {
        if(el[i].innerHTML==contenido)
            return false;
    }
    return true;
}

function agregarElemento()
{
    var nuevoLi=document.getElementById("elementoNuevo").value;
    if(nuevoLi.length>0)
    {
        if(encontrarElemento(nuevoLi))
        {
            var li=document.createElement('li');
            li.id=nuevoLi;
            li.innerHTML=nuevoLi+"<span onclick='eliminar(this)'> |eliminar| </span>";
            document.getElementById("listaPrincipal").appendChild(li);
        }
    }
    return false;
}

function eliminar(elemento)
{
    var id=elemento.parentNode.getAttribute("id");
    node=document.getElementById(id);
    node.parentNode.removeChild(node);
}