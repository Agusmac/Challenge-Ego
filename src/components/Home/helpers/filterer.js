// i should probably refactor this

// [...array] was used to avoid issues of react not re-rendering the grid

export function filterer(array, category) {
    if (category === 'cars') return [...array].filter(car => car.segment === 'Sedan' || car.segment === 'Hatchback');
    if (category === 'pickups') return [...array].filter(car => car.segment === 'Pickups y Comerciales');
    if (category === 'suvs') return [...array].filter(car => car.segment === 'SUVs');
}

export function orderer(array, category) {
    if (category === 'biggerPrice') return [...array].sort((b, a) => (a.price) - (b.price));
    if (category === 'minorPrice') return [...array].sort((a, b) => (a.price) - (b.price));
    if (category === 'newer') return [...array].sort((b, a) => (a.year) - (b.year));
    if (category === 'older') return [...array].sort((a, b) => (a.year) - (b.year));
}
