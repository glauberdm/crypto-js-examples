var prompt = require('prompt');
var CryptoJS = require('crypto-js');

var promptSchema = {
    properties: {
        mensagem: {
            message: 'Mensagem'
        },
        frase_secreta: {
            message: 'Frase secreta'
        }
    }
};
prompt.start();
prompt.get(promptSchema, (err, result) => {
    if (err) { return onErr(err); }

    //hasheando frase secreta, sem necessidade de conhecimento ou armazenamento
    var hashedPassword = CryptoJS.SHA256(result.frase_secreta).toString();

    var textToEncrypt = result.mensagem;

    //encriptando com a frase secreta hasheada (assinando a mensagem)
    encryptedData = CryptoJS.AES.encrypt(textToEncrypt, hashedPassword);

    console.log('Mensagem encriptada: '+encryptedData);
});

function onErr(err) {
    console.log(err);
    return 1;
}
