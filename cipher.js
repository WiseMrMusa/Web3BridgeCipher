function encrypt(message){
    let encryptedMessage = ""
    for (let i = 0; i < message.length; i++){
        encryptedMessage += String.fromCharCode(message.charCodeAt(i) + 5)
    }
    return encryptedMessage
}

function decrypt(message){
    let decryptedMessage = ""
    for (let i = 0; i < message.length; i++){
        decryptedMessage += String.fromCharCode(message.charCodeAt(i) - 5)
    }
    return decryptedMessage
}

console.log(encrypt("Hello how are you?"))
console.log(decrypt("Mjqqt%mt|%fwj%~tzD"))
