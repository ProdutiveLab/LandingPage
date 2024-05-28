/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "landingpage",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },

  async run() {

    new sst.aws.Nextjs("CTLandingPage", {
      // domain: "contatempo.com.br",
      domain: {
        name: $app.stage === "production" ? "contatempo.com.br" : undefined,
        aliases: $app.stage === "production" ? ["www.contatempo.com.br"] : undefined,
      }
    });
  },
});
