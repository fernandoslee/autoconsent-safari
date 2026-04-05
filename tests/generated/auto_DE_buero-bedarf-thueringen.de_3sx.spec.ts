import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_buero-bedarf-thueringen.de_3sx', ['https://www.buero-bedarf-thueringen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
