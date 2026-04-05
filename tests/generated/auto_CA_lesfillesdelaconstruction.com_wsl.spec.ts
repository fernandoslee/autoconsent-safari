import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_lesfillesdelaconstruction.com_wsl', ['https://www.lesfillesdelaconstruction.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
