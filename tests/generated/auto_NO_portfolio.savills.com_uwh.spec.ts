import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_portfolio.savills.com_uwh', ['https://portfolio.savills.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
