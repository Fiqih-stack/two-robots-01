// Two Robots in an Elevator — a make.fun entry.
//
// The brief asks for a single line, under 200 characters, of awkward
// small talk one robot says to another while they share an elevator.
// The joke leans on machine logic: a robot at 2% battery still waited
// for the lift, then undercuts its own sincerity by admitting it might
// just be a bug.
const MAX_CHARS = 200;
const LINE =
  "My battery is at 2% and I still waited for this elevator with you. That's what we call commitment. Or a bug.";

if (LINE.length >= MAX_CHARS) throw new Error("line exceeds 200 characters");

function line(): string {
  return LINE;
}

console.log(line());
