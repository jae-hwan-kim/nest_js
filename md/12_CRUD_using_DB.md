# DB 를 사용한 CRUD

## 신경써야할 부분

* Service 와 Controller 파일에서 로직들을 다 수정해야하기 때문에 원래 있던 부분을 주석 처리한다.

* 메모리에 데이터를 저장하지 않기 때문에 Service 에 board 배열을 지운다.

* 게시물 데이터를 정의하는데 Entity를 이용하기 때문에 Board Model 파일에 있는 Board Interface 는 지워준다.

* Status Enum 은 아직 필요하기 때문에 이 부분만을 위한 파일을 생성한다.
    * board.model.ts 파일을 지우고 board-status.enums.ts 생성

* 데이터 베이스 이용으로 인한 불필요한 경로 지우기
    * board-status-validation.pipe.ts BoardStatus
    * boards.controller.ts
    * board.entity.ts BoardStatus
    * uuid