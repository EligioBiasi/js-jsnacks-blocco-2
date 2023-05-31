const stringContainer = ['pippo','pluto','paperino','topolino',];

for (let i = 0; i < stringContainer.length; i++) {
    stringContainer[i] = stringContainer[i].charAt(0).toUpperCase() + stringContainer[i].slice(1);
    console.log(stringContainer[i])
}
