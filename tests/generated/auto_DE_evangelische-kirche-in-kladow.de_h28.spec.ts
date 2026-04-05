import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_evangelische-kirche-in-kladow.de_h28', ['https://www.evangelische-kirche-in-kladow.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
