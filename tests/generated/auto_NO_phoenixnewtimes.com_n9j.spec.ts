import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_phoenixnewtimes.com_n9j', ['https://www.phoenixnewtimes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
