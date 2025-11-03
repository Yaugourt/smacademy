import Link from "next/link";
import { formations } from "@/data/formations";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Formations",
  description:
    "Découvrez nos formations: SST, IRVE, Fibre optique D3, Gestes & Postures, Pack Office, Formation de formateur.",
};

export default function FormationsPage() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Formations</h1>
      <p className="mt-2 text-muted-foreground">
        Des parcours courts et professionnalisants, animés par un formateur certifié.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {formations.map((f) => (
          <Card key={f.slug} className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{f.summary}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{f.city}</Badge>
                {f.tags?.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href={`/formations/${f.slug}`}
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Voir la formation
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


