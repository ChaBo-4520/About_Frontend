# Web Trends

## Web의 역사

#### 1. Static Sites

- 서버에 각각의 HTML문서들을 보관하다가 Client에서 페이지를 요청하면 해당하는 HTML문서를 보내준다. 페이지 이동시 새로운 페이지를 받아와 업데이트 해야한다.

#### 2. iframe

- \<iframe\>태그가 도입됨으로서 HTML전체를 받아오는 것이 아니라 부분적으로 HTML을 받아와 업데이트 할 수 있게 되었다.
- 현재까지도 가끔 사용됨.

#### 3. XMLHttpRequest

- fetch API의 원조인 API. 문서전체를 받아오는 것이 아니라 JSON형식으로 서버에서 필요한 Data만 가볍게 받아올 수 있음. 그 Data를 Javascript를 이용해서 동적으로 HTML요소를 생성해서 페이지를 업데이트 하는 방식

#### 4. SPA

- XMLHttpRequest을 공식적인 AJAX라는 기술로 완성이 되어지고 이를 이용해 구현한 것이 SPA(Single Page Application)이다.
- 사용자가 한 페이지에서 필요한 데이터를 받아오면서 필요한 부분을 업데이트하는 것.
- Angular, React, Vue와 같은 프레임워크들이 등장.

- **CSR**
  - 이를 통해 CSR시대로 접어들게 된다.
  - Client Side Rendering
    - 처음에 서버에서 빈 HTML을 보내준다.
    -  HTML에 Link된 Javascript를 서버에 요청해 받게되면 해당 Javascript에는 application에서 필요한 로직뿐만 아니라, application을 구동하는 프레임워크나 라이브러리의 소스코드들도 포함되어져 있다. 따라서 초기 다운받는데 시간이 오래걸린다.
    - 추가로 필요한 Data는 서버에 요청하여 JSON형태로 받아와, 동적으로 HTML을 생성해 사용자에게 보여주게 된다.
  - **장점**
    - 사용자가 첫 화면을 보기까지 시간이 오래걸릴 수 있다.
    - Low SEO(Search Engine Optimization)
      - 다양한 검색 엔진(Google, Naver등)에서 등록된 HTML을 분석해 어떤 사이트인지 판단하여 검색될 수 있도록 하는데, SPA는 빈 HTML으로 시작하기 때문에 분석이 힘들다.
- **SSR**
  - CSR의 문제점을 해결할 방안으로 과거 Static Site에서 영감을 얻은 Server Side Rendering이 대두된다.
  - Server Side Rendering
    - Client에서 서버에 HTML을 요청하면 Server에서 필요한 HTML문서와 Data들을 가져와 HTML문서를 만들어 동적으로 제어할 수 있는 소스코드와 함께 보내준다.
  - 장점
    - CSR을 사용했을 때 보다 초기 페이지 로딩이 빨라진다.
    - 초기 HTML에 대부분의 정보들이 담겨져 들어오므로 효율적인 SEO가 가능하다.
  - 단점
    - Blinking issue
      - Static site와 같이 페이지마다 HTML문서를 서버로부터 받아오기 때문에 페이지가 새로고침되는 느낌을 받는다(UX저하)
    - Server side overhead
      - Client의 요청이 많아지면 Server에 과부하가 걸리기 쉽다.
    - 초기 페이지 로딩을 빨라졌지만 Javascript를 받아오는시간은 여전히 느리기 때문에 Interaction이 불가능할 수 있다.

- ***TTV & TTI***
  - Time To View & Time To Interact
  - CSR의 동작
    - CSR은 HTML을 요청하면 빈 페이지를 받아온다.
    - 해당 페이지를 동적으로 제어할 수 있는 Javascript를 받아온다.
    - 동적으로 HTML을 생성할 수 있는 WebApplication Logi이 담긴 javascript를 받아온다.
    - 이때 부터, 사용자는 페이지를 볼 수 있다.
    - 사용자가 페이지를 볼 수 있는 시점에는 Javascript가 도착해 있기 때문에, TTV와 TTI가 일치한다.
  - SSR의 동작
    - SSR은 HTML을 요청하면 Server에서 만들어진 HTML을 보내주어 사용자가 확인 할 수 있다.
    - 동적으로 제어할 수 있는 Javascript를 받아온다.
    - 따라서 사용자가 페이지를 볼 수 있는 시점에 페이지를 제어할 수 없을 수가 있다.
    - SSR에서는 TTV와 TTI사이에 공백기간이 존재할 수 있다.
  - 따라서 Web Site의 성능을 분석할 때, TTV와 TTI도 중요한 기준이 된다.
    - CSR
      - 전달되는 HTML을 분할해서 사용자가 필수적으로 봐야하는 부분부터 차례대로 보내줄 수 있는 방법을 고민한다.
    - SSR
      - TTI가 최대한 빨리 가능하게 하는 방법을 고민한다.
- **SSR, CSR개선 방법**
  - SSG
    - Static Site Generation
    - React는 CSR에 특화된 라이브러리 이지만 Gatsby라는 라이브러리와 함께 사용하면, React로 만든 페이지를 정적으로 미리 생성해 서버에 저장해 둘 수 있다. 만약 동적으로 사용해야할 페이지라면 JS와 함께 보내주어 컨트롤이 가능하다.
  - React + Next.js
    - Next.js는 SSR을 지원하는 라이브러리 였으나, 최근 Static generation도 지원가능하고 CSR과 SSR을 섞어서 유연하게 사용할 수 있도록 지원해 준다.

## 결론

정답은 없다. 내가 개발할 사이트가 정적인지 동적인지 판단하고, 서버에서 동적으로 데이터를 받아와야하는지에 따라 방법을 결정한다. 또한  사용자가 많은지, 얼마나 자주 요청이 들어오는지도 고민한다. 이를 통해 TTI, TTV를 고려해 섞어가면서 개발해야한다.









