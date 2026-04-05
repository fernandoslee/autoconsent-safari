import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ichthys-consulting.de_et7', ['https://ichthys-consulting.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
