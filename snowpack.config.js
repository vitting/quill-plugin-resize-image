/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    ["@snowpack/plugin-typescript"],
    ["snowpack-plugin-raw", { extensions: [".svg"] }]
  ],
  optimize: {
    // bundle: true,
    // treeshake: true,
    // splitting: true,
    // target: "es2018",
    // entrypoints: ["./src/imageResize.ts"]  
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    // sourcemap: true
  },
};
