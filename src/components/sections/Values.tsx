import { Handshake, Users, Sparkles, Trophy } from "lucide-react";

const VALUES = [
  { index: 1, title: "Proximité", desc: "Être disponible et accessible, écoute et communication ouverte.", Icon: Handshake },
  { index: 2, title: "Accompagnement personnalisé", desc: "Suivi individualisé selon objectifs, compétences et parcours.", Icon: Users },
  { index: 3, title: "Innovation pédagogique", desc: "Méthodes et outils modernes, interactifs et engageants.", Icon: Sparkles },
  { index: 4, title: "Excellence", desc: "Qualité du contenu et de l’expérience d’apprentissage.", Icon: Trophy },
];

export default function ValuesAccordion() {
  return (
    <div className="divide-y rounded-xl border">
      {VALUES.map(({ index, title, desc, Icon }) => (
        <details key={title} className="group p-4 open:bg-secondary/30">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-foreground/80">{index}</span>
            <span className="flex-1">{title}</span>
            <Icon className="h-4 w-4 opacity-70 transition-transform group-open:rotate-12" />
          </summary>
          <p className="mt-2 text-xs text-muted-foreground">{desc}</p>
        </details>
      ))}
    </div>
  );
}


