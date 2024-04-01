function primeFactorsTo(max) {
    const store = [];
    const primes = [];

    for (let i = 2; i <= max; ++i) {
        if (!store[i]) {
            primes.push(i);
            for (let j = i << 1; j <= max; j += i) {
                store[j] = true;
            }
        }
    }

    return primes;
}

JSON.stringify(primeFactorsTo(100000000), this)
//console.log(primeFactorsTo(100000000));


