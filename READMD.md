# React-Native

## 목차

> 1. 요구 프로그램
>
>    - Homebrew
>    - afds

## 요구 프로그램

1. Homebrew

1. nodejs (more 12) & npm (more 6)

1. expo

1. Xcode (for simulator)

1. android studio

1. watchman

### Homebrew

Homebrew는 맥(macOS)에서 필요한 패키지를 설치하고 관리해주는 패키지 관리자이다.  
Homebrew를 사용하면 맥에서 간단히 패키지를 설치할 수 있다.

#### 설치방법

아래의 명령어를 터미널에 복사 붙여넣기 하면 된다.

    /bin/bash -c "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

설치 후에 아래의 명령어를 통해 설치가 되었는지 확인한다.

    brew --version

설치가 되었으면 버전이 나온다.

    Homebrew 2.2.16
    Homebrew/homebrew-core (git revision 78552a; last commit 2020-05-14)

### NodeJS & NPM

설치방법
아래의 명령어를 터미널에 복사 붙여넣기 하면 된다.
현재 날짜 20년 05월 21일 기준으로 nodejs 14.3이 최신버전 이지만 12.16버전이 LTS버전이므로 12.16버전을 설치해 주었다.

    brew install node@12

설치 후 아래 명령어를 통해 설치가 되었는지 확인한다.

    node --version

설치가 되었으면 버전이 나온다.

    v12.16.3

NodeJS를 설치하면 NPM(Node Package Manager)도 같이 설치 되므로 NPM도 설치가 되었는지 아래의 명령어로 확인한다.

    npm --version

설치가 되었으면 버전이 나온다.

    6.14.4

### Expo-Cli

Expo는 React Native로 하는 개발을 쉽게 할 수 있게 해주는 툴이다.
RN을 위한 설정이 미리 구성되어 있으며 native 파일들을 개발자에게서 숨겨놓고 알아서 관리해준다.

#### 장점

- React Native를 위한 설정이 미리 구성되어 있어 개발 시작하기가 편하다.
- 배포 후 업데이트 버전은 Expo에 publish만 해주면 알아서 업데이트 해준다.

#### 단점

- Expo에서 제공하는 API만 사용이 가능하다.
- native 파일들을 많이 제어할 수 없다.

#### 설치방법

아래의 명령어를 터미널에 입력해 설치한다.

    npm install -g expo-cli

#### 실행방법

    expo init 'Project Name'
    cd 'Project Name'
    expo start
