// Option 1: Import the default bundle with all three music engraving fonts.
import { VexFlow, Factory, Stave, EasyScore } from "vexflow";

// Option 2: Use the import path below to create a smaller bundle that includes only Bravura.
// import { VexFlow, Factory, Stave, EasyScore } from "vexflow/bravura";

// For Experts:
//
// Option 3: Use the import path below to create the smallest bundle that includes no music fonts.
// You will have to dynamically load SMuFL fonts.
// import { VexFlow, Factory, Stave, EasyScore } from "vexflow/core";
//
// Entry files are listed in node_modules/vexflow/package.json.
//   package.json > exports > . > import => ./build/esm/entry/vexflow.js
//   package.json > exports > ./core > import => ./build/esm/entry/vexflow-core.js
//   package.json > exports > ./bravura > import => ./build/esm/entry/vexflow-bravura.js
//   You can make a custom build of VexFlow that bundles your favorite SMuFL font.

const fonts = ["Bravura", "Petaluma", "Gonville"];

function chooseRandomFont() {
  const randomFontName = fonts[Math.floor(Math.random() * fonts.length)];
  VexFlow.setFonts(randomFontName);
  return randomFontName;
}

if (typeof window !== "undefined") {
  (window as any).pickRandomFont = () => {
    const fontName = chooseRandomFont();
    document.getElementById("font-name")!.innerText = "Loaded " + fontName;
    renderScore();
  };
}

console.log(VexFlow.BUILD);

function printDebugInfo() {
  console.log("VEX");
  console.log(VexFlow);
  console.log("FACTORY");
  console.log(VexFlow.Factory == Factory);
  console.log("STAVE");
  console.log(VexFlow.Stave === Stave);
  console.log(Stave);
}

function renderScore() {
  document.getElementById("output")!.innerHTML = "";

  const factory: Factory = new Factory({
    renderer: { elementId: "output", width: 500, height: 200 },
  });
  const score: EasyScore = factory.EasyScore();
  factory
    .System()
    .addStave({
      voices: [
        score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "up" })), //
        score.voice(score.notes("C#4/h, C#4", { stem: "down" })),
      ],
    })
    .addClef("treble")
    .addTimeSignature("4/4");
  factory.draw();
}

console.log("HELLO");
