var imagenes = [];
imagenes[10] = "billete10.jpg";
imagenes[20] = "billete20.jpg";
imagenes[50] = "billete50.jpg";

class Billete
{
    constructor(v, c)
    {
    
        this.valor = v;
        this.cantidad = c;
        this.image = new Image ();

        this.image.src = imagenes[this.valor];
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt (t.value);
    entregado = []
    for (var bi of caja)
    {
    
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            if (papeles > 0)
            {
                entregado.push (new Billete(bi.valor, papeles) );
            }
            
            dinero = dinero - (bi.valor * papeles);

        }
    }
    console.log(entregado)
    if(dinero > 0)
    {
        resultado.innerHTML = "No hay dinero Joven:(";
    }
    else
    {
        resultado.innerHTML = "entregamos dinero";
    }

}

var caja = [];
var entregado = [];
caja.push( new Billete(50, 2) );
caja.push( new Billete(20, 2) );
caja.push( new Billete(10, 3) );

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado")
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

