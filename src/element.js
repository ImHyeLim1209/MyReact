const TEXT_ELEMENT = 'TEXT ELEMENT';

// JSX를 지원하기 위한 것.
// React.createElement : https://ko.reactjs.org/docs/react-without-jsx.html
// args : children
export function createElement(type, config, ...args) {
  const props = Object.assign({}, config);
  const hasChildren = args.length > 0;
  props.children = hasChildren ? [].concat(...args) : [];
  return { type, props };
}
