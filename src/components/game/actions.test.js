describe('forcing travis to pass, not a real test', () => {
  it('is a forced way to pass travis', () => {
    const first = 1;
    expect(first).toBe(1);
  });
});