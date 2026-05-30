import { cpSync, existsSync, mkdirSync, rmSync } from "fs";
import { spawn } from "child_process";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const runDir = join(process.env.LOCALAPPDATA || "C:\\Users\\BIT\\AppData\\Local", "port-dev");

const copyItems = ["app", "src", "public", "package.json", "package-lock.json", "tsconfig.json", "next.config.ts", "postcss.config.mjs", "eslint.config.mjs", "next-env.d.ts"];

console.log("Syncing project to", runDir);

if (existsSync(runDir)) {
  rmSync(runDir, { recursive: true, force: true });
}
mkdirSync(runDir, { recursive: true });

for (const item of copyItems) {
  const src = join(root, item);
  const dest = join(runDir, item);
  if (existsSync(src)) {
    cpSync(src, dest, { recursive: true });
  }
}

console.log("Installing dependencies...");
const install = spawn("npm", ["install"], { cwd: runDir, stdio: "inherit", shell: true });
install.on("close", (code) => {
  if (code !== 0) process.exit(code ?? 1);
  console.log("Starting dev server at http://localhost:3000\n");
  const dev = spawn("npm", ["run", "dev"], { cwd: runDir, stdio: "inherit", shell: true });
  dev.on("close", (c) => process.exit(c ?? 0));
});
