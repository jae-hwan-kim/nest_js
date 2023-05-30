# Custom Pipe

## 커스텀 파이프

먼저 Pipe Transform 이란 인터페이스를 새롭게 만들 커스텀 파이프에 구현줘야 한다.

이와 함께 Pipe 는 `transform()` 메서드를 필요로 한다. `transform()` 메서드는 Nest JS 가 인자를 처리하기 위해서 사용된다.

---

## transform() 메서드

이 메소드는 두개의 파라미터를 가진다.

* 첫번째 파라미터
    * 처리가된 인자의 값
* 두번째 파라미터
    * 인자에 대한 메타 데이터를 포함한 객체

transform() 메소드에서 Return 된 값은 Route 핸들러로 전해진다. 만약 예외(Exception)가 발생하면 클라이언트에 바로 전해진다.