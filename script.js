var app = new Vue({
    el:'#app',
    data(){
        return {
            h: "Hallo",
            horaTexto: ""
        }
    },
    methods: {
        hora(){
            const vm = this;
            console.clear();

            // randomiza a hora e o dia
            var hora = Math.floor(Math.random() * (12 - 0)) + 0;
            var minute = Math.floor(Math.random() * (60 - 0)) + 0;
            // randomiza o horario do dia
            var diaNoite = Math.floor(Math.random() * (3 - 1)) + 1;

            var minuteDeg = Math.floor(360 / 60 * minute);
            var horaDeg = Math.floor(360 / 12 * hora) + (minute / 2);


            if(diaNoite == 1){
                console.log("Dia");
            }else{
                console.log("Noite");
                hora += 12;
                

            }

            this.periodo(hora);


            var horario = `${hora} Uhr ${minute}`
            console.log("es ist ", horario);

            if(minute < 20){
                if(minute == 15){
                    vm.horaTexto = `es ist viertel nach ${hora}`
                }else{
                    vm.horaTexto = `es ist ${minute} nach ${hora}`
                }
            }
            if(minute > 40){
                if(minute == 45){
                    vm.horaTexto = `es ist viertel vor ${hora + 1}`
                }else{
                    vm.horaTexto = `es ist ${60 - minute} vor ${hora + 1}`
                }
            }

            if(minute > 20 && minute < 40){
                if(minute == 30){
                    vm.horaTexto == `es ist halb ${hora + 1}`
                }else{
                    if(minute < 30){
                        vm.horaTexto = `es ist ${30 - minute} vor halb ${hora + 1}`
                    }else{
                        vm.horaTexto = `es ist ${minute - 30} nach halb ${hora + 1}`

                    }
                }
            }

            document.getElementsByClassName("minute")[0].style.transform = `rotateZ(${minuteDeg}deg)`;
            document.getElementsByClassName("hour")[0].style.transform = `rotateZ(${horaDeg}deg)`;

            document.getElementById("horaTexto").innerHTML  = this.horaTexto;

        },
        periodo(hora){
            if(hora < 6){
                document.getElementsByClassName("background")[0].style.background = "linear-gradient(0deg, rgb(11, 3, 80) 0%, rgba(34,120,180,1) 100%)"
            }else{
                if(hora > 6 && hora < 12){
                    document.getElementsByClassName("background")[0].style.background = "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)";
                }else{
                    if(hora > 12 && hora < 18){
                        document.getElementsByClassName("background")[0].style.background = "linear-gradient(0deg, rgb(241, 211, 13) 0%, rgba(253,255,150,1) 100%)";
                    }else{
                        if(hora > 18 && hora < 20){
                            document.getElementsByClassName("background")[0].style.background = "linear-gradient(0deg, rgb(241, 211, 13) 0%, rgb(71, 6, 118) 100%)";
                        }else{
                            document.getElementsByClassName("background")[0].style.background = "linear-gradient(0deg, rgb(71, 6, 118)0%,  rgb(11, 3, 80) 100%)";
                            
                        }
                    }
                }
            }
        }
    }
})