import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_education.yandex.ru_ljw', ['https://education.yandex.ru/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
