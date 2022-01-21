it ('17 is 17', () => {
    expect(17).toEqual(17);
});

it ('18 is not 18', () => {
    expect(17).not.toEqual(18)
});

const getEvenNumbers = numbers =>
numbers.filter(num => (num % 2 == 0));

it ('should get only even numbers from array', () => {
    const result = getEvenNumbers([1, 2, 3, 4, 5])

    expect(result).toEqual([2, 4])
})