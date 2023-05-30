# 여러가지 middle ware??

## middle ware??

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/9ed4d522-147d-45f5-93ee-de0b5bcaf5b9" width="80%">

### Pipes
    * 요청 유효성 검사 및 페이로드 변환을 위해 만들어진다. 데이터를 예상한대로 직렬화한다.

### Filters
    * 필터는 오류 처리 미들웨어이다. 특정 오류 처리기를 사용할 경로와 각 경로 주변의 복잡성을 관리하는 방법을 알 수 있다.

### Guards
    * 인증 미들웨어이다. 지정된 경로로 통과할 수 있는 사람과 허용되지 않은 사람을 서버에 알려준다.

### Interceptors
    * 인터셉터는 응답 매핑 및 캐시 관리와 함께 요청 로깅과 같은 전후 미들웨이다. 각 요청 전후에 이를 실행하는 기능은 유용하다.

<br>

---

## 미들웨어가 불러지는 순서

middleware -> guard -> interceptor (before) -> pipe -> controller -> service -> controller -> interceptor (after) -> filter (if applicable) -> client
