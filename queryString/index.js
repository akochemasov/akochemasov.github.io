const getQueryVariableValue = (queryVariable, searchString) => {
  // const splitString = searchString.split('?');
  // const subString = splitString[splitString.length - 1]
  // const searchParams = new URLSearchParams(subString);
  // return searchParams.get(queryVariable) || undefined

  const query = searchString.substring(1);
  const queryVariables = query.split('&');

  const queryPair = queryVariables.map(queryVariableItem => {
      const queryPair = queryVariableItem.split('=');

      if (decodeURIComponent(queryPair[0]) == queryVariable) {
          return queryPair;
      }
  })[0];

  return queryPair && decodeURIComponent(queryPair[1]);
}

console.log(getQueryVariableValue('actionId', 'https://www.test.com/#!/products/casino/promo?actionId=12597'), '12597');
console.log(getQueryVariableValue('actionId', 'https://www.test.com/?actionId=12597&cid=125974'), '12597');
console.log(getQueryVariableValue('actionId', 'https://www.test.com/?cid=133&actionId=12597'), '12597');
console.log(getQueryVariableValue('actionId', '?actionId=12597'), '12597');
console.log(getQueryVariableValue('actionId', 'actionId=12597'), '12597');
console.log(getQueryVariableValue('actionId', 'actionId=12597'), '12597');
console.log(getQueryVariableValue('actionId', 'actionid=12597'), 'undefined');
console.log(getQueryVariableValue('actionId', 'actionid=12597'), 'undefined');
console.log(getQueryVariableValue('actionId', 'actionId'), 'undefined');
