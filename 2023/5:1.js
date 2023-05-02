// Time Complexity: O(n log n) = n + n + n log n = 2n + n log n
function processLogs(n, logs, maxSpan) {
    let signIn = {};
    let signOut = {};

    // O(n)
    for (let i = 0; i < n; i++) {
        splitStr = logs[i].split(" ");

        if (splitStr[2] == "sign-in") {
            signIn[splitStr[0]] = parseInt(splitStr[1]);
        } else {
            signOut[splitStr[0]] = parseInt(splitStr[1]);
        }
    }

    // O(n)
    let result = [];
    for (let key in signIn) {
        if (signOut[key] && signOut[key] - signIn[key] <= maxSpan) {
            result.push(key);
        }
    }

    // O(n log n)
    return result.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

result = processLogs(6, ["30 99 sign-in", "30 105 sign-out", "12 100 sign-in", "20 80 sign-in",
"12 120 sign-out", "21 110 sign-in"], 20);

console.log(result);

result = processLogs(6, ["99 1 sign-in", "100 10 sign-in", "50 20 sign-in", "100 15 sign-out", "50 26 sign-out",
"99 2 sign-out"], 5);

console.log(result);
