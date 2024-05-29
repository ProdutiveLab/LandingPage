import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.contatempo.com.br/";

  return {
    rules: {
      userAgent: "*", // Define que essas regras se aplicam a todos os agentes de usuário (crawlers)
      allow: ["/"], // Permite o acesso aos diretórios raiz, blog, projects e articles do site
      disallow: [], // Não impõe restrições adicionais de acesso
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Define o local do sitemap.xml do site
  };
}