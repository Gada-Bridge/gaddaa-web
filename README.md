This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# gaddaa-web

> The face of Gaddaa — a financial operating system for the working class, built on Stellar.

---

## What This Is

`gaddaa-web` is the Next.js frontend for Gaddaa. It is what the user touches. Every screen, every tap, every naira balance displayed here is powered by the `gaddaa-api` backend talking to the Stellar blockchain underneath.

The design principle is simple: **this should feel like a bank app, not a crypto app.** Users see naira. They see goal names like "School Fees" and "New Laptop." They see their Ajo group contributions with green ticks and red warnings. They never see a wallet address, a transaction hash, or the word "blockchain" unless they go looking for it.

Built mobile-first. Optimised for Android users on mid-range devices in Nigeria. Every touch target is large. Every screen works on a 5-inch screen with a cracked protector.

---

## What This Frontend Covers

### Onboarding
Phone-number-based registration and login. OTP verification. No email required. No crypto knowledge required. Just a phone number and a PIN.

### Dashboard
The home screen. Wallet balance in naira front and centre. Quick actions for Send, Save, and Ajo. Recent transaction feed at the bottom. Clean, confident, no clutter.

### Wallet
Full wallet management. Fund via virtual account number (copy-and-paste bank transfer details). Send to any phone number on Gaddaa or any Stellar address. Withdraw to any Nigerian bank account. Transaction history with filters.

### Save
Goal-based savings. Create a goal with a name, target amount, and unlock date. Watch the progress bar move each time you contribute. See the yield your locked funds are earning in real time. Break a goal early if you must — but you will see the penalty before you confirm.

### Ajo
Group savings circles. Create a group, set the contribution amount and maturity date, invite members by phone. See every member's contribution status at a glance. On maturity day, watch the contract distribute — principal to everyone, interest jackpot to the perfect payers only.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State Management | Zustand |
| Server State / Caching | TanStack Query (React Query) |
| Forms | React Hook Form + Zod |
| HTTP Client | Axios |
| Icons | Lucide React |
| Charts / Progress | Recharts |
| Animations | Framer Motion |
| Testing | Jest + React Testing Library |
| Linting | ESLint + Prettier |

---

## Project Structure

```
gaddaa-web/
├── app/
│   ├── (auth)/
│   │   ├── register/        # phone registration + OTP
│   │   └── login/           # login + PIN entry
│   ├── (dashboard)/
│   │   ├── page.tsx         # home dashboard
│   │   ├── wallet/          # wallet, send, withdraw, history
│   │   ├── save/            # goals list, create goal, goal detail
│   │   └── ajo/             # groups list, create group, group detail
│   └── layout.tsx           # root layout with bottom nav
├── components/
│   ├── ui/                  # base components — buttons, inputs, cards, modals
│   ├── wallet/              # wallet-specific components
│   ├── save/                # savings-specific components
│   └── ajo/                 # ajo-specific components
├── lib/
│   ├── api/                 # axios instance + API call functions
│   ├── store/               # zustand stores (auth, wallet state)
│   └── utils/               # formatters, naira display, date helpers
├── hooks/                   # custom React hooks
├── types/                   # TypeScript interfaces and types
└── public/                  # static assets, icons, images
```

---

## Getting Started

### Prerequisites
- Node.js 20+
- `gaddaa-api` running locally (see that repo's README)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/gaddaa-web.git
cd gaddaa-web

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in your values

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
NEXT_PUBLIC_APP_NAME=Gaddaa
NEXT_PUBLIC_STELLAR_NETWORK=testnet
```

---

## Screen Map

```
/                          → redirect to /dashboard or /login
/(auth)/register           → phone number entry → OTP → PIN setup
/(auth)/login              → phone number → PIN → dashboard

/(dashboard)               → home — balance card + quick actions + recent transactions
/(dashboard)/wallet        → wallet overview
/(dashboard)/wallet/send   → send money flow
/(dashboard)/wallet/fund   → show virtual account details
/(dashboard)/wallet/withdraw → offramp to bank account

/(dashboard)/save          → list of savings goals
/(dashboard)/save/new      → create a new goal
/(dashboard)/save/[id]     → goal detail — progress, yield, break option

/(dashboard)/ajo           → list of Ajo groups
/(dashboard)/ajo/new       → create a new group
/(dashboard)/ajo/join      → join via invite code
/(dashboard)/ajo/[id]      → group detail — members, contributions, countdown
```

---

## Design System

**Brand Colors**
```
Primary Green   #1A6B3A    — main brand, CTAs, active states
Gold Accent     #F9A825    — highlights, yield display, perfect payer badge
Dark            #1C1C1C    — primary text
Gray            #555555    — secondary text
Surface         #F5F5F5    — background, card fills
White           #FFFFFF    — card backgrounds
```

**Design Principles**
- Mobile-first. Design for a 390px wide screen. Desktop is secondary.
- Large touch targets. Minimum 48px tap area on all interactive elements.
- Naira first. All amounts display in ₦ with comma formatting (₦5,000 not 5000).
- No crypto jargon in the UI. "Your savings are earning" not "AMM yield accruing."
- Confirmation before any destructive action. Break-lock, withdrawal, leaving a group — always a confirm screen.
- Empty states are not dead ends. Every empty list has a clear CTA to get started.

---

## Key Engineering Decisions

**App Router over Pages Router**
Next.js App Router gives us React Server Components, better layouts, and cleaner route grouping. The `(auth)` and `(dashboard)` route groups let us apply different layouts (no nav for auth, bottom nav for dashboard) without extra wrapper components.

**Zustand for client state**
Auth tokens, user profile, and wallet balance live in Zustand stores that persist to localStorage. Lightweight, no boilerplate, TypeScript-friendly.

**TanStack Query for server state**
All API data — transactions, goals, Ajo groups — is managed by TanStack Query. It handles caching, background refetching, loading states, and error states so we don't roll our own.

**Zod for validation everywhere**
All form inputs validated with Zod schemas before hitting the API. Same schemas used on the backend via `gaddaa-api`. Single source of truth for data shapes.

**Amounts as integers in state, formatted on display**
Following the backend convention — amounts stored and passed as integers (kobo). A utility function `formatNaira(kobo: number)` handles the conversion and formatting everywhere amounts are displayed.

---

## Contributing

This project is part of the Stellar Drips wave. Contributors are welcome across:

- **UI components** — building out the component library in `components/ui/`
- **Screen implementation** — wiring up screens to the API using TanStack Query
- **State management** — Zustand stores for auth, wallet, and app state
- **Animations** — Framer Motion transitions between screens and loading states
- **Testing** — React Testing Library tests for components and flows

Read this README fully before picking up an issue. Understand the three modules and the screen map. Before touching any payment or wallet screens, make sure `gaddaa-api` is running locally and you can see data flowing end to end.

Open an issue before submitting a large PR.

---

## Related Repos

| Repo | Description |
|---|---|
| [gaddaa-api](https://github.com/your-username/gaddaa-api) | Node.js backend — wallets, savings, Ajo logic, Stellar integration |
| [gaddaa-contracts](https://github.com/your-username/gaddaa-contracts) | Soroban smart contracts — Savings Vault and Ajo Escrow |

---

## License

MIT — build freely, give credit.

---

*Built in Nigeria. For the working class. On Stellar.*