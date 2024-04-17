function fizzBuzz(n: number): string[] {
    let answer = [];

    let phrases = {3: 'Fizz', 5: 'Buzz'};

    for (let num = 1; num <= n; num++) {
        let current = '';
        for (let phrase in phrases) {
            if (num % parseInt(phrase) == 0) {
                current += phrases[phrase];
            }
        }

        if (current === '') {
            current = num.toString();
        }
        
        answer.push(current);
    }

    return answer;
};