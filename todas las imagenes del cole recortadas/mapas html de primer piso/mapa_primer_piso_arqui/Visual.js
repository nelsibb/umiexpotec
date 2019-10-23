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

      criarPonto(900, 2350), //0
      criarPonto(900, 2290), //1
      criarPonto(610, 2290), //2
      criarPonto(610, 2550), //3
      criarPonto(900, 2050), //4
      criarPonto(800, 2050), //5
      criarPonto(946, 2050), //6
      criarPonto(946, 1720), //7
      criarPonto(585, 1720), //8
      criarPonto(500, 1720), //9
      criarPonto(585, 1325), //10
      criarPonto(670, 1325), //11
      criarPonto(500, 1325), //12
      criarPonto(585, 1060), //13
      criarPonto(946, 705), //14
      criarPonto(720, 705), //15
      criarPonto(450, 740), //16
      criarPonto(450, 580), //17
      criarPonto(720, 580), //18
      criarPonto(720, 740), //19
      criarPonto(946, 640), //20
      criarPonto(1090, 705), //21
      criarPonto(946, 1000), //22
      criarPonto(1100, 1000), //23
      criarPonto(1100, 1200), //24
      criarPonto(1100, 1440), //25
      criarPonto(1100, 1650), //26
      criarPonto(946, 1650), //27


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
g.criarConexao(arrPontos[8], arrPontos[7], parseInt(1));
g.criarConexao(arrPontos[8], arrPontos[9], parseInt(1));
g.criarConexao(arrPontos[8], arrPontos[10], parseInt(1));
g.criarConexao(arrPontos[11], arrPontos[10], parseInt(1));
g.criarConexao(arrPontos[12], arrPontos[10], parseInt(1));
g.criarConexao(arrPontos[13], arrPontos[10], parseInt(1));
g.criarConexao(arrPontos[14], arrPontos[22], parseInt(1));
g.criarConexao(arrPontos[22], arrPontos[7], parseInt(1));
g.criarConexao(arrPontos[27], arrPontos[27], parseInt(1));
g.criarConexao(arrPontos[19], arrPontos[16], parseInt(1));
g.criarConexao(arrPontos[19], arrPontos[15], parseInt(1));
g.criarConexao(arrPontos[16], arrPontos[17], parseInt(1));
g.criarConexao(arrPontos[18], arrPontos[17], parseInt(1));
g.criarConexao(arrPontos[18], arrPontos[15], parseInt(1));
g.criarConexao(arrPontos[15], arrPontos[14], parseInt(1));
g.criarConexao(arrPontos[14], arrPontos[20], parseInt(1));
g.criarConexao(arrPontos[14], arrPontos[21], parseInt(1));
g.criarConexao(arrPontos[23], arrPontos[22], parseInt(1));
g.criarConexao(arrPontos[23], arrPontos[24], parseInt(1));
g.criarConexao(arrPontos[25], arrPontos[24], parseInt(1));
g.criarConexao(arrPontos[26], arrPontos[25], parseInt(1));
g.criarConexao(arrPontos[26], arrPontos[27], parseInt(1));


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
