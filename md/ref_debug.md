# 에러 발생 시 참고사항

## No metadata????

### 문제 상황

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/d6e8079d-d99c-4341-bf90-704c73866cbc" width="80%">

### 원인
configs 디렉토리의 위치가 잘못됐었다. 모듈 디렉토리 안에 있으면 안되고, 모듈 디렉토리와 동등한 레벨에 있어야한다.
<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/7704600e-f289-4c13-8bfa-1dadacfbc9f7" width="80%">

### 해결
configs 디렉토리를 옮겨준 후 해결했다.
<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/cb88a5bb-7350-46e1-be95-8f5aecc6b338"  width="80%">