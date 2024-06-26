const correctAnswers = {
  q1: "C",
  q2: "B",
  q3: "C",
  q4: "C",
  q5: "C",
  q6: "B",
  q7: "C",
  q8: "B",
  q9: "C",
  q10: "B",
  q11: "B",
  q12: "B",
  q13: "C",
  q14: "B",
  q15: "C",
  q16: "C",
  q17: "B",
  q18: "C",
  q19: "C",
  q20: "B",
  q21: "C",
  q22: "C",
  q23: "C",
  q24: "C",
  q25: "C",
};

const explanations = {
  q1: "「自分の将来なりたい像を決めて、それに近づくために一番良いキャラを作り、そのキャラとして行動をしていく」という考え方が基本です。(p.238-239参照)",
  q2: "名場面は定性的で、ワクワクする形で書くべきとされています。(p.199-200参照)",
  q3: "なりたい状態を元にキャラクターを作ることが重視されています。(p.111-112参照)",
  q4: "サードドアは、正面入口やVIP入口以外の創造的で独自のアプローチを指します。(p.164-165参照)",
  q5: "環境は主に「周りにどんな人がいるか」という意味で使われています。(p.151参照)",
  q6: "未来になりたい姿が現在の行動に大きな影響を与えるという考えが示されています。(p.033-034参照)",
  q7: "理想を現実だと勘違いするほど解像度を上げることでコンフォートゾーンを上げる方法が説明されています。(p.066-067参照)",
  q8: "失敗は物語をおもしろくする要素として捉えられています。(p.226-227参照)",
  q9: "判断は情報収集と分析を伴うプロセス、決断は意思をはっきりと決定することとされています。(p.214-215参照)",
  q10: "アイデアを温め続けると、それをやりたくなくなってしまうため、温めないことが推奨されています。(p.210-211参照)",
  q11: "リスク管理表は、リスクを認識し、それに対する対応策を用意することが目的とされています。(p.221-222参照)",
  q12: "キャラクターを設定することで、客観的に自分を眺めることができるという利点が説明されています。(p.243-244参照)",
  q13: "クイックウィンは、最初は絶対に勝てるところで勝っておく戦略として説明されています。(p.179-180参照)",
  q14: "Information → Opinion → Diaryの順で発信することが推奨されています。(p.184-185参照)",
  q15: "自己シグナリングは、自分の行動を見て自分の性格を判断することと説明されています。(p.139-140参照)",
  q16: "未来は予測不可能で、技術や環境が急速に変化するため、キャリアプランどおりにいかない可能性が高いと説明されています。(p.242-243参照)",
  q17: "限界質量は、ある一定の量を超えると、一気に連鎖的に反応が起こることを指す概念として説明されています。(p.152-153参照)",
  q18: "近い人は急な変化を不安に思い、受け入れにくいことがあるため、遠い人や知らない人から応援者を探すことが推奨されています。(p.182-183参照)",
  q19: "戦略 → 作戦 → 戦術の順で説明されています。(p.201-202参照)",
  q20: "やる気は行動しないと出ない、つまり行動することで初めてやる気が生まれると説明されています。(p.204-205参照)",
  q21: "20代はVariety、つまり多様な経験を積むことが推奨されています。(p.083-084参照)",
  q22: "行動を小分けにすることで、最初の一歩を踏み出しやすくなると説明されています。(p.203-204参照)",
  q23: "ジャーナリングの主な効果として、思考を客観視できるようになることが挙げられています。(p.206-207参照)",
  q24: "物語が思考と行動に大きな影響を与えるため、「物語思考」という言葉が使われていると説明されています。(p.244-245参照)",
  q25: "人生は「あなたという主人公が、なりたい自分になるための成長物語」と説明されています。(p.246参照)",
};

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  let resultHTML = "<h2>テスト結果</h2>";
  resultHTML +=
    "<table><tr><th>質問</th><th>あなたの回答</th><th>正解</th><th>結果</th></tr>";

  for (let i = 1; i <= 25; i++) {
    const questionName = `q${i}`;
    const selectedAnswer = document.querySelector(
      `input[name="${questionName}"]:checked`
    );
    const userAnswer = selectedAnswer ? selectedAnswer.value : "-";
    const correctAnswer = correctAnswers[questionName];

    if (userAnswer === correctAnswer) {
      score += 4;
    }

    resultHTML += `<tr>
            <td>${i}</td>
            <td>${userAnswer}</td>
            <td>${correctAnswer}</td>
            <td class="${
              userAnswer === correctAnswer ? "correct" : "incorrect"
            }">${userAnswer === correctAnswer ? "正解" : "不正解"}</td>
        </tr>`;
  }

  resultHTML += `</table><p>あなたの得点: ${score} / 100</p>`;

  resultHTML += "<h3>解説</h3>";
  for (let i = 1; i <= 25; i++) {
    const questionName = `q${i}`;
    resultHTML += `<p><strong>問題 ${i}:</strong> ${explanations[questionName]}</p>`;
  }

  document.getElementById("result").innerHTML = resultHTML;
  document.getElementById("result").style.display = "block";
});
