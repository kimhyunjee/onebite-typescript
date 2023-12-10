//타입 별칭
let user = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요",
    location: "부천시",
};
/*타입 별칭 사용 시 주의점
같은 스코프 내에서는 중복으로 변수명을 사용하게 되면 x
type User = {};

//함수 내부 스코프에서는 ㅇㅋ
function func() {
  type User = {};
}
*/
let user2 = {
    id: 1,
    name: "hyun",
    nickname: "purin",
    birth: "950723",
    bio: "hi",
    location: "부천시",
};
let countryCodes = {
    Korea: "ko",
    unitedState: "us",
    unitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410,
    unitedState: 840,
    unitedKingdom: 826,
};
export {};
