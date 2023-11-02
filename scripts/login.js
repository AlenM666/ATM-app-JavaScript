
class Login {

    constructor(pin){
        this.pin = pin;
    }

    register(){

    }

    createTags(){
        const btn = document.getElementById("btn");
        const inputPin = document.getElementById("pin");

        inputPin.placeholder = "Enter Pin: ";
        inputPin.type = 'number';

        btn.addEventListener('click', function() {
            if(inputPin.value === '4321'){

                let ptag = document.createElement("p");
                ptag.id = "ptag";
                ptag.class = "ptag";
                ptag.innerHTML = "Succes";
                ptag.style.width = "90px";
                ptag.style.height = "25px";
                ptag.style.border = "1px solid black";
                ptag.style.borderRadius = "20px 20px 20px 20px";
                ptag.style.color = "black";
                ptag.style.fontSize = "20px";
                document.body.appendChild(ptag);

                setTimeout(() => {
                    document.body.removeChild(ptag);
                }, 3000)

                setTimeout(() => {
                    window.location.href = './pages/main.html';
                },2000)

            }else{
                console.log("Failed");
            }

        })
    }
}





