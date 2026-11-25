// Two Robots in an Elevator
// One robot, one elevator, one awkward confession.
// The line is assembled from named fragments so each beat of the
// joke is visible on its own; the printed result is a single line.

const batteryConfession = "My battery is at 2%";
const loyalWait = "and I still waited for this elevator with you.";
const grandClaim = "That's what we call commitment.";
const quietDoubt = "Or a bug.";

function speak(parts: string[]): string {
  return parts.join(" ");
}

const elevatorLine = speak([
  batteryConfession,
  loyalWait,
  grandClaim,
  quietDoubt,
]);

console.log(elevatorLine);
