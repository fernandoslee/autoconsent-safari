import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_africaintelligence.com_6yr', ['https://www.africaintelligence.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
