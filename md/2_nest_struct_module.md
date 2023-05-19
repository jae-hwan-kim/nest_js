# nest.js 전체 흐름 & 모듈이란?

## 흐름

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/a2194662-eb25-4bb8-989b-664da4f965fb" width="80%">



---

## 모듈?
nest.js 에서 모듈이란 데코레이터('@') 로 주석이 달린 클래스를 말한다.

각 응용 프로그램은 하나 이상의 모듈이 있으며 모듈은 밀접하게 관련된 것들끼리 모아논다.

모듈은 기본적으로 싱글톤이므로, 여러 모듈은 공급자로부터 동일한 인스턴스를 공유할 수 있다.

### 모듈 생성하기

nest 는 CLI 로 모듈을 생성할 수 있다.

```nest
nest g module boards
<!--
nest        - CLI
g module    - generate module
boards      - name of module
-->
```