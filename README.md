# Gophercon Korea Websites

위 프로젝트는 각 연도별 `gophercon korea website` 를 효율적으로 관리하기 위한 모노레포입니다.

## 시작하기

1. 루트 디렉토리에서 `yarn`

2. 원하는 연도의 프로젝트를 실행
   - ex) `yarn web23 dev` : 23년도 프로젝트를 dev 모드로 실행
   - ex) `yarn web24 start` : 24년도 프로젝트를 production 모드로 실행

## 폴더 구조

```
.husky
apps       
│  ├── gophercon-korea-web-23
│  └── gophercon-korea-web-24
node_modules
packages
│  └── gophercon-common
│      ├── src   
│      │   ├── style
│      │   └── ui
│      ├── index.ts
│      └── package.json
.eslintrc.json
.gitignore
.prettierrc
package.json
tsconfig.json
yarn.lock
```

- packages의 경우 gopeher-common의 src내 style과 ui 관련 컴포넌트를 apps 내부에서 사용하기 위해 의존성 첨부함
- 외부적으로 통일할 필요가 있는 설정인 경우 루트 디렉토리에 함께 설정함
