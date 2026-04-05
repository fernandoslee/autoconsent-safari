import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sjs-carstyling.com_ss9', ['https://www.sjs-carstyling.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
