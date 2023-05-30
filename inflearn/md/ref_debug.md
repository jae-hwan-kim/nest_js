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

<br>

---

## 에러 상태 번호와 메시지를 바꾸고 싶어!!

### 상황

500 에러가 아닌 상황인데 500 이 발생할 수 있다. 이는 에러 발생 시 try catch 문에서 잡지 않기 때문에 발생할 수 있다. 그렇기 때문에 try catch 를 이용해서 바꿔줄 수 있다.

아래는 유저를 생성하는 코드이다.

```ts
...
const user = this.create({ username, password });
await this.save(user);
...
```

DB 에 이미 있는 아이디로 생성 요청이 들어오면 다음과 같이 500 에러에 internal server error 를 출력한다.

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/6250f164-ca8a-44a3-8292-942011b63745" width="80%">

### 해결

1. try catch 를 사용 후 console.log 로 어떤 데이터가 에러로 넘어오는지 확인한다.

```ts
const user = this.create({ username, password });
try {
  await this.save(user);
} catch (error) {
  console.log('error', error);
}
```

잘 찾아보며 에러 코드가 보인다.

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/d5e38d5c-5dae-483e-8e10-6941ff5925d8" width="80%">

2. 에러 코드를 활용해서 다음과 같이 처리한다.

```ts
const user = this.create({ username, password });
try {
  await this.save(user);
} catch (error) {
  if (error.code === '23505') {
    throw new ConflictException('Existing username');
  } else {
    throw new InternalServerErrorException();
  }
  // console.log('error', error);
}
```

3. 해결 완료!
<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/2e2ad832-69f1-4673-93fb-9097e169a7a3" width="80%">

