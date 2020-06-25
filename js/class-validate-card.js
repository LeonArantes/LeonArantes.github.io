class validade_card {
    constructor() {
        this.section_home = document.querySelector("section.wrapper-section");
        this.section_register = document.querySelector("section.section-register");
        this.btn_go_register = document.querySelector(".go-register");
        this.btn_go_home = document.querySelector("div.leave");

        this.inputs = document.querySelector("input[type='text']")


        this.input_number = document.querySelector("input[name='number']");
        this.input_valid = document.querySelector("input[name='valid']");
        this.input_code = document.querySelector("input[name='code']");
        this.selectCollor = document.getElementById('colors');
        this.card_front = document.querySelector(".card-front");
        this.card_back = document.querySelector(".card-back");
        this.submit = document.querySelector("input[type='submit']");
        this.btn_view_card_front = document.querySelector("div.btn-view-card-front")
        this.btn_view_card_back = document.querySelector("div.btn-view-card-back")
        this.initialize();

    }

    initialize() {
        this.routes();
        this.validColor();
        this.validateInputs();
        this.flipCard();
        this.inputSubmit();
    }


    routes(){
        this.btn_go_register.addEventListener("click", () => {
                this.section_home.style.display = "none";
                this.section_register.style.display = "flex";
        });

        this.btn_go_home.addEventListener("click", () => {
            this.section_home.style.display = "flex";
            this.section_register.style.display = "none";
        });
    }

    validateInputs() {
        const mask = {
            number(value) {
                this.replace_number = document.querySelector(".number-card");
                this.replace_number.innerHTML = value.replace(/\D/g, '')
                    .replace(/(\d{4})(\d)/, "$1 $2")
                    .replace(/(\d{4})(\d)/, "$1 $2")
                    .replace(/(\d{4})(\d)/, "$1 $2");
                return value
                    .replace(/\D/g, '')
                    .replace(/(\d{4})(\d)/, "$1 $2")
                    .replace(/(\d{4})(\d)/, "$1 $2")
                    .replace(/(\d{4})(\d)/, "$1 $2");
            },

            name(value) {
                this.replace_name = document.querySelector(".name-card");
                this.replace_name.innerHTML = value
                    .replace(/^\s/g, '')
                    .replace(/([\u0300-\u036f]|[^A-Za-z\s])/g, '');
                return value
                    .replace(/^\s/g, '')
                    .replace(/([\u0300-\u036f]|[^a-zA-Z\s])/g, '');
            },

            valid(value) {
                this.replace_valid = document.querySelector(".valid-card");
                this.replace_valid.innerHTML = value
                    .replace(/\D/g, '')
                    .replace(/(\d{2})(\d)/, "$1/$2")
                return value
                    .replace(/\D/g, '')
                    .replace(/(\d{2})(\d)/, "$1/$2")
            },

            code(value) {
                this.replace_code = document.querySelector(".numVerific-card");
                this.replace_code.innerHTML = value.replace(/\D/g, '')
                return value
                    .replace(/\D/g, '');
            }
        }

        document.querySelectorAll('input').forEach(($input) => {
            const field = $input.dataset.js
            $input.addEventListener("input", (e) => {
                e.target.value = mask[field](e.target.value);
            }, false)
        })
    }


    validColor() {
        this.selectCollor.addEventListener("change", () => {
            this.valueChange = this.selectCollor.options[this.selectCollor.selectedIndex].value;


            this.valor = "/PayGo-javascript/src/images/card-" + this.valueChange + "-front.png"
            this.card_front.style.background = "url(" + this.valor + ")";
            this.card_front.style.backgroundPosition = "center";
            this.card_front.style.backgroundRepeat = "no-repeat";
            this.card_front.style.backgroundSize = "100% 100%";

            this.valor2 = "/PayGo-javascript/src/images/card-" + this.valueChange + "-back.png"
            this.card_back.style.background = "url(" + this.valor2 + ")";
            this.card_back.style.backgroundPosition = "center";
            this.card_back.style.backgroundRepeat = "no-repeat";
            this.card_back.style.backgroundSize = "100% 100%";

        })
    }


    flipCard() {

        this.input_code.addEventListener("focus", () => {
            this.card_back.style.transform = "perspective(600px) rotateY(0)";
            this.card_front.style.transform = "perspective(600px) rotateY(-180deg)";
        })

        this.input_code.addEventListener("blur", () => {
            this.card_back.style.transform = "perspective(600px) rotateY(180deg)";
            this.card_front.style.transform = "perspective(600px) rotateY(0)";
        })

        this.btn_view_card_front.addEventListener("click", () => {
            this.card_back.style.transform = "perspective(600px) rotateY(180deg)";
            this.card_front.style.transform = "perspective(600px) rotateY(0)";
        })

        this.btn_view_card_back.addEventListener("click", () => {
            this.card_back.style.transform = "perspective(600px) rotateY(0)";
            this.card_front.style.transform = "perspective(600px) rotateY(-180deg)";
        })
    }

    inputSubmit() {
        this.submit.addEventListener("click", (e) => {
            e.preventDefault();
            if (this.input_number.value.length < 19 || this.input_valid.value.length < 5 ||
                this.input_code.value.length < 3) {
                alert("Preencha corretamento os campos!!");
            } else {
                alert("Cartão Salvo com SUCESSO!!");
            }
        })
    }
}

