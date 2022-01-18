const TEXT_ELEMENT = 'TEXT ELEMENT';

// JSX를 지원하기 위한 것.
// React.createElement : https://ko.reactjs.org/docs/react-without-jsx.html
// args : children
function createElement(type, config, ...args) {
  const props = Object.assign({}, config);
  const hasChildren = args.length > 0;

  // text 요소 고려하지 않은 구현
  // props.children = hasChildren ? [].concat(...args) : [];

  // text 요소 고려
  // element면 그대로 두고, 그렇지 않으면 textelement로 만든다.
  const rawChildren = hasChildren ? [].concat(...args) : [];
  props.children = rawChildren
    .filter((c) => c != null && c !== false)
    .map((c) => (c instanceof Object ? c : createTextElement(c)));

  return { type, props };
}

function createTextElement(value) {
  return createElement(TEXT_ELEMENT, { nodeValue: value });
}
