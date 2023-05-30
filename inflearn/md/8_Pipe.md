# Pipe

## Pipe 란?

파이프는 @Injectable() 데코레이터로 주석이 달린 클래스이다.

파이프는 data transformation 과 data validation 을 위해 사용된다.

파이프는 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동한다.

Nest 는 메소드가 호출되기 직전에 파이프를 삽입하고 파이프는 메소드로 향하는 인수를 수신하고 이에 대해 작동한다.

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/711411f8-3d21-4e00-aed8-6f01e7d0a3bf" width="70%">

<br>

### Data Transformation ?

입력 데이터를 원하는 형식으로 변환 (문자열에서 정수로 변환)

EX) string '7' => Integer 7

<br>

### Data Validation ?

입력 데이터를 평가하고 유효한 경우 변경되지 않은 상태로 전달. 데이터가 올바르지 않을 때 예외 발생

EX) 이름의 길이가 10자 이하여야 하는데 10자 이상 되면 에러 발생

<br>

---

## 사용법

1. Handler-level Pipes
2. Parameter-level Pipes
3. Global-level Pipes

<br>

### Handler-level Pipes

@UsePipes() 데코레이터를 이용해서 사용할 수 있다.

```js
@Post()
@UsePipes(pipe)
createBoard(
    @Body('title') title,
    @Body('description') description
) {

}
```

<br>

### Parameter-level Pipes

틀정한 파라미터에게만 적용이 되는 파이프이다.

```js
@Post()
createBoard(
    @Body('title', ParameterPipe) title,
    @Body('description') description
) {

}
```

<br>

### Global-level Pipes

애플리케이션 레벨의 파이프이다. 클라이엍으에서 들어오는 모든 요청에 적용된다. `main.ts` 에 넣어주면 된다.

```js
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(GlobalPipes);
    awai app.listen(3000);
}
bootstrap();
```

---

## Built-in Pipes

Nest JS 에 기본적으로 사용할 수 있게 만들어 놓은 6가지의 파이프가 있다.

- ValidationPipe
- ParseIntPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- DefaultValuePipe

### 예시

```ts
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {
  return ;
}
```
<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/83b0e0e7-a957-440c-8d07-f23cc4974055" width="70%">

<br>

---

## 사용 방법

필요한 모듈이 있다.

1. class-validator
2. class-tranformer

`npm install class-validator class-transformer --save`

❗️ Validate 체크는 DTO 파일뿐만 아니라, Controller 파일에도 해줘야한다.