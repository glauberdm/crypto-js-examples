# AES Encrypting / Decrypting Messages

## Encriptando mensagem:

```
../aes-encrypting-decrypting$ node encrypt.js
prompt: Mensagem: 
```
Digite uma mensagem como: **Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Delegadis gente finis, bibendum egestas augue arcu ut est.**

```
prompt: Frase secreta:
```

Digite uma frase secreta como: **mensagem encriptada**

```
Mensagem encriptada: U2FsdGVkX186zsaQMeNFum1PNuHsrsEqhhaX+GsoG0UIzcyk/B75s5xz76TZK2LiXhgkNq2FY7gJ0I7fOr51K0HbQ3FCfWVZ6xfs45nNMqv64xdO2beCNqX9VIh+F2rjyvxb/Wk3kWpjvhXCCfVClYZyXth1jx0o1rQahUBrHDnp3asO6jAHzNj6SbyKVEaP9TTsZS5csp5Qj0WcDU53HTPNudKdEwF4lpcO3d39Xudv4vN+9ltARsVDe5A17qj2EHlvOcrwIr3KpAms6ZyJFuSyZ4P9/vJ2QXqrZCGlDU5Nw4jiHbrAXls3NZadflSwf/bMjbWYO1FVMqzVUDpwpQpV04rNY/oyXxAm1i8zGGae0rS6HzoWGpZTVeQg9cvm+34HZjZdVbuXhD47MHrwzV9velkvX+eV+K9G28rFCXW75vm/DI5zFokdBS42ESA5
```

## Decriptando mensagem:

```
../aes-encrypting-decrypting$ node decrypt.js
prompt: Mensagem encriptada:
```

Copie e cole o resultado de **Mensagem ecriptada:**.

```
prompt: Frase secreta:
```

Digite a frase secreta utilizada para encriptar.

```
Mensagem decriptada: Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Delegadis gente finis, bibendum egestas augue arcu ut est.
```
