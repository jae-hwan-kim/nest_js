# Controller ??

아래 코드를 통해 boards 모듈을 만들었다. 이제 컨트롤러를 만들어보자!

```nest
nest g module boards
```

## Controller 란?
컨트롤러는 들어오는 요청을 처리하고 클라이언트에게 응답을 반환하는 모듈이다.

다음 코드로 생성할 수 있다.

```nest
nest g controller boards --no-spec

<!--
nest        - CLI
g           - generate
controller  - controller schematic
boards      - name of the schematic
--no-spec   - 테스트를 위한 소스 코드 생성 안함
-->
```

순서는 다음과 같다.
<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/491885fe-0a01-4ed1-953e-a14bbfade75f"  width="60%">