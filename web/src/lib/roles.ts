export type RoleId = "estratega" | "contenidos" | "growth" | "revops";

export const roles: Record<
  RoleId,
  {
    id: RoleId;
    rolNumber: string;
    title: string;
    subtitle: string;
    color: string;
    colorOnDark: string;
    presenter?: string;
  }
> = {
  estratega: {
    id: "estratega",
    rolNumber: "ROL 01",
    title: "Estratega Digital",
    subtitle: "CMO · Chief Marketing Officer",
    color: "var(--color-atratus-verde)",
    colorOnDark: "#7fb88f",
  },
  contenidos: {
    id: "contenidos",
    rolNumber: "ROL 02",
    title: "Director de Contenidos",
    subtitle: "Community & Brand Storyteller",
    color: "var(--color-beige-natural)",
    colorOnDark: "#dcc99f",
  },
  growth: {
    id: "growth",
    rolNumber: "ROL 03",
    title: "Head of Growth",
    subtitle: "Performance & Paid Media",
    color: "var(--color-deep-blue)",
    colorOnDark: "#7c9ed8",
  },
  revops: {
    id: "revops",
    rolNumber: "ROL 04",
    title: "Director de Revenue Ops",
    subtitle: "RevOps · CRM & Automatización",
    color: "var(--color-seagreen)",
    colorOnDark: "#9fc7b9",
  },
};
