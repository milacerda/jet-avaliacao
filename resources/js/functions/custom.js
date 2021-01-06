export const formSettings = {
    debug: false,
    on: "blur",
    inline: true,
    fields: {
        name: {
            identifier: "name",
            rules: [{
                type: "regExp",
                value: /^([A-zÀ-ÿ]{1,}\s[a-zA-z]{1,}'?-?[A-zÀ-ÿ]{1,}\s?([A-zÀ-ÿ]{1,})?)/,
                prompt: "Preencha com seu nome completo. (Ex: João Silva ou Maria Silva)"
            }]
        },
        email: {
            identifier: "email",
            rules: [{
                type: "email",
                prompt: "{name} inválido"
            }]
        },
        phone: {
            identifier: "phone",
            rules: [{
                type: "regExp",
                value: /(^|\()?\s*(\d{2})\s*(\s|\))*(9?\d{4})(\s|-)?(\d{4})($|\n)/u,
                prompt: "Telefone inválido. (Ex: (16) 3645-9857 ou (16) 98764-5316)"
            }]
        },
        subject: {
            identifier: "subject",
            rules: [{
                type: "empty",
                prompt: "Assunto não foi preenchido."
            }]
        },
        message: {
            identifier: "message",
            rules: [{
                type: "empty",
                prompt: "Mensagem não foi preenchida."
            }]
        },
    },
    onSuccess: function() {
        var form = $(this);
        var data = $(form).serializeArray();
        
        var json = data.map((d) => {
            return { [d.name]: d.value};
        });

        sessionStorage.setItem($(this).attr('id'), JSON.stringify(json));
        location.reload();
    }
};

$(document).ready(() => {
    $("#formContact").form(formSettings);
})

window.showValues = function(inputName, value) {
    var el = document.getElementById(inputName);
    el.textContent = value;
}