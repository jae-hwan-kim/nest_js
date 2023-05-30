# Model 정의하기

게시물에 필요한 데이터가 어떤 것이 필요한지 정의해주기 위해서 게시물 모델을 만들자.

---

## 어떻게 정의하는가?

Class 또는 Interface 를 이용하면 된다.

* Interface
    * 변수의 타입만을 체크한다. <br>
      
    1. 다음과 같이 선언한다.

    ```ts
        export interface Board {
            id: string;
            title: string;
            description: string;
            status: BoardStatus; // 게시물이 공개 or 비공개인지 나눠주는 값
        }
        
        export enum BoardStatus {
            PUBLIC = 'PUBLIC',
            PRIVATE = 'PRIVATE'
        }
    ```

    2. 다음과 같이 사용한다. <br>
        `: Board[]` 를 사용해서 타입을 정의해준다. 이를 통해 잘못된 타입이 넘어올 경우 에러를 반환하게 할 수 있고, 가독성이 좋아진다.
    ```ts
        getAllBoard(): Board[] {
            return this.boardsService.getAllBoards();
        }
    ```
    ```ts
        private boards: Board[] = [];

        getAllBoards(): Board[] {
            return this.boards;
        }
    ```

* Classes
    * 변수의 타입도 체크하고 인스턴스 또한 생성할 수가 있다.