// Two Robots in an Elevator — make.fun entry.
//
// The brief: one line, under 200 characters, of awkward small talk one
// robot says to another while they ride an elevator together. This line
// leans on machine logic for the awkwardness — a robot at 2% battery
// still waiting for the lift — then undercuts its own sincerity with
// the possibility that it is just a bug.
const MAX_CHARS = 200;
const LINE =
  "My battery is at 2% and I still waited for this elevator with you. That's what we call commitment. Or a bug.";

if (LINE.length >= MAX_CHARS) throw new Error("line exceeds 200 characters");

function line(): string {
  return LINE;
}

console.log(line());
