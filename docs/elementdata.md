# DOM example

```
<div id="container">
  <input value="foo" type="text">
  <a href="/bar"></a>
  <span></span>
</div>
```

이렇게 생긴 DOM을 데이터로 표현하면 다음와 같다.

```
const element = {
    type: "div",
    props: {
      id: "container",
      children: [
        { type: "input", props: { value: "foo", type: "text" } },
        { type: "a", props: { href: "/bar" } },
        { type: "span", props: {} }
      ]
    }
  };
```

이런 식의 트리구조로 표현함, 크게 type, props, children이라는 속성을 지니게한다.
이들은 render()에서 각 element의 특징을 파악하는데 사용된다.

```
const textElement = {
  type: "span",
  props: {
    children: [
      {
        type: "TEXT ELEMENT",
        props: { nodeValue: "Foo" }
      }
    ]
  }
};
```

텍스트 노드 구조는 이렇게 표시할 것이다.

```
const reactElement = {
  type: "span",
  props: {
    children: ["Foo"]
  }
};
```

React에서 텍스트 노드는 위 같이 생겼다.
