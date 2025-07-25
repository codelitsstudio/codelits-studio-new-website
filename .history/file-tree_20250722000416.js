// file-tree.js
const fs = require("fs");
const path = require("path");

const IGNORE = [".git", "node_modules", ".history", "dist", "build"];

function printTree(dir, prefix = "") {
  const files = fs.readdirSync(dir).filter(f => !IGNORE.includes(f));
  files.forEach((file, index) => {
    const isLast = index === files.length - 1;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const connector = isLast ? "└── " : "├── ";

    console.log(prefix + connector + file);
    if (stat.isDirectory()) {
      printTree(filePath, prefix + (isLast ? "    " : "│   "));
    }
  });
}

printTree(".");
