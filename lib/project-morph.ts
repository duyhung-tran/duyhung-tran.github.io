// Lets a project page know while the project modal (components/project-modal.tsx) is
// still covering it, so its entrance animations wait instead of playing unseen.
// The cover starts when the scroll ring fills, before the page has even loaded
// underneath, and lifts when the modal's morph (or slide-away) reveals the page.

const REVEAL_EVENT = "project-modal-reveal";
let covered = false;

// Called by the modal as the scroll ring fills and the project page starts loading
export function coverPage() {
    covered = true;
}

// Called by the modal as it starts revealing the page (and if it closes any other
// way, so the page never waits forever)
export function revealPage() {
    if (!covered) return;
    covered = false;
    window.dispatchEvent(new Event(REVEAL_EVENT));
}

// Runs `play` now, or once the modal reveals the page if it is still covering it.
// Returns a cleanup that cancels the wait.
export function whenPageRevealed(play: () => void) {
    if (!covered) {
        play();
        return () => {};
    }
    window.addEventListener(REVEAL_EVENT, play, { once: true });
    return () => window.removeEventListener(REVEAL_EVENT, play);
}
