const controller = require('./controller');

test('should return average, maximum and minimum events daily in date range', async function () {
    const dateStart = '2013-12-22';
    const dateEnd = '2014-01-05';

    const result = await controller.execute(dateStart, dateEnd);

    // Assertions to check the structure and values of the result
    expect(result).toHaveProperty('data');
    expect(result.data).toBeInstanceOf(Array);

    result.data.forEach(summary => {
        if (summary.maxDamageEvent && summary.minDamageEvent) {
            expect(summary.maxDamageEvent.damage).toBeGreaterThanOrEqual(summary.minDamageEvent.damage);
        }
    });

    // Verificar se avgDamage é menor ou igual a maxDamage para cada data
    result.data.forEach(summary => {
        expect(summary.avgDamage).toBeLessThanOrEqual(summary.maxDamageEvent.damage);
    });

    if (result.data.length > 0) {
        const summary = result.data[0]; // Assuming it's an array of daily summaries

        // Check if each daily summary has the expected properties
        expect(summary).toHaveProperty('date');
        expect(summary).toHaveProperty('avgDamage');
        expect(summary).toHaveProperty('maxDamageEvent');
        expect(summary).toHaveProperty('minDamageEvent');

        // You can add more specific checks based on your expected data structure
        // For example, if you know the expected format of date, you can check it
        expect(summary.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }

    // You can add more assertions based on your actual data structure and expectations
});
