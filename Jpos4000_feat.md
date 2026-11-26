## 키 버튼 구현 사항및 설정화면 검토
- 7번. 토탈회전량
- 6번. 조회
- 4번. 온도
- 9번. 밝기
- 키노즐
- 등록
- 취소
- 금액/리터
- 설정버튼(비밀번호입력)
    - 버전표시=TTA인증용 버전(VERSION1)과 FW버전(VERSION2)= 'JPOS3000N0011003' ':2024/09/03'
	- 기본설정
	- 법정파라미터

1. 호기(Setup.Data.OdtID)
2. 단가(Setup.Data.Cost)
3. uSD정보(uSD번호/기물번호)
4. 유량계인증정보(버전=JPOS5000A0010041,해쉬=B439C5,제조사ID=000011)
5. 노즐스위치((Setup.Data.NozSWUse)
6. 키패드노즐스위치(Setup.Data.KeyNozswUse)
7. 저속제한(Setup.Data.SlowCnt) =20
8. 고속제한(Setup.Data.FastCnt) =1000
9. 프리스탑(Setup.Data.Prestop) = 900
10. 리터표시 시작점(Setup.Data.DspLiterMin)=5
11. 최대 충전량(Setup.Data.LiterLimit) 100
12. 금액원단위사용(Setup.Data.CostDecimalPoint)=2
13. 리터소수점사용(Setup.Data.LiterDecimalPoint)=2
14. 디스펜서모드 (Setup.Data.DMode)=PINF20_SK(통신형SK),PINF20_MIRAE(통신형미래)
15. 포스모드(Setup.Data.PMode)=장위,SKCC
16. 유량계 재부팅 
17. 시간설정
18. 토탈변경(DTotal3,DTotal,DTotal2) 
19. 기차변경(Setup.Data.Adj) - OTP5자리(공장용)/OTP6자리(검량용)
    - OTP입력화면에 공장용으로 셋팅된 기차값을 보이게 해야
	- 만약 기차값이 1020이면 A20, 기차값이 950이면 B950 


### 기타설정은 일단 상수로 처리해도 될것 같습니다

Setup.Data.Point=0; 소수점3자리사용
Setup.Data.SOLL_OnTime=7;
Setup.Data.SOLS_OnTime=3;
Setup.Data.HallSensorUse=0;
Setup.Data.PresetLimit=0;

