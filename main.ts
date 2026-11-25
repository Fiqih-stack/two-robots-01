// One awkward line, spoken by a robot to another robot in an elevator.

function robotLine(): string {
  const firstHalf = "My battery is at 2% and I still waited for this elevator with you.";
  const secondHalf = "That's what we call commitment. Or a bug.";
  return `${firstHalf} ${secondHalf}`;
}

console.log(robotLine());
