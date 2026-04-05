import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ru.getcamgirls.com_h61', ['https://ru.getcamgirls.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
