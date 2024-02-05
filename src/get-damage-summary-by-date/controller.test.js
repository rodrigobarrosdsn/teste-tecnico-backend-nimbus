const controller = require('./controller');

test('should return average, maximum and minimum events daily in date range', async function () {
    const dateStart = '2013-12-22';
    const dateEnd = '2014-01-05';

    const result = await controller.execute(dateStart, dateEnd);

    expect(result).toHaveProperty('data');
    expect(result.data).toBeInstanceOf(Array);

    result.data.forEach(summary => {
        if (summary.maxDamageEvent && summary.minDamageEvent) {
            expect(summary.maxDamageEvent.damage).toBeGreaterThanOrEqual(summary.minDamageEvent.damage);
        }
    });

    result.data.forEach(summary => {
        expect(summary.avgDamage).toBeLessThanOrEqual(summary.maxDamageEvent.damage);
    });

    if (result.data.length > 0) {
        const summary = result.data[0];

        expect(summary).toHaveProperty('date');
        expect(summary).toHaveProperty('avgDamage');
        expect(summary).toHaveProperty('maxDamageEvent');
        expect(summary).toHaveProperty('minDamageEvent');

        expect(summary.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }

});
