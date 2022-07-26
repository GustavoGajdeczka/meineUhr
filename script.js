var app = new Vue({
    el:'#app',
    data(){
        return {
            h: "Hallo",
            timeList: [12, 1,2,3,4,5,6,7,8,9,10,11]
        }
    },
    methods: {
        hora:() => {
            // randomiza a hora e o dia
            var hora = Math.floor(Math.random() * (12 - 0)) + 0;
            var minute = Math.floor(Math.random() * (60 - 0)) + 0;
            // randomiza o horario do dia
            var diaNoite = Math.floor(Math.random() * (3 - 1)) + 1;

            var minuteDeg = Math.floor(360 / 60 * minute);
            var horaDeg = Math.floor(360 / 12 * hora) + (minute / 2);

            if(diaNoite == 1){
                console.log("Dia");
                document.getElementsByClassName("background")[0].style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)";
            }else{
                console.log("Noite");
                hora += 12;
                document.getElementsByClassName("background")[0].style.background = "linear-gradient(0deg, rgb(71, 6, 118) 0%, rgb(11, 3, 108) 100%)"

            }

            var horario = `${hora} Uhr ${minute}`
            console.log("es ist ", horario);

            //var horaRandom = Math.floor(Math.random() * (360 - 0)) + 0;
            document.getElementsByClassName("minute")[0].style.transform = `rotateZ(${minuteDeg}deg)`;
            //var horaRandom = Math.floor(Math.random() * (360 - 0)) + 0;
            document.getElementsByClassName("hour")[0].style.transform = `rotateZ(${horaDeg}deg)`;
        }
    }
})