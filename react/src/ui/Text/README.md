# Text

Component that displays plain text

## Usage

```js
import Text from "ui/text";
```

```jsx
<Text title="Some title">Some text</Text>
```

### If you need to override styles add forwardedAs instead of as

```js
const StyledText = styled(Text)`
  &:hover {
    border-bottom: 1px dotted;
  }
`;
```

```jsx
<StyledText title="Some title">Some text</StyledText>
```

### Properties

| Props             |            Type             | Required | Values |  Default  | Description                            |
| ----------------- | :-------------------------: | :------: | :----: | :-------: | -------------------------------------- |
| `backgroundColor` |          `string`           |    -     |   -    |     -     | Sets background color                  |
| `color`           |          `string`           |    -     |   -    | `#333333` | Specifies the text color               |
| `display`         |          `string`           |    -     |   -    |     -     | Sets the 'display' property            |
| `fontSize`        |          `string`           |    -     |   -    |  `13px`   | Sets the font size                     |
| `fontWeight`      | `oneOfType(number, string)` |    -     |   -    |   `400`   | Used as CSS `fontWeight` property      |
| `lineHeight`      |          `string`           |    -     |   -    |  `20px`   | Used as CSS `lineHeight` property      |
| `isBold`          |           `bool`            |    -     |   -    |  `false`  | Set CSS `fontWeight` property as 600   |
| `isItalic`        |           `bool`            |    -     |   -    |  `false`  | Set CSS `fontStyle` property as italic |
| `title`           |          `string`           |    -     |   -    |     -     | Title                                  |
| `truncate`        |           `bool`            |    -     |   -    |  `false`  | Disables word wrapping                 |
| `noSelect`        |           `bool`            |    -     |   -    |  `false`  | Disable user select                    |
| `id`              |          `string`           |    -     |   -    |     -     | Used as HTML `id` property             |
| `className`       |          `string`           |    -     |   -    | `#333333` | Used as HTML `className` property      |
| `style`           | `oneOfType(object, array)`  |    -     |   -    |     -     | Used as HTML `style` property          |
