"use client";

import { useEffect } from "react";

// A note for anyone who opens the inspector: a comment at the very top of the page's
// markup, above <html>. React can't render an HTML comment (a JSX comment is dropped
// from the output), so it is added by hand once the page has loaded.
export function HeyStalker() {
    useEffect(() => {
        const note = document.createComment(" hey stalker ");
        document.insertBefore(note, document.documentElement);
        return () => note.remove();
    }, []);
    return null;
}
