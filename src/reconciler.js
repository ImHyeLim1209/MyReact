// props의 종류를 확인하는 함수들...
const isListener = (name) => name.startWith('on'); // event?
const isAttribute = (name) => !isListener(name) && name !== 'childeren'; // attribute?

export function render(element, parentDom) {
  const { type, props } = element;

  // create Dom Element : text와 그 외
  const isTextElement = type === 'TEXT ELEMENT';
  const dom = isTextElement
    ? document.createTextNode('')
    : document.createElement(type);

  // onClick 과 같은 이벤트 처리기 props 는 addEventListener로 처리
  Object.keys(props)
    .filter(isListener)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, props[name]);
    });

  // 그 외 요소들은 attribute로 처리
  Object.keys(props)
    .filter(isAttribute)
    .forEach((name) => {
      dom[name] = props[name];
    });

  // children이 있다면, 재귀적으로 생성하여 리턴,
  // children은 dom(자신)에 붙어서 최종 리턴된다.
  const childElements = props.children || [];
  childElements.forEach((childElement) => render(childElement, dom));

  // 부모 요소에게 dom(자신)을 붙인다.
  parentDom.appendChild(dom);
}
