import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fabasoft.com_gl7', ['https://www.fabasoft.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
