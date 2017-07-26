var prompt = require('prompt');
var CryptoJS = require('crypto-js');

var promptSchema = {
    properties: {
        mensagem: {
            message: 'Mensagem encriptada'
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

    var encryptedData = result.mensagem;

    //decriptando dados recebidos
    var decryptedData = null;
    try{
        decryptedData = CryptoJS.AES.decrypt(encryptedData, hashedPassword);
        originalData = decryptedData.toString(CryptoJS.enc.Utf8);

        console.log('Mensagem decriptada: '+originalData);
    }catch(err){
        console.log('Mensagem não decriptada, frase secreta inválida!');
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}
