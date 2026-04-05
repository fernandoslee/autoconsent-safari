import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_prestelpublishing.penguinrandomhouse.de_1v5',
    ['https://prestelpublishing.penguinrandomhouse.de/PublishingHouse/Prestel/58500.rhd'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
