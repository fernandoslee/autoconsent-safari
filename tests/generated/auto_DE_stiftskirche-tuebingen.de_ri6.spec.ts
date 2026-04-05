import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stiftskirche-tuebingen.de_ri6', ['https://www.stiftskirche-tuebingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
