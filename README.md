# tdd_study

테스트주도개발(TDD)로 만드는 nodejs api 서버

## 목표

- 노드로 API 서버를 만들 수 있다!
- 테스트 주도 개발을 익힐 수 있다!

## nodejs 기초

### 특징

- 브라우저 밖에서 자바스크립트 코드를 실행할 수 있다
- 크롬에서 사용하는 V8 엔진을 사용한다
- 이벤트 기반의 비동기 I/O 프레임워크다
  - https://jeonghwan-kim.github.io/node/2017/01/27/node-io-deep.html
  - 이벤트 기반의: 클라이언트가 보낸 요청을 이벤트 루프가 처리한다.
  - 비동기 I/O 프레임워크: 무거운 작업(파일 관련 처리 등)은 Non-blocking Worker thread에게 전달해서 비동기로 처리한다.
- 모듈 시스템이 있다
  - 노드는 파일형태로 모듈을 관리할 수 있는 CommonJS로 구현되어 있다.
