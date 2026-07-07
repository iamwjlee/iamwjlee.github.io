## 빌드 (Build profiles)

`makefile` 상단 주석으로 `CXXFLAGS`를 바꾸던 방식은 **이름 있는 프로파일 타깃**으로 대체되었다.  
이전 방식은 git 히스토리(2026-06-26 이전 커밋)에서 확인할 수 있다.

### 사전 준비

```bat
set SDL2_PATH=c:\wj\home\SDL2-2.0.7
cd D:\wj\Gnomeregan\J.odt
```

MinGW `g++`, `mingw32-make`가 PATH에 있어야 한다.

### 기본 사용법

```bat
mingw32-make              rem 기본 = release (현장 릴리즈)
mingw32-make release        rem 동일: JPOS_RELEASE + _MIXER
mingw32-make ttex           rem 간편결제(TTEx) 포함 릴리즈
mingw32-make tta            rem TTA 인증 빌드
mingw32-make fake           rem 사무실 페이크 충전 테스트
mingw32-make dev            rem -g 디버그 (JPOS_RELEASE/TTA 없음)

mingw32-make PROFILE=tta-skcc   rem 이름 타깃 대신 변수로 지정
mingw32-make show-config        rem 현재 PROFILE·CXXFLAGS 확인
mingw32-make profiles           rem 프로파일 목록 (help와 동일)
```

빌드 결과물: `release\main.exe`, `release\mainU.exe`

### 프로파일 목록

| 타깃 | 전처리 플래그 | 용도 |
|------|----------------|------|
| `release` **(기본)** | `JPOS_RELEASE` + `_MIXER` | 현장 릴리즈 (셀프 음성 안내 포함) |
| `release-basic` | `JPOS_RELEASE` | 릴리즈, mixer 없음 |
| `ttex` | `JPOS_RELEASE` + `_MIXER` + `TTEx` | 간편결제(TTEx) |
| `tta` | `JPOS_TTA` | TTA / 인증 심사 |
| `tta-skcc` | `JPOS_TTA` + `SKCC_TTA` | SKCC TTA |
| `tta-skcc-tbd` | `JPOS_TTA` + `_SKCC_TBD` | SKCC TTA (TBD 분기) |
| `fake` | `JPOS_RELEASE` + `_MIXER` + `JPOS_FAKE` | 사무실 페이크 모드 |
| `fake-skcc` | `JPOS_RELEASE` + `JPOS_FAKE` | SKCC 페이크 (mixer 없음) |
| `release-jlink` | `JPOS_RELEASE` + `JLINK_ENABLED` | JLINK 개인 테스트 |
| `sqlite` | `JPOS_RELEASE` + `SQLITE` | SQLite 테스트 (`-lsqlite3dll` 링크) |
| `desktop` | `JPOS_RELEASE` + `JPOS_FAKE` + `JPOS_PC` + `-g` | 데스크톱 단독 |
| `fake-debug` | `JPOS_RELEASE` + `JPOS_FAKE` + `-g` | 페이크 + 디버그 심볼 |
| `dev` | `-g` only | 개발 빌드 (릴리즈/TTA 매크로 없음) |

### 프로파일 전환 시 주의

- **프로파일이 바뀌면 `obj\*.o`가 자동 삭제**된다 (`obj\.build_profile`로 추적).  
  서로 다른 `-D` 플래그가 섞인 채 링크되는 것을 방지하기 위함이다.
- 수동 정리: `mingw32-make clean_all` (`obj\.build_profile` 포함 삭제)
- 부팅 로그에서 확인: `JPOS_RELEASE defined` / `JPOS_TTA defined` (`app_boot.cpp`)

### 기타 make 타깃

| 타깃 | 설명 |
|------|------|
| `run` | `release\main.exe` 실행 |
| `gdb` | `gdb release\main.exe` |
| `debug` | `gdb` 별칭 (빌드 프로파일 `dev`와 무관) |
| `clean` | 일부 obj·exe 삭제 |
| `clean_all` | obj 전체·release exe·프로파일 스탬프 삭제 |
| `link` | `release\main.exe`를 지정 경로에 복사 |
| `ctags` | ctags 사용 @cursor |

### 예: TTA → 릴리즈 전환

```bat
mingw32-make tta
rem ... TTA 실기 테스트 ...

make(mingw32-make) release
rem obj 자동 정리 후 릴리즈 플래그로 전체 재빌드
```
