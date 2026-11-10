// Lets the page a scroll ring leads to (components/scroll-ring.tsx) know the visitor
// arrived that way, so it can play an entrance meant only for that arrival
// (e.g. the home page's content sliding up out of a blur).

// How long after the ring fills an arrival still counts (ms): long enough for the
// page to load, short enough that a later visit doesn't replay it
const FRESH_FOR = 4000;

let arrivedAt = 0;

// Called by the ring as it navigates
export function markRingArrival() {
    arrivedAt = Date.now();
}

// True while an arrival through the ring is fresh. Reading it doesn't use it up,
// so it gives the same answer however many times a component renders.
export function cameThroughRing() {
    return Date.now() - arrivedAt < FRESH_FOR;
}
