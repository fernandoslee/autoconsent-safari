import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_london-handel-festival.com_42l', ['https://www.london-handel-festival.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
