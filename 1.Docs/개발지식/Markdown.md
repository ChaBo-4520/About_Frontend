# Markdown

> plain-text formatting syntax 경량형 마크업 언어
>
> .md 확장자파일로 텍스트 에이터에서도 키보드하나로 쉽게 포맷하면서 빠르게 문서 작성이 가능하다. github의 Readme파일에서 많이 이용된다.
>
> PR(Pull Request)설명 작성등에 쓰인다.

## 기본 문법

### Heading

\#기호를 이용해 헤딩을 만들 수 있다.

\# Heading1

# Heading1

\#\# Heading2

## Heading2

****

### Paragraph

\-\-\- (3개)를 이용해 수평선을 만들 수 있다.

---

### Text attributes

\*\*텍스트*\*로 Bold체를 표현하고 \*텍스트\*로 Italic체를 표현한다.

\~\~텍스트\~\~로 취소선을 표현한다.

This is the **bold** text and this is the *italic* text and let's do ~~strikethrough~~

### 인용구(Quote)

\> 를 이용해 인용구로 만들 수 있다.

> 이것은 인용구 입니다.

### List

\* 또는 \- 로 list를 ul을 만들고, 1\. 로 ol을 만든다.

- 

1. 

### Link & Image

\[ 설명\]\(링크\)로 링크를 만들 수 있다.

[네이버](https://www.naver.com)

 \!\[설명\]\(이미지링크\) 로 이미지를 삽입한다.

![sample_img](../Pictures/sample_img.gif)

이미지 사이즈를 조정하고 싶다면 html의 img태그를 사용한다.

<img src="../Pictures/sample_img2.gif" style="height:20%; width:20%">

### Table

\|Header\|Description\|

|--\|--\|\(셀 가운데정렬 : \|:--:\|, 우측정렬 : \|--:\|)할 수 있다.

\|Cell1\|Cell2\|

형식으로 테이블을 만들 수 있다.

| Header | Description |
| :----: | :---------: |
| Cell1  |    Cell2    |

### Code Block

**inline**

\` (백틱)으로 감싸준다.

`이것은 인라인 코드 입니다.`

**Code Block**

\`(백틱)세번적고 코드 스타일을 지정하고 코드를 백틱 3번으로 감싸준다..

```js
```

### Task List

\- \[체크여부(X)\] 으로 체크목록을 만들 수 있다.

- [ ] 할 일

- [x] 한 일









