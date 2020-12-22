# TDD practice
TDD is a *design process*, not a testing process. TDD is a robust way of designing software components ("units")
interactively so that their behaviour is specified through unit tests.

**Test-first cycle**

1. Write a simple failing test
2. Make the test pass by writing the minimum amount of code, **don't bother with code quality**
3. Refactor the code by applying design principles/patterns

**Naming tests properly**

```
describe('[unit of work]', () => {
  it('should [expected behaviour] when [scenario/context]' () => {
    // code
  })
})
```

Or whenever you have many tests that follow the same scenario or are related to the same context:

```
describe('[unit of work]', () => {
  describe('when [scenario/context]', () => {
    it('should [expected behaviour]' () => {
      // code
    })
  })
})
```

## TDD Poker
Write a function to compare two poker hands:
```
function comparePokerHands(handOne, handTwo) {
  // code
}
```
