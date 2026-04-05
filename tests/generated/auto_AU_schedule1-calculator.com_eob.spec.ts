import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_schedule1-calculator.com_eob', ['https://schedule1-calculator.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
