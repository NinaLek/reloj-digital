(function (){
    var actualizarHora = function(){
        //creamos un objeto date para conseguir la info de la computadora
        var fecha = new Date(),
        //separamos la info en distintas variables que vamos a usar más tarde
        //para la fecha
        diaSemana= fecha.getDay(),
        numero = fecha.getDate(),
        mes = fecha.getMonth(),
        anio= fecha.getFullYear(),
        //para la hora
        hora = fecha.getHours(),
        minuto = fecha.getMinutes(),
        segundo = fecha.getSeconds();

        //variables para manejar los datos del index
        var pDiaSemana = document.getElementById('dia'),
        pNumero = document.getElementById('numero'),
        pMes = document.getElementById('mes'),
        pAnio = document.getElementById('anio'),

        pHora = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos');


        //ahora hay que mandarselos al index
        //array para el día de la semana
        var semana = ['Domingo', 'Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
        pDiaSemana.textContent = semana[diaSemana];
        //array para el mes
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];
        pNumero.textContent = numero;
        pAnio.textContent = anio;
        
        //el formato tiene que ser xx:xx:xx
        if(hora<10){
            hora = "0"+hora;
        }
        pHora.textContent = hora;

        if(minuto<10){
            minuto = "0"+minuto;
        }
        pMinutos.textContent = minuto;

        if(segundo<10){
            segundo = "0"+segundo;
        }
        pSegundos.textContent = segundo;
    }

    actualizarHora();
    //actualizar el reloj automáticamente
    var intervalo = setInterval(actualizarHora, 1000);



}())