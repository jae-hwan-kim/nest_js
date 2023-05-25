# Log?

## 로그의 종류

* Log
    * 중요한 정보의 범용 로깅

* Warning
    * 처리되지 않은 문제. 치명적이지 않음.

* Error
    * 처리되지 않은 문제. 치명적임.

* Debug
    * 오류 발생시 로직을 디버그하는데 도움이 되는 로깅

* Verbose
    * 응용 프로그램의 동작에 대한 통찰력을 제공하는 로깅

<br>

---

## 로그 레벨

환경에 따라서 로그의 레벨을 정의해서 넣어줄 수 있다.

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/bf4288a9-df71-4dd1-b3ce-f71bef105662" width="80%">

<br>

---

## NestJS 에서 로그 처리하기

built-in 된 logger 클래스가 있다. 이를 이용해서 로그를 남겨보자.