import generateCMPTests from '../playwright/runner';
generateCMPTests('bet365', ['https://www.bet365.com/', 'https://www.bet365.bet.br/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
generateCMPTests('bet365', ['https://www.bet365.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
generateCMPTests('bet365', ['https://news.bet365.com/en-gb'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
