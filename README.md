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

# HTTP 상태코드

- 2XX: 자, 여기있어
- 200: 성공(success), GET, PUT
- 201: 작성됨(created), POST
- 204: 내용 없음 (No Conent), DELETE
- 4XX: 니가 문제임
- 400: 잘못된 요청 (Bad Request)
- 401: 권한 없음 (Unauthorized)
- 404: 찾을 수 없음 (Not found)
- 409: 충돌 (Conflict)
- 5XX: 내가 문제임
- 500: 서버 에러 (Interel server error)

# 테스트 주도 개발(TDD)

테스트 코드를 먼저 만드는 것, 개발 단계에서 시간이 오래걸리지만 유지보수 단계에서 좋다.

## Mocha

- 모카는 테스트 코드를 돌려주는 테스트 러너이다.
- 테스트 수트: 테스트 환경을 꾸며주는 역할(describe() 사용)
- 테스트 케이스: 실제 테스트 코드(it() 함수 사용)
- 단위 테스트에 사용(함수의 기능 테스트)

## Should

- 노드 assert말고 서트파티 라이브러리를 사용해라(공식 문서)
- 가독성이 높다.
- 단위 테스트에 사용(함수의 기능 테스트)

## SuperTest

- 통합 테스트에 사용(API의 기능 테스트)
- Express 통합 테스트용 라이브러리이다.
