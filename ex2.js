/**
 * 
 * 병원 원무시스템
 * 
 * - 환자
 *  - id const
 *  - 이름 string
 *  - 성별 MALE(남성) | FEMALE(여성)
 *  - 병명 string
 *  - 퇴원까지 남은 일자 : NUMBER
 * 
 * 
 * john male 팔부상 2
 * doe male 복통 3
 * anne female 다리골절 4
 * jain female 허리디스크 14일
 * 
 * 전체 환자 목록 조회
 * 오늘 퇴원해야 하는 환자 조회
 * 며칠 뒤 ( 5일 뒤)에 퇴원해야하는 환자 목록
 */

const TODAY = 3;

//환자 명단 배열 선언
const patientsList = [
    {id: 12851486, name: "john", gender: "male", condition:"팔부상", day:"2"},
    {id: 12345678, name: "doe",  gender: "male", condition:"복통", day:"3"},
    {id: 54135789, name: "anne", gender: "famale", condition:"다리골절", day:"4"},
    {id: 48896372, name: "jain", gender: "famale", condition:"허리디스크", day:"14"},
    {id: 47895638, name: "emmy", gender: "male", condition:"신경통", day:"2"}
];

//전체 환자 목록 조회
function getPatientList(){
    console.log('전체 환자 목록 조회',patientsList.length);

    //배열 출력(for문)
    for(let i = 0; i < patientsList.length; i++){
        const currentPartient = patientsList[i]

        const name = currentPartient['name']
        const gender = currentPartient['gender']
        const day = currentPartient['day']
        console.log(id + ':' + name + gender + day +  '\n')
    }
}
getPatientList();

/*
 * 오늘 퇴원이 필요한 환자 목록
 */
function getTodayNeedLeftPatientList(){
    const result  = []
    for(let i = 0 ; i < patientsList.length ; i ++){
        if(patientsList[i].day === TODAY){
            result[result.length] = patientsList[i]
        }
    }

    return result;
}

/**
 * 오늘 기준 며칠 뒤에 퇴원이 필요한 환자 목록
 * @param {*} day 
 */
function getNeedLeftByDayPatientList(){
    let result= []
  for(let i = 0; i < patientsList.length ;  i ++){
    if(patientsList[i].day < TODAY){
        continue;
    }
    // logic
    const leftDay= +patientsList[i].day - +TODAY

    result.push({name: patientsList[i].name, leftDay : leftDay})
  }

  return result
}
