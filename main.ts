// Two Robots in an Elevator — one awkward line, spoken by one robot to
// another while they share a lift. The line is built from short fragments
// and printed exactly once.

const battery = "My battery is at 2%";
const waiting = "and I still waited for this elevator with you.";
const verdict = "That's what we call commitment. Or a bug.";

// Setup, wait, punchline — one breath, no pause for a reply.
const line = [battery, waiting, verdict].join(" ");

console.log(line);
