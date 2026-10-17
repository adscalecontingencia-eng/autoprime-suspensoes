import { describe, expect, it } from "vitest";
import { wheelServices, serviceWhatsAppUrl } from "@/data/wheelServices";

describe("Owner-confirmed wheel services", () => {
  it("offers 3D alignment at its dedicated commercial route", () => {
    expect(wheelServices.find((service) => service.id === "alignment")?.path).toBe("/alinhamento-3d-conselheiro-lafaiete");
  });
  it("offers wheel balancing at its dedicated commercial route", () => {
    expect(wheelServices.find((service) => service.id === "balancing")?.path).toBe("/balanceamento-de-rodas-conselheiro-lafaiete");
  });
  it.each([
    ["alignment", "Olá! Gostaria de orçamento de alinhamento 3D na Auto Prime."],
    ["balancing", "Olá! Gostaria de orçamento de balanceamento de rodas na Auto Prime."],
  ])("routes %s enquiries to the existing WhatsApp with the service-specific message", (id, message) => {
    const service = wheelServices.find((item) => item.id === id);
    expect(service).toBeDefined();
    if (!service) throw new Error("Missing confirmed service");
    const url = new URL(serviceWhatsAppUrl(service));
    expect(url.origin + url.pathname).toBe("https://wa.me/5531988480488");
    expect(url.searchParams.get("text")).toBe(message);
  });
});