// Option 1: Import the default bundle with all three music engraving fonts.
// Vex can be imported either via the default export or via named export of the "vexflow" module.
// import Vex, { Flow, Factory, Stave, EasyScore } from "vexflow";
import { Vex, Flow, Factory, Stave, EasyScore } from "vexflow"; // 791 KB
// Option 2: Use one of the import paths below to create a smaller bundle.
// Each path maps to a different entry file in the vexflow npm package.
// import { Vex, Flow, Factory, Stave, EasyScore } from "vexflow/bravura";
// import { Vex, Flow, Factory, Stave, EasyScore } from "vexflow/gonville"; // 446 KB
// import { Vex, Flow, Factory, Stave, EasyScore } from "vexflow/petaluma";

// In TypeScript <= 4.5.x, you will need to customize the "paths" key in tsconfig.json.
// In TypeScript >= 4.6.x, the vexflow/* import paths should work natively, since the
// paths are declared in node_modules/vexflow/package.json
// See: https://github.com/microsoft/TypeScript/issues/33079#issuecomment-992768515
// See: https://github.com/microsoft/TypeScript/issues/33079#issuecomment-986107078

function chooseRandomFont() {
    const randomFontName = fonts[Math.floor(Math.random() * fonts.length)];
    Flow.setMusicFont(randomFontName);
    return randomFontName;
}
const fonts = ["Bravura", "Gonville", "Petaluma"];

(window as any).pickRandomFont = () => {
    const fontName = chooseRandomFont();
    document.getElementById("font-name")!.innerText = "Loaded " + fontName;
    renderScore();
};

console.log(Vex.Flow.BUILD);

function printDebugInfo() {
    console.log("VEX");
    console.log(Vex);
    console.log("FACTORY");
    console.log(Vex.Flow.Factory === Flow.Factory);
    console.log(Flow.Factory == Factory);
    console.log("STAVE");
    console.log(Vex.Flow.Stave === Flow.Stave);
    console.log(Flow.Stave === Stave);
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
