# API

> Application Programming Interface
>
>
> 즉, 내부의 구현 사항을 잘 숨겨두고, 외부에서 사용하는 사람이 필요한 것만 노출해둔것.

### Web API

- 다양한 기기에서 서버에 있는 Data를 읽고 쓰기 위해서는 Web APIs를 통해 처리할 수 있다. 
- 네트워크에서 기기들간에 의사소통 해나가는 규격사항을 HTTP라고 부른다.
- Web API를 어떻게 디자인해서 만들건지 정의하는 것으로 예전에는 SOAP를 사용했지만 요즘에는 REST를 사용한다.
  - REST(Representational State Transfer)
  - **구성**
    - Post(Create)
    - Get(Read)
    - Put(Update)
    - Delete(Delete)

### Frameworks/Libraries

- 프레임워크나 라이브러리에서 사용할 수 있는 클래스나 함수들을 API라고 부른다.
- 흔히 프로젝트 내부에서 쓰여지고 있는 클래스나 모듈을 import와 export로 사용할 수 있는데 이것들도 API이다.

#### Open API, Public API

- 회사 내부에서 사용하는 Web API를 외부의 다른 개발자가 사용할 수 있도록 공개적으로 오픈한 것.
- 많은 개발자들이 이를 이용해서 독창적인 Application을 개발한다.
- 회사측에서도 이득을 본다.(회사, 서비스 커뮤니티에 많은 기여를 함)

## 유용한 APIs

유용한 API가 있는 github : https://github.com/public-apis/public-apis

유용한 API 사이트 : https://public-apis.xyz/page/1

GIF를 이용한 APP개발 : https://developers.giphy.com/docs/sdk#grid

음식에 관한 정보 API : https://developer.edamam.com/

밈 생성기 : http://apimeme.com/?ref=apilist.fun

공공데이터 : https://www.data.go.kr/tcs/dss/selectDataSetList.do

카카오 API : https://developers.kakao.com/tool/rest-api/open/get/v2-user-me