import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lesschwab.com_g8p', ['https://www.lesschwab.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
