cowabunga-ideais-062014
=======================


* https://github.com/yeoman/yo
* https://github.com/yeoman/generator-angular
* http://phonegap.com/
* http://docs.phonegap.com/en/3.5.0/index.html
* https://build.phonegap.com/plugins
* http://ionicframework.com/
* http://onsenui.io/
* https://parse.com/
* http://jtrussell.github.io/angular-snap.js/
* https://github.com/cgross/angular-busy
* https://developers.facebook.com/docs/javascript


* Gerar chave no android: `keytool -genkey -v -keystore <nomeRelease|debug>.keystore -alias <alias> -keyalg RSA -keysize 2048 -validity 10000`
* Gerar hash da chave: `keytool -exportcert -alias <alias> -keystore ~/caminho/do/arquivo/<nomeRelease|debug>.keystore | openssl sha1 -binary | openssl base64`


* Renomear $1.apk para $1.zip
 * Abrir o zip e remover a pasta META-INF
 * Voltar a extensao para .apk
 * executar: `jarsigner -verbose -keystore <nomeRelease|debug>.keystore $1.apk <alias>`

