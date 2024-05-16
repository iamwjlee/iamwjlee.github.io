# Sprit Chains


## 정신의 사슬
![정신사슬](./res/정신의사슬.png)

## 터치보드 윈도우10 설정
```
1. 윈도우10 설치후 c:드라이브에 AryaStark폴더를 복사한다
2. AryaStark폴더를 공유디렉토리로 만든다

    2-1 폴더공유에서 everyone,guest 추가하고  트워그및공유센터에서 호보호공유끄기로 설정한다.
    2-2 폴더공유에서 everyone,guest 추가하고  네트워그및공유센터에서 암호보호공유끄기로 설정한다.
3. odt/arya.bat를 바탕화면으로 복사한다.
4. AryaStark/odt/bin/uac_disable.bat를 관리자 권한으로 실행
    동영상 실행을 위해서 (게시자를 알수없는 이 앱이 디바이스를 변경하도록 허용하기 위해)
5. 설정에서 전원관리 -> 고성능 -> 고급전원관리 -> 
    하드디스크끄기 0
    디스플레이끄기 -> 해당없슴
    화면끄기 ->없슴
    디스플레이 밝기 -> 60%
6. 고급시스템설정 -> 최적
7. 기타 원도우10 최적화 셋팅및 업데이트방지 셋팅이 필요(TBD)
    services.msc -> windows update 사용안함으로 셋팅
    gpedit.msc  -> 관리템플릿->windows 구성요소 ->windows 업데이트->자동업데이트구성 -> 사용안함
    gpedit.msc  -> 관리템플릿->시스템->인터넷통신관리 ->인터넷통신설정->모든 windows 업데이트기능에 액세스안함 ->사용
    
8. 최신터치SW로 업데이트 한다(main.exe를 AryaStark/odt/release 에 복사한다) 
9. 부팅메뉴 Advanced->Miscellaneous Configuration->Restore AC Power Loss ->Power On 으로 셋팅
10. 아리아 실행화일인 main.exe를 악성코드로 오인하여 windows가 이파일을 지우는 경우가 있슴
    설정->업데이트및보안->Windows 보안->바이러스및 위협방지->설정관리 -> 제외추가또는 제거->제외사항추가 ->C:\AryaStark 폴더를 제외항목에 추가한다! 
11. NFC_dirver 디렉토리에 있는 usb 드라이버 설치

```

원도우10 설정 참조 : <https://itshareit.tistory.com/3> 

### 유량계 FW업데이트및 셋팅변경사항
```
1. AryaStark\MainBdupdate\JPOS3000.bin 사용
2. 디스펜서모드 -> 통신형(JPOS)로 셋팅
3. 유량계의 설정메뉴에서 노즐스위치사용을 오프한다(되도록)
```

### AryaStark 디렉토리구조
```
AryaStark/ezhelp: 원격
AryaStark/MainBdupdate :
    인터페이스보드 FW: J5000Buffer.bin
    키오스크 JPOS3000 FW: JPOS3000_NOSD.bin/JPOS3000_SD.bin
    일체형메인보드 FW: flowmeter.bin
AryaStark/MinGW : c++ 컴파일러
AryaStark/mv : 동영상파일 실행 파일
AryaStark/odt : 터치보드 어플리케이션 프로그램
AryaStark/odt/release : dll 라이브러리,실행파일
AryaStark/SDL2-2.0.7 : 라이브러리
AryaStark/video : 홍보용 동영상파일
AryaStark/PrgUploader : 원격다운로드를 위한 폴더::미사용
    Client.exe를 실행시키면 사무실컴퓨터(192.168.0.79)에서 파일을 읽어오고 터치SW를 재실행한다.
AryaStark/NFC_driver : Nice NFC Payment usb s/w driver    
```

### 신형 일체형(JPOS5000) uSD 갱신및 기물추가
```
1. JPOS5000신형의 uSD카드 인증서
    JPOS5000신형인 경우는 기존에 사용되던 인증서 대신 아래의 파일을 uSD카드에 읽혀서 갱신해야 합니다(JuUGi_Flash.exe사용하여)
    [2021_05_31_19_09_11][[KTC01_LPG_JWData_010031_900101-KTC01_LPG_JWData_010031_900101]]certs.dat
    \\jposnas\AS\프로그램_KIOSK\JPOS5000 uSD Card KTC인증서 디렉토리 참조

2. http://otp.ktc.re.kr/ 에서 기물추가(키오스크또는 일체형 등록)   

3. 나머지는 기존(JPOS3000)과 동일합니다.

```
[![이미지 링크 정상이자만 글자는 안보인다](./res/정신의사슬.png)](http://otp.ktc.re.kr/)

---




<!-- * 구글 홈페이지: https://google.com -->
### History
```
2020.12.18.  - 스타트 
2020.12.21.  - 업데이트 442버전 
2021.01.21.  - PrgUploader 폴더추가, 안쓰는 그림파일 삭제
2021.01.29.  - 업데이트예정 448버전, SameUploderV30,Pic 에 이미지파일 추가됨
2021.03.09.  - 업데이트 mv,Mediainfo.dat,Pic,res,J5000Buffer.bin(PR보내고 응답체크 추가)
2021.03.19.  - 업데이트 Pic,SKCC 일신충전소 설치용 실행파일
2021.03.25.  - 업데이트 OdtSetup1.bmp,4_PaymentICInsert.bmp
2021.04.02.  - 업데이트 NumberInputCash.bmp,일체형 메뉴그림2장추가
2021.04.27.  - 업데이트 DialogSave.bmp
2021.04.29.  - 업데이트 OdtSKMain.bmp 
2021.05.03.  - 업데이트 OdtSetup2.bmp 변경
2021.05.10.  - 업데이트 Arya2.bat 추가 
2021.05.14.  - 업데이트 Arya3.bat 추가,일체형 무결성실패 이미지 추가
2021.06.04.  - 업데이트 OdtSetup2.bmp,4_PaymentSKCC2.bmp
2021.06.08.  - 업데이트 OdtSKMain.bmp,8_MenuSK.bmp,
2021.06.15.  - 업데이트 DialogCustomCard.bmp,8_MenuJW.bmp 
2021.06.25.  - 업데이트 SK4차연동 업데이트 
2021.08.03.  - 업데이트 1원차이 
2021.08.11.  - 업데이트 1원차이 디스플레이 수정
2021.90.02.  - 업데이트 거래처별단가 적용 수정(동해),금액설정후 재설정시 900원차이이상일때만 프리셋적용(장암) 
2021.10.06.  - 업데이트 그림파일 업데이트 일체형2개 추가,인터페이스보드,메인보드,터치보드 
2021.10.07.  - 업데이트  
2022.02.11.  - 업데이트  기아레드포인트 추가로 이미지 3장 추가 
2022.07.26.  - 업데이트  그림파일 추가,컴퓨터 온도로깅 상용 프로그림(hwi) 
2022.11.28.  - 업데이트   Buffer board fw 수정(영수증버퍼늘리고,VFD 초기화에 단가 0원) : JPOS5000Buffer-PR.bin 파일 
2023.09.20.  - 업데이트  모바일 간편결제,그림파일 다수및 NFC_driver 디렉토리 추가 
2024.01.09.  - 업데이트  skgas 1톤트럭 홍보 동영상으로 교체 
2024.01.26.  - 업데이트  video player 교체(택배.avi만 플레이함) 
2024.03.14.  - 업데이트  모바일간편결제용 이미지 추가,결제화면(자영) 변경 
2024.03.18.  - 업데이트  모바일간편결제 이미지글자 변경(자영,직영),이미지변경,릴리즈변경 
2024.05.07.  - 업데이트  충전화면 머핀로고변경,토스추가예정 
2024.05-16.  - 업데이트  토스,앱결제 로고추가및 자영복합결제 할부셋팅추가

```

