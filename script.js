'use strict';
const factorials_list = document.getElementById('factorials_list');

//For文で階乗を求める
const calcByForLoop = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

//スターリングの近似式で階乗を求める
const stirlingApproximation = (n) => {
    const pi = Math.PI;
    const e = Math.exp(1); //ネイピア数(2.71...)を代入
    const result = Math.sqrt(2 * pi * n) * ((n / e) ** n);
    return result;
}

//計算結果をDOMに渡す
const passToDom = (n, a, b) => {
    console.log(n, a, b);
    const div = document.createElement('div');
    const a_p = document.createElement('p');
    const b_p = document.createElement('p');
    div.setAttribute('id', 'result_div');
    a_p.innerText = `${n}! = ${a}`;
    b_p.innerText = `${n}! = ${b}`;
    div.appendChild(a_p);
    div.appendChild(b_p);
    factorials_list.appendChild(div);
}

//For文を用いて階乗の一覧を表示する
for (let i = 1; i <= 200; i++) {
    const a = calcByForLoop(i);
    const b = stirlingApproximation(i);
    passToDom(i, a, b);
}
