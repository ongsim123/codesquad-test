function main() {
    const userInput = document.getElementById('userInput');
    const result = document.getElementById('result');
    const move = document.getElementById('move').value.toUpperCase();
    //1차원
    const firstWhite = ["W", "W", "W"], firstOrange = ["O", "O", "O"], firstYellow = ["Y", "Y", "Y"]
        , firstRed = ["R", "R", "R"], firstBlue = ["B", "B", "B"], firstGreen = ["G", "G", "G"];
    //2차원
    const white = [firstWhite, firstWhite, firstWhite];
    const orange = [firstOrange, firstOrange, firstOrange];
    const yellow = [firstYellow, firstYellow, firstYellow];
    const red = [firstRed, firstRed, firstRed];
    const blue = [firstBlue, firstBlue, firstBlue];
    const green = [firstGreen, firstGreen, firstGreen];
    //3차원
    const cube = [white, orange, yellow, red, blue, green];

    userInput.innerHTML = `CUBE> ${move}`; // CUBE MOVE 출력 단

    let str = ''; // 결과값 문자열 변수 지정
    let ret = cube; // 초기값 cube 초기상태 지정
    let cnt = 0; // 조작횟수 변수 지정

    for (let i = 0; i < move.length; i++) { // move 배열 루프문
        if (move[i] === 'Q') { // Quit
            str += `-${move[i]}-<p>조작갯수 : ${cnt}</p><p>이용해주셔서 감사합니다. 뚜뚜뚜.</p>`;
            result.innerHTML = str; // break하면 for문 마지막 str에 추가 안되기 때문에 추가
            break;
        }
        else if (move[i + 1] === "'") {// 반시계동작
            if (Number(move[i + 2]) === Number(move[i + 2])) { //반시계후 숫자
                if (move[i] === "F") { // F'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveF2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                else if (move[i] === "B") { // B'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveB2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                else if (move[i] === "R") { // R'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveR2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                else if (move[i] === "L") { // L'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveL2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                else if (move[i] === "U") { // U'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveU2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                else if (move[i] === "D") { // D'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveD2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                i + 2;
            }
            else { //반시계후 알파벳 or 공백
                if (move[i] === "F") { // F'
                    ret = moveF2(ret);
                }
                else if (move[i] === "B") { // B'
                    ret = moveB2(ret);
                }
                else if (move[i] === "R") { // R'
                    ret = moveR2(ret);
                }
                else if (move[i] === "L") { // L'
                    ret = moveL2(ret);
                }
                else if (move[i] === "U") { // U'
                    ret = moveU2(ret);
                }
                else if (move[i] === "D") { // D'
                    ret = moveD2(ret);
                }
                str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                i++;
                cnt++;
            }

        }
        else if (Number(move[i + 1]) === Number(move[i + 1])) { // 시계다중동작
            if (move[i] === "F") { // F
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveF(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            else if (move[i] === "B") { // B
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveB(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            else if (move[i] === "R") { // R
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveR(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            else if (move[i] === "L") { // L
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveL(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            else if (move[i] === "U") { // U
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveU(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            else if (move[i] === "D") { // D
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveD(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            i++;
        }
        else if (move[i] === "F" || move[i] === "B" || move[i] === "R" || move[i] === "L" || move[i] === "U" || move[i] === "D") { // 시계동작
            if (move[i] === "F") { // F
                ret = moveF(ret);
            }
            else if (move[i] === "B") { // B
                ret = moveB(ret);
            }
            else if (move[i] === "R") { // R
                ret = moveR(ret);
            }
            else if (move[i] === "L") { // L
                ret = moveL(ret);
            }
            else if (move[i] === "U") { // U
                ret = moveU(ret);
            }
            else if (move[i] === "D") { // D
                ret = moveD(ret);
            }
            str += `-${move[i]}-<p>${answer(ret)}</p>`;
            cnt++;
        }
        else { // 입력 오류
            alert('입력 오류. 횟수가 1~9인지, 정확한 동작을 입력하였는지 재확인이 필요합니다.');
            userInput.innerHTML = `CUBE> 입력 오류!`;
            break;
        }
        result.innerHTML = str;
    }
}
main();