const process = require('process');
const { Client, resources } = require('coinbase-commerce-node');

Client.init(process.env.COINBASE_COMMERCE_API_KEY);

const { Charge } = resources;

let projectName = 'Project CETI';
let projectDescription = `Suntem o inițiativă nonprofit, științifică și interdisciplinară de conservare.

CETI este un proiect de ascultare care folosește inteligența artificială și robotica pentru a înțelege ce spun balenele.

Prima fază este construirea unui set unic de date acustice și comportamentale la scară largă pentru a antrena tehnologia CETI pentru a observa comunicarea balenelor în mediul lor și pentru a traduce sunetul balenelor.

De ce contează asta?
Ascultăm și traducem modul în care alte specii comunică - începând cu balena. Misiunea noastră este simplă.
1. Obținem progrese și descoperiri în comunicarea între specii
2. Transformăm înțelegerea umană și conectivitatea
3. Împărtășim lumii cele învățate

Pentru prima dată în istorie, progresele tehnologiei au făcut posibilă înțelegerea comunicării animalelor. Imaginează-ți ce s-ar întâmpla dacă am putea înțelege ce spun alte animale? Ce ar spune? Ce am putea învăța?`

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Metoda nepermisă' };
  }

  try {
    const { amount, currency } = JSON.parse(event.body);

    const chargeData = {
      name: projectName,
      description: projectDescription,
      local_price: { amount, currency },
      pricing_type: 'fixed_price'
    };

    const charge = await Charge.create(chargeData);
    return {
      statusCode: 200,
      body: JSON.stringify(charge),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Eroare la procesarea donației' }),
    };
  }
};
