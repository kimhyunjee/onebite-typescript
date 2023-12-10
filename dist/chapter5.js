/*열거형 타입 ( enum 타입 )
여러가지 값들에 따라 각각 이름을 부여해 열거해두고 사용하는 타입
* JS에는 없고 TS에만 존재
컴파일해도 사라지지 x
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN"; /*사실 숫자 작성하지 않아도 자동으로 위부터 0으로 시작되어 할당됨
    10부터 시작하고싶으면 첫번째에만 10 써주면 그 다음부터 1씩 늘어나서 자동할당됨
    중간에 10을 할당하면 위의 어드민은 0부터할당되고 게스트는 11이 됨
    */
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 0은 관리자
    Language: Language.korean,
};
const user2 = {
    name: "홍길동",
    role: Role.USER, //1은 일반유저
    Language: Language.english,
};
const user3 = {
    name: "hyun",
    role: Role.GUEST, //2는 게스트
};
console.log(user1, user2, user3);
export {};
