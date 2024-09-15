// Importa schema da Uniswap e AJV
const { schema } = require('@uniswap/token-lists');
const Ajv = require('ajv');

// Abilita i formati standard di AJV, inclusi "date-time" e "uri"
const ajv = new Ajv({
  formats: {
    'date-time': true,
    'uri': true // Abilita il formato URI
  }
});

// Funzione per generare la tua Token List
function generateMyTokenList() {
  return {
    name: "TennisCoin Token List",
    logoURI: "https://github.com/tenniscoin/tenco/blob/main/tenniscoin.png",
    timestamp: new Date().toISOString(),
    tokens: [
      {
        chainId: 56,  // Binance Smart Chain
        address: "0x263F4d28F73Be9848BD6D2338dac3d37D07B9DcB",
        name: "TennisCoin",
        symbol: "TENCO",
        decimals: 18,
        logoURI: "https://github.com/tenniscoin/tenco/blob/main/tenniscoin.png"
      }
    ],
    version: {
      major: 1,
      minor: 0,
      patch: 0
    }
  };
}

// Funzione per validare la Token List
function validateMyTokenList(tokenList, schema) {
  const validate = ajv.compile(schema);  // Compila lo schema
  const valid = validate(tokenList);     // Valida la lista contro lo schema

  if (!valid) {
    console.error("Token List non valida:", validate.errors);
  } else {
    console.log("Token List valida!");
  }
}

// Genera la Token List
const myList = generateMyTokenList();

// Valida la Token List
validateMyTokenList(myList, schema);

// Stampa il risultato JSON della lista se valida
process.stdout.write(JSON.stringify(myList, null, 2));
