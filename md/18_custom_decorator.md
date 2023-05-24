# custom_decorator 만들기

## 왜 만들어야함??

UseGuards 를 통해 user 의 데이터를 가져왔다. 그래서 req.user 를 하면 user 에 대한 정보를 가져올 수 있다.

그런데 우리가 이 객체를 user 라는 파라미터로 바로 가져올 수 있을까?? 이때 custom decorator 를 만들면된다.

<br>

---

## 어떻게 만들어?

```ts
import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
```

<br>

---

## 어떻게 사용해?

```ts
@Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log('user', user);
  }
```
딱 유저만 가져온다... 홀리...
<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/b34991d1-a0f9-4f33-9eea-b1e6335595a5" width="80%">