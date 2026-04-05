import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_parcdupetitprince.com_kia', ['https://parcdupetitprince.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
