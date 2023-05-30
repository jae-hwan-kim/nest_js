# entity & repository

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

<br>

---

## Repository

리포지토리는 엔티티 개체와 함께 작동한다. 엔티티 개체 찾기, 삽입, 업데이트, 삭제 등을 처리한다.

아래 그림은 이전에 봤던 그림이다. 클라이언트의 요청이 들어오면 컨트롤러에서 서비스로 요청을 보내고 서비스는 요청을 처리하고 클라이언트에게 응답을 준다.

근데 아래를 보면 Repository 라는 개념이 추가됐다. 바로 `데이터 베이스`에 접근하는 것이다. 서비스에서 `데이터 베이스`에 접근해서 요청을 처리해야할 때 Repository 활용해서 처리한다.

Repository Pattern 이라고 부른다.
<img src="https://github.com/JaeHwan-s-WebServeClass/webserver-nginx/assets/85930183/c819faa6-3723-4788-b8b3-13bdc5118d2b" width="80%">

<br>

---

## Repository 생성하기

생성 시 Repository 클래스를 Extends 한다. (Fine, Insert, Delete 등 엔티티를 컨트롤 할 수 있다.)

```ts
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {

}
```

@EntityRepository() 는 사용자 정의 (CUSTOM) 저장소로 선언하는데 사용된다.