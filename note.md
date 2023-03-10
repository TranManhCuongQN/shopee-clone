> Khi ta nhấn submit thì nó re render

### watch

- watch: là method nó sẽ lắng nghe cái input change nó sẽ re render lại component của chúng ta
  khi input change.
  `const  formValues = watch()`

- Khi watch ko truyền tham số gì cả thì mỗi lần input bất kỳ cái nào thì nó cũng re render. Nếu truyền `email` thôi `const email = watch('email')` thì mỗi lần input email thì nó mới re render và value nhận đc là email. Nếu mình input vào password thì nó ko re render.

- Việc sử dụng `watch` thì ta lắng nghe input nó change. Mỗi lần nó change component re render. Bây giờ nó cung cấp cho ta 1 method đó là `getValues` dùng mà ko làm component chúng ta re render.

### handleSubmit

- khi nhấn submit cái form của ta ko đúng thì function handleSubmit ko chạy. Thì có handleSubmit khi hover thì thấy nó nhận vào 2 cái 1 cái là onValid (là 1 callback nó chạy khi form nó đúng), onInvalid(nó chạy khi form ta ko đúng, cái này là 1 option thôi có cũng đc ko có cũng đc)

### useController

- nó giúp chúng ta rút ngắn lại đoạn code liên quan đến `controller` của của react-hook-form nhưng nó cũng có khuyết điểm liên quan đến `useController` là khi bạn dùng `useController` vào 1 component nào đấy ví dụ `InputNumber` thì cái `InputNumber` này nó chỉ dùng được vs react-hook-form thôi (có nghĩa sử dụng tray, dùng thuần react nó ko có đc). Trong một số trường hợp nhất đinhj chỉ dùng react-hook-form có thể dùng thằng này ngắn hơn một tý so với `Controller` này. (trong project này có 2 input là `Input` dùng cho mọi trường hợp và `InputV2` chỉ sử dụng được cho react-hook-form vì nó gắn liền với `control trong react-hook-form` thôi)

## Format lỗi

### Trong trường hợp lỗi 422 (thường do form) hoặc lỗi do truyền query / params bị sai

Ví dụ đăng ký email đã tồn tại

```json
{
  "message": "Lỗi",
  "data": {
    "email": "Email đã tồn tại"
  }
}
```

### Trong trường hợp lỗi còn lại

<!-- trường hợp data xử lý lỗi ko trả về cho ta message thì ta cần phải handle việc đó -->

```json
{
  "message": "Lỗi do abcxyz"
}
```

### Cách tính sao

Ví dụ: rating = 3.4

- 1 <= 3.4 => 100%
- 2 <= 3.4 => 100%
- 3 <= 3.4 => 100%
- 4 > 3.4 => 40% (4 - 3.4 < 1) (phần trăm này là số thập phân)
- 5 > 3.4 => 0% (5 - 3.4 > 1)

### Cách phân trang

Với range = 2 áp dụng cho khoảng cách đầu, cuối và xung quanh curent_page

[1] 2 3 ... 19 20
1 [2] 3 4 ... 19 20
1 2 [3] 4 5 ... 19 20
1 2 3 [4] 5 6 ... 19 20
1 2 3 4 [5] 6 7 ... 19 20

1 2 ... 4 5 [6] 7 8 ... 19 20
1 2 ... 5 6 [7] 8 9 ... 19 20
1 2 ... 6 7 [8] 9 10 ... 19 20

1 2 ... 13 14 [15] 16 17 ... 19 20
1 2 ... 14 15 [16] 17 18 ... 19 20
1 2 ... 15 16 [17] 18 19 ... 19 20
1 2 ... 16 17 [18] 19 20
1 2 ... 17 18 [19]

### Note

- dùng thẻ Link có ưu điểm khi hover vào ta thấy được url khi dùng thẻ link ta có thể click chuột `Open link new tab` và `Open link in new window`. Dùng thẻ button, div xử lý navigate thì nó ko có được behavior đấy

- handle với những component nó không nhận được cái `props` là `register`. Khi các làm việc với các component trong MUI, ANTD thì nó ko nhận `register props`. Sẻ sử dụng Contoller

- Khi sử dụng gọi `register` thì nó tự generate cái ref rồi. Còn khi sử dụng Controller thì cần phải truyền ref để handle việc focus.

- Có 1 cơ chế trong react-hook-form khi ta onChange 1 input nào đấy thì nó sẽ validate input đó thôi

- onClick thằng eslint nó bắt thẻ html của chúng ta nên là 1 thẻ có thể click

- `relative w-full pt-[100%]` kỹ thuật cho chiều rộng và chiều cao bằng nhau.

- dompurify: giúp loại bỏ đi javascript trong chuỗi string chống tấn công XSS

### Ghi chú code

Code xóa các ký tự đặc biệt trên bàn phím

```js
export const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')
```

Sữa lỗi Tailwindcss Extension không gợi ý class

Các bạn thêm đoạn code này vào settings.json của VS Code

```json
{
  //...
  "tailwindCSS.experimental.classRegex": ["[a-zA-Z]*class[a-zA-Z]*='([^']+)'"]
}
```

### TS

```ts
function Hexa<T extends string>(props: { name: T; lastname: T }) {
  return null
}
```

- khi bạn extends thì nó gợi ý cho bạn truyền vào chuỗi

```ts
function App() {
  return <Hexa name='hello' lastName='world' />
}
```

### TS

```ts
type Gen<TFunc> = {
  person: {
    getName: TFunc
  }
}
```

- muốn lastName sẽ có giá trị return function của getName
- ReturnType nó yêu cầu là 1 function nhưng mà `TFuc` khi khai báo chỗ generic type nó có thể là string, number (string, number truyền vào ReturnType ko được nên chỗ này phải `extends nó là 1 function return về string` )

```ts
function Hexa<TFunc extends () => string>(props: { person: Gen<TFunc>; lastName: ReturnType<TFunc> }) {
  return null
}
```

```ts
const handleName: () => 'World' = () => 'World'
```

```ts

```

- lastName mong muốn gợi ý là 'World' (giá trị return function getName)
- Cái kiểu propB nó được suy ra từ cái kiểu của propA

```ts
function App() {
  return <Hexa person={{ getName: handleName }} lastName='World' />
}
```
