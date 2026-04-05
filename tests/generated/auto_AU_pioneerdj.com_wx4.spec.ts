import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pioneerdj.com_wx4', ['https://www.pioneerdj.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
