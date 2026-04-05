import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_etniabarcelona.com_32c', ['https://www.etniabarcelona.com/de/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
