export const getQuotes = (count = 15) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) {
        throw 'Cannot fetch quotes, error';
      } else {
        return json;
      }
    });
};

