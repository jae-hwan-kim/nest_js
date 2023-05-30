# Configuration 이란?

## 설정 파일?

runtime 도중에 바뀌지 않고, 애플리케이션이 시작할 때 로드되어 값을 정의하는 파일이다.

여러가지 형식이 있는데, XML, JSON, YAML, Environmant Variables 등이 있다.

<br>

---

## Codebase VS Environment Variables

XML, JSON, YAML 같은 경우는 Codebase 에 해당한다. 그렇다면 환경 변수는 뭘까?

설정 파일을 이 둘로 나누는 이유는 보안과 관련있다. 비밀번호와 API Key 같은 것들은 남들에게 노출되면 안되기 때문에 환경 변수를 이용해서 처리해준다.

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/76a72a3b-aada-41fd-bcae-170ca433e313" width="80%">

<br>

---

## 설정을 위해 필요한 모듈

```sh
npm install config --save
```

<br>

---

## Config 모듈을 이용한 설정 파일 생성

1. 루트 디렉토리에 config 라는 폴더를 만든 후에 그 폴더 안에 JSON 이나 YAML 형식의 파일을 생성. `config/default.yaml`

2. config 폴더 안에 `default.yml`, `development.yml`, `production.yml` 파일 생성

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/4cd075cd-c791-44cd-a521-5e4c54969b18" width="80%">

<br>

---

## 코드에 config 설정 대입하기

```ts
import * as config from 'config';
```