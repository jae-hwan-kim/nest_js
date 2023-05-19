# Providers 와 Service

## Providers?

nest 의 기본 개념이다. 대부분의 기본 nest 클래스는 서비스, 리포지토리, 팩토리, 헬퍼 등으로 프로바이더로 취급된다.

<br>

### Providers 는 왜 필요한가??

컨트롤러에서 많은 걸 필요로 한다. 이때 컨트롤러 내부에 다 넣을 수 없다. 이떄 외부에 객체를 만들어서 넣어주는데 이 객체를 Providers 라고 한다. Providers 의 주요 아이디어는 종속성을 주입할 수 있다는 것이다.

### Providers 등록하기

Provider 를 사용하기 위해서 nest 에 등록해야한다. module 파일에서 등록할 수 있다.

```ts
// BoardsService 를 등록한다고 하면, 다음과 같이 하게 된다.
@Module({
  controllers: [BoardsController],
  providers: [BoardsService]
})
```

<br>

---

## Service?

서비스는 컨트롤러에서 데이터의 유효성을 체크하거나 데이터베이트에 아이템을 생성하는 등의 작업하는 부분을 처리한다. `@Injectable` 데코레이터로 감싸져서 모듈에 제공된다. 

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/61872d13-d2e4-42a7-b997-2f48f324c8e0" width="70%">

<br>

### Service 만들기 

```sh
nest g service boards --no-spec
```


### 어떻게 Controller 에서 사용할 수 있는가? ( Dependency Injection )

다음 방식으로 종속성을 주입해야한다.

```ts
@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}
}
```

그런데 위 방식은 많은 단계가 생략됐다. 아래는 private 을 사용하지 않기 때문에 직접 내부에서 전부 지시해야한다.

1.
 
```ts
@Controller('boards')
export class BoardsController {
    boardsService: boardsService; // 지우면 에러가 생긴다

    constructor(boardsService: BoardsService) {
        this.boardsService = boardsService
    }
}
```

```ts
@Controller('boards')
export class BoardsController {
    construtor(private boardsService: boardsService) {};

}
```