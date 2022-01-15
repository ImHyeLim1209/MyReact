// props의 종류를 확인하는 함수들...
const isListener = (name) => name.startWith('on'); // event?
const isAttribute = (name) => !isListener(name) && name !== 'childeren'; // attribute?

export function render(element, parentDom) {
  const { type, props } = element;
  const dom = documetn.createElement(type);

  // event ex. onClick
  Object.keys(props)
    .filter(isListener)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, props[name]);
    });

  // Attribute
  Object.keys(props)
    .filter(isAttribute)
    .forEach((name) => {
      dom[name] = props[name];
    });

  const childElements = props.children || [];

  childElements.forEach((childElement) => render(childElement, dom));
  parentDom.appendChild(dom);
}
