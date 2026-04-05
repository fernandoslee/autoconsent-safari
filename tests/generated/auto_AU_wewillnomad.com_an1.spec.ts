import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_wewillnomad.com_an1', ['https://www.wewillnomad.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
