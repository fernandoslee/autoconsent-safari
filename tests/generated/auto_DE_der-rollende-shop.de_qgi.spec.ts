import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_der-rollende-shop.de_qgi', ['https://www.der-rollende-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
