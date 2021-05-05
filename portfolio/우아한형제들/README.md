# BEM:

- 프로젝트를 모듈하고 포스트 css 이용하면 bem은 필요 없다.
- block element modifier
- block**element => block 안에 있는 element란 뜻<br/>
  ex) card**title
- block--modifier => block의 색 등<br/>
  ex) card--blue
- 만약 `card--blue`가 그 컴포넌트에만 있는 것이 아니라 공통적인 사항이라면 `button--blue`, 이런식으로 블럭으로 정해 작성하는게 좋다.

# bg img

- img 대신 div 사용
- css에

```
background-image: url('주소');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
```

# postion

- relative:
- absolute
- sticky
- fixed

# 변수

- 규칙. css 어디서나 선언할 수 있다.
- `--@@-@: value`: 정의
- `var(--@@-@)`: 사용
- 자식요소는 변수사용 가능. 하지만 보통 지역적으로 변수 사용하지 않음. 보통 최고 부모인 `:root{}`안에 정의한다.
- 미디어 쿼리를 이용할 때 특히 유용하다. 모바일 사이즈 이용할 때 쉽게 세부적으로 컨트롤 가능

# `calc()`: 수학계산 해주는 함수

- ex- `calc(var--@@-@) * 2)`

# data attribute

- `data-*`: 퍼스널 데이터를 입력하고 싶을 때.
- data 값은 브라우저에서 전부 확인할 수 있기 때문에 사용자에게 민감한 데이터(보안에 조심해야하는 정보)는 data 안에 넣는 것이 아니라 잘 암호화해서 JS에 넣는 거싱 좋다.
- html에서 기본으로 제공하는 속성은 아니지만 원하는 데이터를 넣은 데이터 속성이 된다.
- css에서도 적용된다. => ex) `[data-* = @@] {}`
- JS에서도 적용된다.

```javascript
const dream = document.queryselector('[data-* = "@@"]');
console.log(dream.dataset);
```

# button

```
background-color: transparent;
cursor: pointer;
border: none;
outline: none;
```
