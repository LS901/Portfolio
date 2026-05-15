export const projectCaseStudies = {
    cadence: {
        slug: 'cadence',
        title: 'Cadence',
        heroImages: [
            '/images/projects/cadence/insights.png',
            '/images/projects/cadence/planner.png'
        ],
        eyebrow: 'Personal Project Case Study',
        pageDescription: 'Cadence is a reflective wellbeing and behavioral-tracking web app that helps users log mood, habits, planning, journaling, and life context, then turns that data into more trustworthy personal insights.',
        oneLineSummary: 'Cadence is a reflective wellbeing and behavioral-tracking web app that helps users log mood, habits, planning, journaling, and life context, then turns that data into more trustworthy personal insights.',
        shortPortfolioDescription: 'Cadence is a full-stack Next.js application designed around reflective self-tracking rather than productivity pressure. It combines mood logging, habit tracking, planning, journaling, life-event context, and insight generation into a single product experience. The app is built to help users notice patterns in their behavior and emotional state without using shame-driven mechanics or overconfident analysis.',
        heroHighlights: [
            {
                label: 'Product focus',
                value: 'Reflective wellbeing, habit formation, planning, journaling, and context-aware personal analytics.'
            },
            {
                label: 'Architecture',
                value: 'Next.js App Router, typed server modules, Prisma models, Auth.js, Zod, and a robust mock-backed demo path.'
            },
            {
                label: 'Build priority',
                value: 'Trustworthy insight framing over gamification, novelty, or exaggerated confidence.'
            }
        ],
        sections: [
            {
                id: 'overview',
                title: 'Full Project Overview',
                paragraphs: [
                    'Cadence is a personal analytics and reflection product built for people who want to better understand how their routines, emotions, and life circumstances interact over time.',
                    'Instead of treating mood, habits, journaling, and planning as separate tools, Cadence brings them together into one product loop.',
                    'The product is intentionally designed to feel reflective and supportive rather than clinical, gamified, or hyper-optimized. A major focus of the build was trust: insights should be evidence-aware, uncertainty should be visible, and the interface should avoid overstating what the data means.'
                ],
                bullets: [
                    'log mood and daily context',
                    'track habits and planned activities',
                    'capture journal reflections',
                    'record meaningful life events',
                    'surface higher-confidence patterns and summaries'
                ]
            },
            {
                id: 'problem',
                title: 'Problem It Solves',
                paragraphs: [
                    'Most self-tracking tools split mood, habits, journaling, and planning into disconnected experiences. That makes it hard to see the actual relationships between emotional state, daily behavior, and life context.',
                    'Cadence solves that by creating a unified system where the data stays connected and the resulting summaries are framed with appropriate evidence.'
                ],
                bullets: [
                    'mood logs can include contextual variables like sleep quality, work stress, and social quality',
                    'habits and planner activity can be compared against mood trends',
                    'journal entries can be grouped into story windows and themes',
                    'life events can be modeled as ongoing context rather than one-off notes',
                    'insights can show both stronger patterns and more exploratory signals with clear evidence framing'
                ]
            },
            {
                id: 'features',
                title: 'Core Features',
                subsections: [
                    {
                        title: 'Mood Tracking And Reflection',
                        bullets: [
                            'Quick mood capture directly from the dashboard',
                            'Full end-of-day reflection flow',
                            'Structured contextual inputs such as sleep quality, work stress, and social quality',
                            'Intraday mood periods with overlap protection so the day model stays consistent'
                        ]
                    },
                    {
                        title: 'Habit Tracking',
                        bullets: [
                            'Positive and limiting habits tracked separately',
                            'Daily logging with weekly consistency and streak-style feedback',
                            'Habit data feeds into broader reflection and insight surfaces'
                        ]
                    },
                    {
                        title: 'Planner And Activity Tracking',
                        bullets: [
                            'Planned and retrospective activity logging',
                            'Recurring activity support',
                            'Suggested planner experiments based on recent review patterns',
                            'Activity completion can be tied back to mood context'
                        ]
                    },
                    {
                        title: 'Journaling And Storytelling',
                        bullets: [
                            'Prompt-aware journaling instead of static note capture',
                            'Story windows that group related journal entries across a date range',
                            'Theme archive and drilldowns for repeated topics like stress, focus, or movement',
                            'Overlay comparisons between journal stories and dashboard or mood summaries'
                        ]
                    },
                    {
                        title: 'Life Event Context',
                        bullets: [
                            'Dedicated life-events surface instead of hiding context in other pages',
                            'Recurring life-event support',
                            'Ongoing and historical event modeling',
                            'Contextual weighting that can inform insight confidence'
                        ]
                    },
                    {
                        title: 'Insight Engine',
                        bullets: [
                            'Evidence-aware relationship analysis instead of simplistic pattern claims',
                            'Exploratory vs higher-confidence pattern framing',
                            'Lag-window analysis rather than only same-day comparisons',
                            'Context-adjusted insight presentation when confounding factors are present'
                        ]
                    },
                    {
                        title: 'Public Launch Safeguards',
                        bullets: [
                            'Credentials auth with demo fallback for mock-mode preview',
                            'Lightweight rate limiting on sign-in attempts',
                            'Public privacy page',
                            'Health endpoint for uptime monitoring'
                        ]
                    }
                ]
            },
            {
                id: 'philosophy',
                title: 'Product Philosophy',
                paragraphs: [
                    'Cadence was built around a few explicit product principles.'
                ],
                bullets: [
                    'Trust is more important than novelty.',
                    'Reflection is more important than streak pressure.',
                    'Insights should sound probabilistic, not diagnostic.',
                    'Users should be able to see uncertainty and sparse-data limits.',
                    'Life context should be treated as meaningful signal, not noise.'
                ]
            },
            {
                id: 'technical-overview',
                title: 'Technical Overview',
                paragraphs: [
                    'Cadence is a full-stack TypeScript application built with a server-first architecture.',
                    'The app uses Next.js App Router for routing and rendering, Prisma with PostgreSQL for persistence, Auth.js for authentication, and typed server actions and query modules to keep the business logic close to the data layer.',
                    'The frontend is built with React and Tailwind CSS, using reusable UI primitives and a feature-based folder structure. Validation is handled with Zod, and focused test coverage is already in place for important logic-heavy modules.'
                ]
            },
            {
                id: 'architecture',
                title: 'Architecture Summary',
                subsections: [
                    {
                        title: 'Frontend',
                        bullets: [
                            'Next.js App Router',
                            'React 19',
                            'TypeScript',
                            'Tailwind CSS',
                            'Reusable UI components under components/ui',
                            'Feature-based workspace components under features/**'
                        ]
                    },
                    {
                        title: 'Backend And Data Layer',
                        bullets: [
                            'Fully typed Next.js server-action and query module architecture',
                            'Prisma used for robust TypeScript model generation and schema definitions',
                            'Configured for PostgreSQL, but intentionally bypassed via a robust mock-adapter for the public portfolio to guarantee zero-latency and zero-downtime demonstration',
                            'Validation with Zod before logic execution'
                        ]
                    },
                    {
                        title: 'Authentication',
                        bullets: [
                            'Auth.js / NextAuth v5 beta',
                            'Credentials-based authentication',
                            'Fully configurable with @auth/prisma-adapter for live persistence, but defaulting to a hardcoded demo-user fallback to ensure instantaneous sandbox access',
                            'Lightweight JWT session strategy'
                        ]
                    },
                    {
                        title: 'Data Model',
                        paragraphs: [
                            'The schema models several connected entities and is designed to support both daily logging and more advanced cross-feature analysis.'
                        ],
                        bullets: [
                            'users',
                            'activities and activity templates',
                            'habits and habit logs',
                            'mood entries and mood periods',
                            'journal entries',
                            'life events and recurring life-event series',
                            'life-event day exposures',
                            'persisted insights'
                        ]
                    }
                ]
            },
            {
                id: 'tech-stack',
                title: 'Tech Stack',
                subsections: [
                    {
                        title: 'Core Framework',
                        bullets: [
                            'Next.js 16.2.5',
                            'React 19.2.4',
                            'TypeScript 5'
                        ]
                    },
                    {
                        title: 'Styling And UI',
                        bullets: [
                            'Tailwind CSS 4',
                            'shadcn/ui',
                            'Base UI',
                            'Lucide React',
                            'Framer Motion',
                            'next-themes',
                            'class-variance-authority',
                            'clsx',
                            'tailwind-merge',
                            'tw-animate-css'
                        ]
                    },
                    {
                        title: 'Forms And Validation',
                        bullets: [
                            'React Hook Form',
                            'Zod',
                            '@hookform/resolvers'
                        ]
                    },
                    {
                        title: 'Backend, Auth, And Data Schema',
                        bullets: [
                            'Prisma 7 for explicit TypeScript model generation',
                            '@prisma/client',
                            'Auth.js / NextAuth v5 beta',
                            'Zod for form processing'
                        ]
                    },
                    {
                        title: 'Data And Visualization',
                        bullets: [
                            'Recharts',
                            'date-fns'
                        ]
                    },
                    {
                        title: 'Tooling',
                        bullets: [
                            'ESLint 9',
                            'tsx for tests and TypeScript execution'
                        ]
                    }
                ]
            },
            {
                id: 'engineering-decisions',
                title: 'Notable Engineering Decisions',
                subsections: [
                    {
                        title: 'Server-First Feature Design',
                        paragraphs: [
                            'Most product data is fetched on the server through page-specific query modules and passed into feature workspaces. That keeps business logic close to the data layer and reduces unnecessary client state complexity.'
                        ]
                    },
                    {
                        title: 'Context-Aware Insight Framing',
                        paragraphs: [
                            'Rather than presenting raw correlation-style output as truth, the insight engine distinguishes between stronger signals and exploratory patterns and adjusts messaging when contextual confounding is present.'
                        ]
                    },
                    {
                        title: 'Unified Reflection Loop',
                        paragraphs: [
                            'The dashboard, mood, planner, habits, journal, and insights surfaces are intentionally connected so the app behaves like one product rather than a bundle of separate tools.'
                        ]
                    },
                    {
                        title: 'Zero-Downtime Public Demo Architecture',
                        paragraphs: [
                            'To ensure the portfolio piece is always fast, reliable, and immune to database timeouts, the app operates entirely on a statically defined mock data layer. The original DB queries were decoupled, and the application now successfully hydrates the entire unified reflection loop directly from memory. This guarantees an optimal user experience when reviewing the interface concepts.'
                        ]
                    }
                ]
            },
            {
                id: 'what-i-built',
                title: 'What I Built',
                paragraphs: [
                    'I designed and built Cadence as a frontend product engineering showcase, covering product strategy, data modeling schemas, frontend UX, robust client and server boundary validation, typed stateless authentication, and public-launch safeguards.',
                    'I decoupled the live database overhead in favor of a rock-solid mock implementation so users can purely evaluate how the UI handles context, data representation, and reflection logic without friction.'
                ]
            },
            {
                id: 'challenges',
                title: 'Key Challenges Solved',
                subsections: [
                    {
                        title: 'Modeling Context In A Useful Way',
                        paragraphs: [
                            'It is easy to collect life context badly. Cadence needed structured context that improved insight quality without forcing heavy manual entry. The solution was to keep the inputs small, high-signal, and tied directly to later analysis.'
                        ]
                    },
                    {
                        title: 'Preventing Misleading Insights',
                        paragraphs: [
                            'A major challenge was avoiding shallow or overconfident pattern claims. The insight system was shaped to surface evidence levels, exploratory framing, lag windows, and context-aware adjustments instead of pretending the product could make strong causal claims.'
                        ]
                    },
                    {
                        title: 'Connecting Multiple Product Surfaces Cleanly',
                        paragraphs: [
                            'Cadence combines mood, habits, planner activity, journaling, and life events. One of the main implementation challenges was building those as connected workflows rather than isolated feature pages.'
                        ]
                    },
                    {
                        title: 'Preparing A Real Public Demo',
                        paragraphs: [
                            'The project needed to be portfolio-ready, not just locally impressive. That meant adding rate limiting, privacy notes, a health endpoint, testing plans, and a practical deployment checklist alongside the main features.'
                        ]
                    }
                ]
            },
            {
                id: 'quality',
                title: 'Quality And Reliability',
                paragraphs: [
                    'The implementation already includes focused hardening work in the logic-heavy parts of the product and a testing strategy shaped around public launch quality.'
                ],
                bullets: [
                    'unit-style tests for logic-heavy modules',
                    'repository-wide linting',
                    'successful production build validation',
                    'input validation with Zod across core flows',
                    'public-launch safeguards such as auth throttling and health checks',
                    'a staged testing plan covering unit, integration, acceptance, validation, and smoke testing'
                ]
            },
            {
                id: 'operations',
                title: 'Deployment And Operations',
                paragraphs: [
                    'Cadence is set up for a lightweight public portfolio deployment and already has the operational groundwork needed for a reliable demo.',
                    'The project was prepared for public launch with lightweight operational safeguards, including auth protection, privacy notes, health monitoring infrastructure, and a documented deployment workflow.'
                ],
                bullets: [
                    'privacy page',
                    'health endpoint at /api/health',
                    'credentials auth throttling',
                    'deployment checklist',
                    'monitoring setup guide'
                ]
            },
            {
                id: 'next',
                title: 'What I Would Build Next',
                bullets: [
                    'Richer insight explainability views that show the evidence trail behind each surfaced pattern',
                    'More guided weekly and monthly review loops that turn reflection history into concrete experiments',
                    'A gradual transition from the mock-backed public demo into a live alpha environment for authenticated testers',
                    'Exportable reports and summaries that make reflection history easier to revisit over longer time ranges'
                ]
            }
        ]
    },
    parkpulse: {
        slug: 'parkpulse',
        title: 'ParkPulse',
        heroImages: [
            '/images/projects/parkpulse/secondary.png'
        ],
        eyebrow: 'Personal Project Case Study',
        pageDescription:
            'ParkPulse is a UK theme park crowd prediction and visit planner that turns weather, school holidays, events, ride launches, and operating calendars into a transparent crowd index, hourly curve, per-ride queue estimates, and a personalised day itinerary for Alton Towers, Thorpe Park, Chessington, and LEGOLAND Windsor.',
        oneLineSummary:
            'ParkPulse predicts how busy a UK theme park will be on any given day and turns that prediction into a personalised, weather-aware itinerary.',
        shortPortfolioDescription:
            'ParkPulse is a full-stack TypeScript application that combines a typed Express prediction API with a React + Vite planner UI. It models multiple weighted demand signals — weather, school holidays, bank holidays, park events, ride launches, daylight, ticket pricing, and historical accuracy — to produce a 0–100 crowd index, an hourly crowd curve, per-ride queue estimates, and a customisable day-by-day itinerary across four UK theme parks.',
        heroHighlights: [
            {
                label: 'Product focus',
                value: 'UK theme park crowd prediction, multi-park comparison, and a personalised, weather-aware day planner.'
            },
            {
                label: 'Architecture',
                value: 'TypeScript monorepo with an Express + Zod prediction API, a React + Vite + Tailwind planner UI, and a self-calibrating prediction log.'
            },
            {
                label: 'Build priority',
                value: 'Transparent, explainable predictions over black-box scoring — every crowd index ships with a weighted factor breakdown and a confidence value.'
            }
        ],
        sections: [
            {
                id: 'overview',
                title: 'Full Project Overview',
                paragraphs: [
                    'ParkPulse is a planning tool for UK theme park visitors who want to pick the quietest day, the right park, and the smartest order to ride attractions in.',
                    'Instead of guessing whether a Tuesday in October will be quieter than the Saturday after, ParkPulse takes a park and date and returns a 0–100 crowd index, a confidence value, an hourly crowd curve, per-ride queue estimates, and a personalised itinerary for the day.',
                    'The product spans three planning modes — single date, date range, and multi-park — all backed by the same scoring engine, so a user can move from "is this day busy?" to "which day in this window is quietest?" to "which park should I pick?" without changing tools.'
                ],
                bullets: [
                    'predict crowd levels for a specific park and date',
                    'rank a window of dates from quietest to busiest',
                    'compare all four parks on the same date',
                    'generate a personalised, weather-aware ride itinerary',
                    'log every prediction and self-calibrate from recorded actuals'
                ]
            },
            {
                id: 'problem',
                title: 'Problem It Solves',
                paragraphs: [
                    'UK theme park visitors currently rely on rough rules of thumb — "avoid school holidays", "pick a Tuesday", "check the weather" — without any tool that combines those signals into a single, defensible prediction for a specific park on a specific date.',
                    'ParkPulse solves that by unifying operating calendars, school and bank holidays, weather forecasts, seasonal events, ride launches, and pricing tiers into one weighted scoring engine, then exposing every contributing factor so the user can see why a day was scored the way it was.'
                ],
                bullets: [
                    'crowd index combines calendar, weather, holiday, event, and ride-launch signals into one score',
                    'date-range mode ranks every day in a window so users can pick the quietest one',
                    'multi-park mode picks the best park to visit on a fixed date',
                    'itinerary planner converts the prediction into an actual order of rides',
                    'every prediction is explained with weighted factors instead of a black-box score'
                ]
            },
            {
                id: 'features',
                title: 'Core Features',
                subsections: [
                    {
                        title: 'Single-Date Prediction',
                        bullets: [
                            '0–100 crowd index with a confidence value',
                            'Operating status detection (open, closed, likely-closed, event-only)',
                            'Weighted factor breakdown so every score is explainable',
                            'Per-category queue bands (thrill, family, water, indoor, children)',
                            'Pricing tier estimate (off-peak, standard, peak, super-peak)'
                        ]
                    },
                    {
                        title: 'Date-Range And Multi-Park Comparison',
                        bullets: [
                            'Rank every date in a chosen window from quietest to busiest',
                            'One-click jump from a ranked date into its full prediction',
                            'Compare all four parks on the same date in a single view',
                            'Highlights the best park or best day automatically'
                        ]
                    },
                    {
                        title: 'Hourly Crowd Curve',
                        bullets: [
                            'Hour-by-hour crowd multiplier across the operating window',
                            'Detected peak hour and quietest hour for the day',
                            'Strategic advice (e.g. "hit headline rides first thing", "use the lunch lull")'
                        ]
                    },
                    {
                        title: 'Per-Ride Queue Estimates',
                        bullets: [
                            'Estimated wait minutes and queue band per ride',
                            'Single-rider queue estimates where supported',
                            'Adjusts for school holidays and rainy-day demand redistribution'
                        ]
                    },
                    {
                        title: 'Personalised Itinerary Planner',
                        bullets: [
                            'Day type presets — everything, thrill seeker, family, kids',
                            'Entrance choice — main gate or hotel entrance',
                            'Pace control — relaxed, normal, or packed',
                            'Ease-into-the-day option that delays headline rides',
                            'Configurable lunch break hour',
                            'Skip-list and must-ride list by ride name',
                            'Single-rider preference toggle',
                            'Hour-by-hour slots with per-ride wait, duration, and tip'
                        ]
                    },
                    {
                        title: 'Self-Calibrating Prediction Log',
                        bullets: [
                            'Every prediction is appended to a JSONL log',
                            'Endpoint to record observed actual crowd index for a park/date',
                            'Accuracy stats endpoint exposes mean error over time',
                            'Calibration multipliers feed back into future scoring'
                        ]
                    },
                    {
                        title: 'Premium Tier Gating',
                        bullets: [
                            'Token-based premium middleware on the Express API',
                            'Free tier exposes prediction, queue bands, and hourly curve',
                            'Premium tier unlocks per-ride estimates and full itinerary planning',
                            'Designed to slot into a real payment provider later without route changes'
                        ]
                    }
                ]
            },
            {
                id: 'philosophy',
                title: 'Product Philosophy',
                paragraphs: [
                    'ParkPulse was built around a small set of explicit product principles.'
                ],
                bullets: [
                    'Predictions must be explainable, not magical — every score ships with its weighted factors.',
                    'Confidence is a first-class value, not a hidden assumption.',
                    'Planning beats prediction — a number is only useful if it produces a better day.',
                    'Calibration matters — the system must learn from recorded actuals over time.',
                    'Personalisation should be opinionated but overridable through skip and must-ride lists.'
                ]
            },
            {
                id: 'technical-overview',
                title: 'Technical Overview',
                paragraphs: [
                    'ParkPulse is a TypeScript monorepo organised as an npm workspace with a server (Express prediction API) and a web (React + Vite planner UI) package.',
                    'The API exposes a small surface of typed POST and GET endpoints under /api/predictions, validates every request body with Zod, and composes its predictions from a set of focused service modules — one per signal — that each contribute weighted factors to the final score.',
                    'The web app is a single-page React 18 + Vite application styled with Tailwind CSS and DaisyUI, using Radix Themes and Lucide icons for primitives. It drives all three planning modes (single date, date range, multi-park) from one UI shell.'
                ]
            },
            {
                id: 'architecture',
                title: 'Architecture Summary',
                subsections: [
                    {
                        title: 'Frontend',
                        bullets: [
                            'React 18 + Vite + TypeScript',
                            'Tailwind CSS 3 with DaisyUI components',
                            'Radix UI Themes and Radix Icons',
                            'Lucide React for additional iconography',
                            'Single-page planner with tabbed single / range / compare modes'
                        ]
                    },
                    {
                        title: 'Backend And Data Layer',
                        bullets: [
                            'Express 4 API with CORS and JSON middleware',
                            'Zod schemas validate every request body before logic runs',
                            'Feature-per-file service modules under server/src/services',
                            'Prediction log persisted as JSONL for transparent calibration',
                            'Vercel serverless adapter (api/index.ts) re-exports the same Express app'
                        ]
                    },
                    {
                        title: 'Prediction Engine',
                        paragraphs: [
                            'The scoring engine combines a per-park baseline with weighted contributions from each signal module, then applies learned calibration multipliers before returning a 0–100 crowd index, a confidence value, and a factor breakdown.'
                        ],
                        bullets: [
                            'bankHolidays — England and Wales bank holiday detection',
                            'schoolHolidays — multi-region UK school term modelling',
                            'weather + climateNormals — short-range forecast and 10-year fallback',
                            'parkEvents — Scarefest, Fright Nights, and seasonal uplift',
                            'rideLaunches — new headline ride demand boost',
                            'operatingCalendar — open / closed / event-only status',
                            'ticketPricing — pricing tier as both signal and output',
                            'daylight — daylight hours as a soft demand signal',
                            'historicalComparison — comparison against same-period prior years',
                            'weightCalibration — applies multipliers learned from actuals',
                            'hourlyCurve — derives the hourly crowd shape',
                            'rideDatabase + itineraryPlanner — per-ride queues and day plan'
                        ]
                    },
                    {
                        title: 'Premium Gating',
                        bullets: [
                            'Token-based middleware (extractPremiumTier, requirePremium)',
                            'Tokens read from PREMIUM_TOKENS env var with a sensible dev default',
                            'stripPremiumFields helper for downgrading responses cleanly',
                            'Designed so premium logic lives in middleware, not in route bodies'
                        ]
                    }
                ]
            },
            {
                id: 'tech-stack',
                title: 'Tech Stack',
                subsections: [
                    {
                        title: 'Core Languages And Runtimes',
                        bullets: [
                            'TypeScript 5',
                            'Node.js (Express runtime + Vercel serverless target)',
                            'npm workspaces monorepo layout'
                        ]
                    },
                    {
                        title: 'Backend',
                        bullets: [
                            'Express 4',
                            'Zod for request validation',
                            'CORS and dotenv',
                            'ts-node-dev for fast iteration',
                            'Vitest for unit testing'
                        ]
                    },
                    {
                        title: 'Frontend',
                        bullets: [
                            'React 18 + React DOM',
                            'Vite 5 with @vitejs/plugin-react-swc',
                            'Tailwind CSS 3 + DaisyUI 5',
                            'Radix UI Themes + Radix Icons',
                            'Lucide React'
                        ]
                    },
                    {
                        title: 'Tooling And Deployment',
                        bullets: [
                            'Vercel for hosting (static web build + serverless API entrypoint)',
                            'PostCSS + Autoprefixer',
                            'JSONL prediction log for calibration data'
                        ]
                    }
                ]
            },
            {
                id: 'engineering-decisions',
                title: 'Notable Engineering Decisions',
                subsections: [
                    {
                        title: 'One Service Module Per Signal',
                        paragraphs: [
                            'Every demand signal — bank holidays, school holidays, weather, events, ride launches, daylight, pricing — lives in its own typed module under server/src/services. The scoring module composes them, which keeps each signal independently testable and makes it cheap to add or replace one without touching the rest.'
                        ]
                    },
                    {
                        title: 'Explainable Predictions By Default',
                        paragraphs: [
                            'Rather than returning a single number, every prediction ships with an explanation containing a summary and a list of weighted PredictionFactor objects. The API never produces a score without also producing the reasons for that score.'
                        ]
                    },
                    {
                        title: 'Self-Calibration From A JSONL Log',
                        paragraphs: [
                            'A POST /record-actual endpoint lets observed crowd levels be matched back to the prediction that produced them. The prediction log feeds a calibration module that adjusts future weight multipliers, so the system improves with use rather than depending on a one-shot training run.'
                        ]
                    },
                    {
                        title: 'Itinerary As A First-Class Output',
                        paragraphs: [
                            'A crowd index alone does not help a visitor plan their day. The itinerary planner consumes the same prediction (crowd index, hourly curve, weather, school-holiday flag) plus user preferences and produces a slot-by-slot ride plan, which is what the user actually came for.'
                        ]
                    },
                    {
                        title: 'Single Express App, Two Deployment Targets',
                        paragraphs: [
                            'The Express app is exported from server/src/app.ts and consumed both by the local dev server (server/src/index.ts) and by a Vercel serverless function (api/index.ts that simply re-exports the app). vercel.json rewrites /api/* and /health to that function and serves the Vite build for everything else, so one app definition powers both environments.'
                        ]
                    },
                    {
                        title: 'Premium As Middleware, Not Branching Logic',
                        paragraphs: [
                            'Premium gating is implemented as Express middleware with a stripPremiumFields helper, so route handlers stay focused on prediction logic and the gating model can be swapped for a real payment provider without rewriting endpoints.'
                        ]
                    }
                ]
            },
            {
                id: 'what-i-built',
                title: 'What I Built',
                paragraphs: [
                    'I designed and built ParkPulse end-to-end: the product concept, the source register and ingestion plan, the weighted scoring model, the per-signal service modules, the Express + Zod API, the React + Vite planner UI, the itinerary planner, the calibration loop, and the Vercel deployment configuration.',
                    'The work spans product strategy (deciding which signals matter and how to combine them), backend engineering (typed services, validation, logging, and serverless deployment), and frontend engineering (a single-page planner that exposes three different planning modes through one cohesive UI).'
                ]
            },
            {
                id: 'challenges',
                title: 'Key Challenges Solved',
                subsections: [
                    {
                        title: 'Combining Many Weak Signals Into One Defensible Score',
                        paragraphs: [
                            'No single input — weather, school holidays, events — predicts crowds on its own. The challenge was assembling a weighted model where each signal contributes a transparent, bounded factor, and where the final crowd index can be defended by pointing at the factor breakdown rather than at a black-box number.'
                        ]
                    },
                    {
                        title: 'Going From Prediction To Plan',
                        paragraphs: [
                            'Predicting a crowd index is only half the job; the user actually wants to know which ride to do at 10am. The itinerary planner had to consume the hourly curve, weather, school-holiday context, and a small set of user preferences (day type, pace, ease-in, lunch break, skip and must-ride lists) and produce a coherent slot-by-slot plan.'
                        ]
                    },
                    {
                        title: 'Closing The Loop With Calibration',
                        paragraphs: [
                            'Static weights drift. Building a JSONL prediction log, a record-actual endpoint, and a weight-calibration module meant the system could learn from observed reality instead of depending on a one-time tuning pass.'
                        ]
                    },
                    {
                        title: 'One Codebase, Local Dev And Serverless',
                        paragraphs: [
                            'The Express app needed to run as a normal Node server during development and as a Vercel serverless function in production without duplicating route definitions. Splitting app, server entrypoint, and serverless adapter into three thin files (app.ts, index.ts, api/index.ts) solved that cleanly.'
                        ]
                    }
                ]
            },
            {
                id: 'quality',
                title: 'Quality And Reliability',
                paragraphs: [
                    'Quality work in ParkPulse is concentrated in the logic-heavy parts of the prediction engine, where errors are hardest to spot by eye.'
                ],
                bullets: [
                    'Vitest unit tests for hourlyCurve, operatingCalendar, rideDatabase, rideLaunches, schoolHolidays, scoring, and ticketPricing',
                    'Zod request validation on every API endpoint',
                    'Typed PredictionFactor and SingleDatePrediction shapes shared between API and UI',
                    'Per-park baselines and bounded factor weights to prevent runaway scores',
                    'Health endpoint at /health for uptime monitoring',
                    'JSONL prediction log enabling after-the-fact accuracy analysis'
                ]
            },
            {
                id: 'operations',
                title: 'Deployment And Operations',
                paragraphs: [
                    'ParkPulse is set up for low-cost public deployment on Vercel, with the static planner and the Express API served from the same project.',
                    'A vercel.json file rewrites /api/* and /health to the serverless adapter and serves the Vite build for everything else, so the whole product ships as a single deployment.'
                ],
                bullets: [
                    'Vercel deployment configured via vercel.json (build, output, rewrites)',
                    '/health endpoint for uptime checks',
                    'PREMIUM_TOKENS environment variable for premium-tier access',
                    'Local dev split across npm run dev:api (port 4000) and npm run dev:web (port 5173)',
                    'Source register (docs/source-register.md) tracking every planned data source and its approval status'
                ]
            },
            {
                id: 'next',
                title: 'What I Would Build Next',
                bullets: [
                    'Live ingestion of the planned sources in the source register (operating calendars, planned closures, events) to replace the current modelled defaults',
                    'A historical accuracy dashboard surfacing the JSONL prediction log and calibration trends in the UI',
                    'User accounts so saved itineraries, must-ride lists, and recorded actuals can persist across visits',
                    'Mobile-first itinerary view with on-the-day check-offs and live re-planning when a ride goes down',
                    'Expansion beyond the four MVP parks to additional UK and European destinations'
                ]
            }
        ]
    }
};

export const getProjectCaseStudyBySlug = (slug) => projectCaseStudies[slug] || null;

export const getProjectCaseStudySlugs = () => Object.keys(projectCaseStudies);