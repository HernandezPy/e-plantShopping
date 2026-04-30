import { execSync } from "node:child_process";

function run(command) {
  return execSync(command, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exit(1);
}

try {
  run("git fetch origin gh-pages");
} catch {
  console.log("gh-pages branch is not available yet on origin. Nothing to validate.");
  process.exit(0);
}

const tree = run("git ls-tree origin/gh-pages");
const lines = tree
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const hasSubmodule = lines.some((line) => line.startsWith("160000 "));
if (hasSubmodule) {
  fail("gh-pages contains a submodule entry (mode 160000). Clean branch required.");
}

const hasNoJekyll = lines.some((line) => line.endsWith("\t.nojekyll"));
if (!hasNoJekyll) {
  fail(".nojekyll is missing in gh-pages.");
}

console.log("gh-pages verification passed: no submodule entries and .nojekyll exists.");
