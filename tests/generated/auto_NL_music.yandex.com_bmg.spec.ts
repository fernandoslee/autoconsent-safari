import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_music.yandex.com_bmg', ['https://music.yandex.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
