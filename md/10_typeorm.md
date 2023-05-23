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

<br>

---

## Entity 생성하기

ORM 없이 데이터베이스 테이블을 생성할 때는 다음과 같다.

```ts
CREATE TABLE board (
    id          INTEGER AUTO_INCREMENT PRIMAY KEY,
    title       VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
)
```

하지만 TypeORM 을 사용할 때는 데이터베이스 테이블로 변환 되는 Class 이기 때문에 위처럼 하지 않고 클래스를 생성한 후 그 안에 컬름들을 정의해주면 된다.

```ts
@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus;
}
```

### 분석하기

1. 
```ts
@Entity()
export class Board
```
Entity () 데코레이터 클래스는 Board 클래스가 엔티티임을 나타내는데 사용된다. 아래 부분은 CREATE TABLE board 부분이다.


2. 
```ts
@PrimaryGeneratedColumn()
id:number;
```
PrimaryGeneratedColumn () 데코레이터 클래스는 id 열이 Board 엔터티의 기본 키 열임을 나타낸다.


3. 
```ts
@Column()
status: BoardStatus;
```
Column () 데코레이트 클래스는 Board 엔터티의 title, description 과 같은 다른 열 은 나타내는데 사용된다.