
(async () => {
    const testCase = new TestCase("Container Run");
    const url = "https://google.com";
    const screen = new Region();
    const env = new Environment();
    try {
        await _navigateTo(url);
        await _wait(2000);
    } catch (e) {
        await testCase.handleException(e);
    } finally {
        await testCase.saveResult();
    }
})();
