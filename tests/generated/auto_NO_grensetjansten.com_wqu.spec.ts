import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_grensetjansten.com_wqu', ['https://www.grensetjansten.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
