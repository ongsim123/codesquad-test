function main() {
    const result = document.getElementById('result');
    const word = document.getElementById('word').value;
    const num = document.getElementById('num').value;
    const direction = document.getElementById('direction').value.toUpperCase(); // L과 R로 통일

    let wordArr = word.split(''); //사용자 입력 단어를 배열에 한글자씩 저장
    let absNum = Math.abs(num); // 사용자 입력 숫자 양수 음수 판별

    if (num < -100 || num >= 100) { // 사용자 입력 숫자 범위 초과 시 알람 발생
        alert(`정수값이 -100이상 100미만인지 , 올바른 방향을 입력했는지 확인 해주세요.`);
    }

    if ((direction === 'L' && num == absNum) || (direction === 'R' && num != absNum)) { // 방향이 L이고 양수이거나, 방향이 R이고 음수일 경우
        let left = wordArr.splice(absNum % wordArr.length);
        result.innerHTML = `> ${word} ${num} ${direction}<br>
            ${left.join('') + wordArr.join('')}`;
    } else { // 방향이 R이고 양수이거나, 방향이 L이고 음수일 경우
        let right = wordArr.splice(wordArr.length - (absNum % wordArr.length));
        result.innerHTML = `> ${word} ${num} ${direction}<br>
            ${right.join('') + wordArr.join('')}`;
    }
}
main();
