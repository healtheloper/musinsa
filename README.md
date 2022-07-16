# Musinsa

### Skils

#### 개발환경

- webpack + babel-loader
  - 파일 경로를 절대경로로 사용하는 것을 선호하는데, CRA 에서는 webpack 설정을 custom 하여 사용하기에 불편함이 있어 이전에 작성하여 사용하던 React-TS-boilerplate 를 활용하여 사용
- typescript
- airbnb eslint config

#### CSS

- styled-components
  - props 를 참조한 스타일을 편하게 사용한 컴포넌트를 만들기 위해 사용

#### 전역상태관리

- React Context API
  - 복잡한 전역상태 관리가 필요하지 않으므로 별도의 라이브러리 없이 React 에서 제공하는 Context API 로 해결할 수 있을 것이라 생각하여 선정

### 데모 페이지

- https://62d27fc74624d468d215404a--musinsa-clone.netlify.app/

### 로컬 실행 방법

`npm start`

- webpack-dev-server 을 통한 실행 스크립트
