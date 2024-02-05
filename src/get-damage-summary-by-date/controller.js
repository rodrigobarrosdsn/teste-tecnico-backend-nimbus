const repository = require('./repository');

module.exports = {
    async execute(dateStart, dateEnd) {
        const dbAlerts = await repository.execute(dateStart, dateEnd);

        const groupedByDate = dbAlerts.reduce((result, alert) => {
            const dateKey = alert.date.toISOString().split('T')[0];

            if (!result[dateKey]) {
                result[dateKey] = {
                    date: dateKey,
                    damages: [],
                    maxDamageEvent: { event: null, damage: 0 },
                    minDamageEvent: { event: null, damage: null },
                };
            }

            result[dateKey].damages.push(alert.damage);

            if (alert.damage > result[dateKey].maxDamageEvent.damage) {
                result[dateKey].maxDamageEvent = { event: alert.event, damage: alert.damage };
            }

            if (result[dateKey].minDamageEvent.damage === null || alert.damage < result[dateKey].minDamageEvent.damage) {
                result[dateKey].minDamageEvent = { event: alert.event, damage: alert.damage };
            }

            return result;
        }, {});

        const result = Object.values(groupedByDate)
            .map(summary => {
                const avgDamage = summary.damages.length > 0 ? summary.damages.reduce((acc, damage) => acc + damage, 0) / summary.damages.length : 0;

                return {
                    date: summary.date,
                    avgDamage: Math.round(avgDamage),
                    maxDamageEvent: summary.maxDamageEvent,
                    minDamageEvent: summary.minDamageEvent,
                };
            })
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        return { data: result };
    },
};
