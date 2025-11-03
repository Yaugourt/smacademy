SM Academy – site vitrine (Next.js 16 + Tailwind 4).

## Démarrage

```bash
npm run dev
```

## Variables d’environnement

Créez un fichier `.env.local` en vous basant sur `.env.example`.

- `RESEND_API_KEY`: clé API Resend pour l’envoi d’emails
- `CONTACT_TO_EMAIL`: adresse destinataire des formulaires
- `CONTACT_FROM_EMAIL`: adresse expéditeur (ex: no-reply@smacademy.fr)

## Architecture

- Pages: `src/app` (Accueil, Formations, [slug])
- Données: `src/data/formations.ts`
- UI: `src/components/ui/*` (shadcn), Header/Footer, formulaires
- API: `src/app/api/contact/route.ts` (zod, rate limit, honeypot, Resend)
- SEO: `metadata`, `robots.ts`, `sitemap.ts`, JSON-LD

## Sécurité

- CSP/headers dans `next.config.ts`
- Validation serveur (zod), limite de débit, honeypot

## Déploiement

Vercel recommandé. Pensez à ajouter les variables d’environnement.
