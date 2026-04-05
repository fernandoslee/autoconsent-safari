import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gay.fleshbot.com_pp6', ['https://www.google.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
