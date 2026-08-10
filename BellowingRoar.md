<!--
# Download: <a href="/public/BellowingRoar.zip" download>Download BellowingRoar.zip</a>
-->

# Bellowing Roar

### 우레와같은 울부짖음 
![우레와같은울부짖음](./res/우레와같은울부짖음.png)

## SKCC vs 자영 결제 명령어 비교

> **SKCC 직영모드** = `PMode==SK` : ODT -> 장위통신 프로그램 -> SK-POS -> VAN 승인  
> **자영 모드** = `PMode==JANGWEE` : ODT -> JW-POS -> VAN 승인

### 기본 결제

| 신용카드 | 약어 |    비고   |
| ------- | ---- | --------- |
| Card    |  C   | 실물카드  |
| Mobile  |  M   | 바코드/QR |
| NFC     |  N   | NFC리더기 |

| 포인트카드 | 약어 |    비고   |
| ------- | ---- | --------- |
| OK캐쉬백 |  O   | SK 카드  |
| 머핀카드 |  M   | **NA** |
| 블루카드 |  B   | 현대카드 |
| 레드카드 |  R   | 기아카드 |



| 결제 유형      | SKCC 모드 | JW 모드 |  비고 |
|---------------|-----------|--------|-----------|
| 신용Card      | `NX`      | `NX`     |   |  
| 신용Nfc       | **NA**    | `AP`     |   |
| 신용Mobile    | `NX`      | `A2`     |     |
| 신용 유외상품  |  **NA**   | `OC`     |    |
| 적립+신용C     | `CA[IY+NY]`| `CA[IY+NY]`  |  |
| 적립+신용N    |   **NA**    | `AY[IY+NY]` | NFC |
| 적립+신용M    | `CA[IY+NY]` | `AZ[A2+NY]` | 바코드 |
| 할인+신용C     | `HS[MC+NX]`| `CN[IY+NY]` | 카드 |
| 할인+신용N     | **NA**     | `AF[IY+NY]` | NFC |
| 할인+신용M     | `HS[MC+NX]`| `AN[A2+NY]` | 바코드 |
| 신용C 취소     | `EE[IY+(NY)]` | `EE` |    |
| 신용M 취소     | `EE[IY]`  | `EW`     |   |
| 신용N 취소     | **NA**    | `EP`     |  |
| 적립단독       | `NZ`      | `NZ`     |   |
| 포인트사용     | `FE`      | `FE`     |   |
| 현금키인       | `H5`     | `H5` | 키인/미발행 `SKCC_REGACY_IRS_KEYIN` `SKJW_IRS_CARD` |
| 현금카드       | `H3`      | `H3` | 현금영수증 카드 리딩 | 
| 적립+현금      | `H1`      | `H1` | `SAVEnIRS` | 
| 외상결제       | `BP[BG+NZ+BI]` | 사용 | `BG`:차량번호 `NZ`:적립카드 `BI`"거래카드 | 
| 간편가입       | `CL`        | **NA** |  SKCC 멤버십 간편가입 |  

### 현장할인 조합 

| 결제 유형 | SKCC 모드 | JW 모드 |  비고 |
|-----------|--------|-----------|------|
| 현장할인 + 신용 | `HS[MC+NX]` | 사용 |   |
| 현장할인 + 포인트 | `HS[MC+FE]` | 사용 | `FE` 단독 + SOIL 할인 경로  |
| 현장할인 + 현금키인 | `HS[MC+H5]` | 사용 | `H5` 단독 + 할인 경로  |
| 현장할인 + 현금카드 | `HS[MC+H3]` | 사용 | `H3` 단독 + 할인 경로  |

### 복합결제 커맨드

``` javascript
// SKCC인경우 복합결제 그룹 커맨드 4가지 (KM,KL,KD,KC)
if(쿠폰) cmd='KM'
else {
  if(!현장할인) cmd='KL'
  else {
    if(Blue/Muffin포인트) cmd='KD'
    else cmd='KC'
  }
}
```

| 결제 유형          | SKCC 모드     | JW 모드      |   비고 |
|--------------------|---------------|-------------|------|
| 적립 조회          | `KG`(?)       | `KG`         |  조회 |
| 현장할인 조회      | `CC`         | `SF`         |  조회 |
| 쿠폰 조회          | `KQ`          | `KQ`        |  조회 |
| 적립+O포인트+신용C  | `KL[KX+KZ+KF]` |`KF`(포)+`KA[KX+KZ]`| |
| 적립+현금+신용C     | `KL[KX+KZ+KI]` |`KI`(현)+`KA[KX+KZ]`| |
| 할인+현금+신용C    | `KC[KX+KZ+KI]` |`KI`(현)+`KA[KX+KZ]` | |
| B포인트+신용C      | `KL[KX+KF]`    |`KF`(포)+`KA[KX+KZ]` | |
| 할인+B포인트+신용C | `KD[KX+KZ+KF]` |`KF`(포)+`KA[KX+KZ]` | |
| 쿠폰+신용          | `KM[KX+KP]`   |`KP`(쿠)+`KX`(신)  | |
| 쿠폰 단독          |    **NA**     |`KP`(쿠폰)             | 단일결제  |
| 포인트 단독        |    **NA**       |`KF`(포인트)            | 단일결제  |
| 신용C 단독         |    **NA**       |`KX`                  | 단일결제 Card  |
| 신용N 단독         |    **NA**       |`KR`                  | 단일결제 NFC  |
| 신용M 단독         |    **NA**       |`K2`                  | 단일결제 바코드  |
| 현장할인 신용C     |    **NA**       |`CN[IY+NY]`            | 단일결제 Card  |
| 현장할인 신용M     |    **NA**       |`AN[A2+NY]`            | 단일결제 바코드 |
| 현장할인 신용N     |    **NA**       |`AF[IY+NY]`            | 단일결제 NFC  |
| 신용C+적립         |    **NA**       |`KA[KX+KZ]`            | 단일결제 CARD |
| 신용N+적립         |    **NA**       |`KY[KX+KZ]`            | 단일결제 NFC |
| 신용M+적립         |    **NA**       |`KT[K2+KZ]`            | 단일결제 바코드 |
| 신용M+현금+적립    | `KL[KX+KZ+KI]` |`KI+KT[K2+KZ]`      |  바코드 |
| 신용N+현금+적립    |    **NA**       |`KI+KY[KX+KZ]`      | NFC |

 ### 아키텍처 차이 요약

| 구분 | SKCC 모드 | 자영 모드 |
|------|-----------|-----------|
| 승인 주체 | SK-POS가 VAN 호출 | JPosComm이 VAN 직접 호출 |
| 신용단독 | `NX` | `NX` (동일 커맨드, 수신처 다름) |
| 적립+신용 | `CA[IY+NY]` 묶음 우선 | `CA`/`SY` 또는 `IY`->`NY` 분리 |
| 현장할인 | `HS[MC+...]` 묶음 | SOIL/셀프 별도 (`RN`,`RT`,`XT` 등) |
| 복합결제 | `KL`/`KC`/`KD`/`KM` | `KX`/`KA`/`K2`/`KR` 중심 |
| 유외상품 | **NA** (`EnableGoods=0`) | `OC` 첨부 가능 |
| 외상거래 | `BP` 묶음 (`skccCCDebug=1`) | 신용결제 |


### 자영 현장할인
```
CN[IY+NY]
SF+KI+KA[KX+KZ] //현장할인+현금+신용+적립
```
### 자영 비회원활인- 신용과 동일 패턴사용
```
NX 단독
CA[IY+NY] 적립+신용
KI+KX 복합 현금+신용
KI+KA[KX+KZ] 복합 현금+신용+적립
```



### 자영 모바일 간편결제: A2,EW,AZ,K2,KT
```
A2 모바일 간편결제(카카오,네이버,토스) 바코드
EW 모바일 간편결제 바코드 취소 
AZ 모바일 간편결제 신용+적립/ AZ easy-pay+bonus AZ[A2+NY] /현장할인이적용되려면 AN[A2+NY]

복합 KI(현금)+K2(모바일)
복합 KF(포인트)+K2(모바일)
복합 KP(쿠폰)+K2(모바일) , 쿠폰단독시 영수증 내용이상해!

만약에 복합결제진입시 적립카드를 먼저읽혔으면 K2->KT[K2+KZ]

```




### 자영 NFC 간편결제: AP,EP,AY,AF,KR,KX,KY 
```
  AP(NFC)  : 단독 
  EP(NFC)  : 직전 AP 취소
  AY[IY+NY]: NFC 신용+적립: CA와 동일 
  AF[IY+NY]: NFC 현장할인: CN과 동일 

  NFC복합: KI(현금) + KR(NFC)
  NFC복합: KI(현금) + KY[KX(NFC)+KZ] ;적립사용
  NFC복합: KF(포인트) + KY[KX(NFC)+KZ] ;적립사용
```
### 현금영수증 미발행
```
  NR : 현금영수증미발행으로 '설정금액영수증'을 요청 
    if payload='1' 직전영수증
    else if '2' 설정금액 영수증
    else if '3' 세차권
    else if '4' 포인트세차권
``

## AryaBuild: [jw/AryaBuild.md](jw/AryaBuild.md)
## Protocol ODT and POS: [protocol.md](protocol.md)