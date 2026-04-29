export interface AppStats {
    docs: number;
    users: number;
    shares: number;
}

export interface AppEntry {
    title: string;
    type: 'Workspace' | 'Community';
    date: string;
    image: string;
    stats: AppStats;
}

export const workspaceApps: AppEntry[] = [];

export const communityApps: AppEntry[] = [
    // --- Featured / Impressive Demos ---
    { title: "AI Power Builder", type: "Community", date: "Mar 28", image: "/OneFolio.png", stats: { docs: 45, users: 1200, shares: 3400 } },
    { title: "Mary Hardy Portfolio", type: "Community", date: "Mar 27", image: "/TwoFolio.png", stats: { docs: 22, users: 890, shares: 1560 } },
    { title: "Alex Clark Dev", type: "Community", date: "Mar 26", image: "/ThreeFolio.png", stats: { docs: 12, users: 450, shares: 890 } },
    { title: "Next-Gen AI Design", type: "Community", date: "Mar 25", image: "/FourFolio.png", stats: { docs: 30, users: 2100, shares: 4500 } },
    { title: "Magic UI Portfolio", type: "Community", date: "Mar 28", image: "", stats: { docs: 45, users: 1200, shares: 3400 } },
    { title: "Geeky", type: "Community", date: "Mar 27", image: "", stats: { docs: 22, users: 890, shares: 1560 } },
    { title: "Melon", type: "Community", date: "Mar 26", image: "", stats: { docs: 12, users: 450, shares: 890 } },
    { title: "Kross", type: "Community", date: "Mar 25", image: "", stats: { docs: 30, users: 2100, shares: 4500 } },
];
