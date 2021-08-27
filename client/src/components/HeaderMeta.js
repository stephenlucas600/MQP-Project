//Header Meta info

// taken in an array of headers and convert them into a array of meta header objects
export default function metaMaker(headers) {
  return headers.map(head => metaObject(head));
}

function metaObject(metaKey) {
  //let mt = metaText(metakey);
  let mt = textConversion(metaKey);
  return {
    key: metaKey,
    text: mt,
    sort: true,
  }
}

function textConversion(metaKey) {
  return metaKey.replace('_', ' ');
}