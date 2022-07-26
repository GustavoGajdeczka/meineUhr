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
            var horaDeg = Math.floor(Math.random() * (12 - 0)) + 0;
            var minuteDeg = Math.floor(Math.random() * (60 - 0)) + 0;
            var diaNoite = Math.floor(Math.random() * (3 - 1)) + 1;
            console.log("Dia", diaNoite);
            if(diaNoite == 1){
                document.getElementsByClassName("background")[0].style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)";
            }else{
                document.getElementsByClassName("background")[0].style.background = "linear-gradient(0deg, rgb(71, 6, 118) 0%, rgb(11, 3, 108) 100%)"

            }


            console.log("HoraDeg", horaDeg);
            console.log("MinuteDeg", minuteDeg);
            var horaRandom = Math.floor(Math.random() * (360 - 0)) + 0;
            document.getElementsByClassName("minute")[0].style.transform = `rotateZ(${horaRandom}deg)`;
            var horaRandom = Math.floor(Math.random() * (360 - 0)) + 0;
            document.getElementsByClassName("hour")[0].style.transform = `rotateZ(${horaRandom}deg)`;
        }
    }
})