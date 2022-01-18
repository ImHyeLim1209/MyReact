# createElement

```
const element = (
  <div id="container">
    <input value="foo" type="text" />
    <a href="/bar">bar</a>
    <span onClick={e => alert("Hi")}>click me</span>
  </div>
);
```

위와 같은 html을 createElement로 만들어보자.

```
const element = createElement(
  "div",
  { id: "container" },
  createElement("input", { value: "foo", type: "text" }),
  createElement(
    "a",
    { href: "/bar" },
    "bar"
  ),
  createElement(
    "span",
    { onClick: e => alert("Hi") },
    "click me"
  )
);
```

createElement(type, parameter, ...children) 으로 구성되므로, 위와 같이 코드를 작성할 수 있다.
