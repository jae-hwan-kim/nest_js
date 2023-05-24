# JWT??

JSON Web Token 은 당사자간에 정보를 JSON 객체로 안전하게 전송하기 위한 컴팩트하고 독립적인 방식을 정의하는 개방형 표준 (RFC 7519) 이다. 이 정보는 디저털 서명이되어 있으므로 확인하고 신뢰할 수 있다.

즉, 정보를 안전하게 전할 때 혹은 유저의 권한 같은 것을 체크하기 위해서 사용할 때 유용하다.

<br>

---

## JWT 구조

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/d8ca1bbc-3e2a-4224-bcee-b5b4d6577ad6" width="80%">

아래 사이트에 참고하면 자세히 알아볼 수 있다.
[☝🏻 JWT 사이트](https://jwt.io/)

<br>

---

## JWT 흐름

1. 로그인할 때 (토큰 보관)

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/2366deda-fbfa-4b2d-9898-7e595881bca8" width="80%">

2. Admin 유저가 Admin 만 볼 수 있는 글에 대한 열람을 요청할 때 (토큰 비교)

* 요청을 보낼 때 보관하고 있던 토큰을 Header 에 넣어서 같이 보냄 (Header + Payload + 서버의 Secret Text)

* 서버에서는 JWT 를 이용해서 Token 을 다시 생성한 후 두개를 비교

* 일치하면 Admin 유저가 원하는 글을 볼 수 있음

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/fd20b9c8-4659-4925-b3f2-83c8d470a32c" width="80%">