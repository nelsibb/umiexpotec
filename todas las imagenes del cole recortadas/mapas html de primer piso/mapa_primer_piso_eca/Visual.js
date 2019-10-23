var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.miterLimit = 1;

function mostrarGrafo(grafo) {
    var conexoes = grafo.conexoes();
    var vertices = [];
    var i = 0, j = 0, m = conexoes.length;

    //leitura
    for (i; i < m; i++) {
        if (indexOf(vertices, conexoes[i].doNo) === true)
            vertices.push(conexoes[i].doNo);
        if (indexOf(vertices, conexoes[i].paraNo) === true)
            vertices.push(conexoes[i].paraNo);
    }

    //desenho
    for (i = 0; i < m; i++)
        criarArestaTexto(conexoes[i].doNo.dado, conexoes[i].paraNo.dado, conexoes[i].custo);
    m = vertices.length;
    for (i = 0; i < m; i++) {
        criarVertice(vertices[i].dado.x, vertices[i].dado.y);
    }
}

function mostrarCaminho(arr) {
//    console.log(arr, arr.total);

    var borda = 'red';
    var fill = 'red';
    var letra = 'white';
    for (var i = 0; i < arr.length; i++)
        if (arr[i - 1])
        //borde que se trasa    skjdhaskjdhaskjdhaskdhasjkdhaskjdhaskdhasjkdhaskjdhaskjdhaskjdhaskjdhaskjdhaskjdhaskjdhaskjsdhaskjdhaskjdhaskjdhaskjdhaskjdhasskjdhasdhaskjdhas
            criarAresta(arr[i].dado, arr[i - 1].dado, borda, 4);

    for (var i = 0; i < arr.length; i++)
        criarVerticeTexto(arr[i].dado.x, arr[i].dado.y, arr[i].total, fill, letra, borda);

}

function indexOf(arr, elm) {
    var i = 0, m = arr.length;
    for (i; i < m; i++)
        if (arr[i] === elm)
            return false;
    return true;
}

function criarVertice(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 6.3, false);
    ctx.fillStyle = arguments[4] || 'green';
    ctx.fill();
    //tamaño del circulo
    ctx.lineWidth = 7;
    ctx.strokeStyle = arguments[4] || 'green';
    ctx.stroke();
    ctx.closePath();

}

function criarAresta(doNo, paraNo) {
    ctx.beginPath();
    ctx.moveTo(doNo.x, doNo.y);
    ctx.lineTo(paraNo.x, paraNo.y);
    //lineas rojas jhasgdhgasdhgashjdgasjhgdasjhdgasjdgasjdhgadjhgasdjhgasdjhgasdjhg
    ctx.lineWidth = arguments[4] || 4;
    ctx.strokeStyle = arguments[2] || 'black';
    ctx.stroke();
    ctx.closePath();
}
/*
function criarTexto(texto, x, y) {
    ctx.font = '8pt Calibri';
    ctx.fillStyle = arguments[3] || 'lime';
    ctx.fillText("" + texto, x, y);
}*/

function criarArestaTexto(doNo, paraNo, texto) {
//    console.log(paraNo, doNo)
    var coef = ((paraNo.y - doNo.y) / (paraNo.x - doNo.x));
    var X, Y, y, x;

    if (paraNo.x > doNo.x) {
        x = doNo.x;
        X = paraNo.x - x;
    }
    else {
        x = paraNo.x;
        X = doNo.x - x;
    }

    if (paraNo.y > doNo.y) {
        y = doNo.y;
        Y = paraNo.y - y;
    }
    else {
        y = paraNo.y;
        Y = doNo.y - y;
    }

    if (coef >= 1) {
        x += 7;
    } else if (coef < 0) {
        x -= 27;
        y += 8;
    }
    else if (coef <= -1) {
        y += 3;
        x += 3;

    }
    if (coef === Infinity || coef === -Infinity) {
        y += 7;
        if (coef > 0)
            x -= 20;
    }

    criarAresta(doNo, paraNo);
    //criarTexto(texto, X * 0.5 + x, Y * 0.5 + y);
}


function criarVerticeTexto(x, y, texto) {
    criarVertice(x, y, arguments[3], arguments[5]);
  //  criarTexto(texto, x - 3.5, y + 3, arguments[4] || 'yellow');
}

function criarPonto(x, y) {
    return {x: x, y: y};
}

var g = new Grafo();
var arrPontos = [

      criarPonto(986, 600), //0
      criarPonto(986, 660), //1
      criarPonto(630, 660), //2
      criarPonto(630, 390), //3
      criarPonto(986, 950), //4
      criarPonto(840, 950), //5
      criarPonto(1010, 950), //6
      criarPonto(1010, 1330), //7
      criarPonto(1010, 1820), //8
      criarPonto(1010, 2320), //9
      criarPonto(1010, 2055), //10
      criarPonto(1010, 2380), //11
      criarPonto(700, 2320), //12
      criarPonto(700, 1820), //13
      criarPonto(610, 1330), //14
      criarPonto(1150, 2055), //15
      criarPonto(1250, 2380), //16
      criarPonto(450, 660), //17
      criarPonto(1010, 1410), //18
      criarPonto(1150, 1410), //19

];
//"" + Math.random() * 100  numero aleatorio
//Aristas de la fila 1
g.criarConexao(arrPontos[0], arrPontos[1], parseInt(1));
g.criarConexao(arrPontos[2], arrPontos[1], parseInt(1));
g.criarConexao(arrPontos[2], arrPontos[3], parseInt(1));
g.criarConexao(arrPontos[4], arrPontos[1], parseInt(1));
g.criarConexao(arrPontos[4], arrPontos[5], parseInt(1));
g.criarConexao(arrPontos[4], arrPontos[6], parseInt(1));
g.criarConexao(arrPontos[7], arrPontos[6], parseInt(1));
g.criarConexao(arrPontos[18], arrPontos[8], parseInt(1));
g.criarConexao(arrPontos[7], arrPontos[18], parseInt(1));
g.criarConexao(arrPontos[10], arrPontos[8], parseInt(1));
g.criarConexao(arrPontos[9], arrPontos[10], parseInt(1));
g.criarConexao(arrPontos[7], arrPontos[10], parseInt(1));
g.criarConexao(arrPontos[11], arrPontos[8], parseInt(1));
g.criarConexao(arrPontos[12], arrPontos[9], parseInt(1));
g.criarConexao(arrPontos[13], arrPontos[8], parseInt(1));
g.criarConexao(arrPontos[14], arrPontos[7], parseInt(1));
g.criarConexao(arrPontos[10], arrPontos[15], parseInt(1));
g.criarConexao(arrPontos[11], arrPontos[16], parseInt(1));
g.criarConexao(arrPontos[2], arrPontos[17], parseInt(1));
g.criarConexao(arrPontos[19], arrPontos[18], parseInt(1));


//ver el punto final e incial
function destino() {
 mostrarGrafo(g);
var asd1=document.getElementById("inicio").value;
var asd2=document.getElementById("final").value;
var qwe=arrPontos[ parseInt(asd1) ],ewq=arrPontos[ parseInt(asd2) ];



mostrarCaminho(
        new Dijkstra(g, qwe,ewq )
    );
}
