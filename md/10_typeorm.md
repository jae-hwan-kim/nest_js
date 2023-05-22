# TypeORM (Object Relational Mapping)

## TypeORM 이란?

TypeORM 은 node.js 에서 실행되고 TypeScript 로 작성된 객체 관계형 매퍼 라이브러리입니다.

TypeORM 은 MySQL, PostgresSQL, MariaDB 등 여러 데이터베이스를 지원한다.

<br>

---

## ORM (Object Relational Mapping) 이란?

객체와 관계형 데이터베이스의 데이터를 자동으로 변형 및 연결하는 작업이다.

ORM 을 이용한 개발은 객체와 데이터베이스의 변형에 유연하게 사용할 수 있다.

<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/ca8fb835-3c7f-43b1-a429-1670f0679119"  width="100%">

<br>

---

## TypeORM 특징과 이점

* 모델을 기반으로 데이터베이스 테이블 체계를 자동으로 생성한다.
* 데이터베이스에서 개체를 쉽게 삽입 업데이트 및 삭제할 수 있다.
* 테이블 간의 매핑 (일대일, 일대 다 및 다 대다)을 만든다.
* 간단한 CLI 명령을 제공한다.
* TypeORM 은 간단한 코딩으로 ORM 프레임 워크를 사용하기 쉽습니다.
* TypeORM 은 다른 모듈과 쉽게 통합된다.

<br>

---

## TypeORM 을 사용하기 위해 설치해야하는 모듈

* `@nestjs/typeorm`
- NestJS 에서 TypeOrm 을 사용하기 위해 연동시켜주는 모듈

* typeorm
- TypeORM 모듈

* pg
- Postgres 모듈

`npm install pg typeorm @nestjs/typeorm --save`

[↘︎ 참고사이트: NestJS database](https://docs.nestjs.com/techniques/database)