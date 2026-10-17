import { describe, expect, it } from "vitest";
import { mechanicalServices, mechanicalWhatsAppUrl } from "@/data/mechanicalServices";

describe("Owner-confirmed mechanical service enquiries", () => {
  it.each([
    ["shocks", "/troca-de-amortecedores-conselheiro-lafaiete", "Olá! Gostaria de um orçamento para troca de amortecedores na Auto Prime."],
    ["suspension", "/oficina-de-suspensao-conselheiro-lafaiete", "Olá! Gostaria de um orçamento para avaliação e manutenção da suspensão na Auto Prime."],
    ["hydraulic", "/direcao-hidraulica-conselheiro-lafaiete", "Olá! Gostaria de um orçamento para avaliação e reparo da direção hidráulica na Auto Prime."],
  ])("sends %s enquiries to the existing contact and dedicated destination", (id, path, message) => {
    const service = mechanicalServices.find((item) => item.id === id);
    if (!service) throw new Error(`Missing confirmed service: ${id}`);
    expect(service.path).toBe(path);
    const url = new URL(mechanicalWhatsAppUrl(service));
    expect(url.origin + url.pathname).toBe("https://wa.me/5531988480488");
    expect(url.searchParams.get("text")).toBe(message);
  });
});