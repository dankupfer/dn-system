const store: Record<string, string> = {};

export default {
    getItem: (key: string) => Promise.resolve(store[key] || null),
    setItem: (key: string, value: string) => { store[key] = value; return Promise.resolve(); },
    removeItem: (key: string) => { delete store[key]; return Promise.resolve(); },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); return Promise.resolve(); },
    getAllKeys: () => Promise.resolve(Object.keys(store)),
    multiGet: (keys: string[]) => Promise.resolve(keys.map(k => [k, store[k] || null])),
    multiSet: (pairs: [string, string][]) => { pairs.forEach(([k, v]) => { store[k] = v; }); return Promise.resolve(); },
    multiRemove: (keys: string[]) => { keys.forEach(k => delete store[k]); return Promise.resolve(); },
};