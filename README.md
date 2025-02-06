# Multi-Step Booking Form

A multi-step booking form built with React, TypeScript, Vite, and TailwindCSS, allowing users to schedule cargo shipments efficiently.

### N.B:
This project is minimal and only to demonstrate the multi-step form feature and it's validations. This implication of this is that, only a single page was used, no routing library like react-router was used and and no api call at all.

## Features
- Step-by-step form navigation
- Cargo details input (weight, dimensions, type)
- Shipping options (priority, insurance, special instructions)
- Dynamic cost calculation
- Confirmation page with printable summary

## Technologies and Library Used
- **React.js** – UI components and state management
- **TypeScript** – Type safety and improved developer experience
- **Vite** – Fast build and development environment
- **TailwindCSS** – Modern styling with utility classes
- **ReactHooksForm** – Form handling
- **Zod** – Form validation

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v22.13.0 recommended)
- npm or yarn package manager

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/Topsurpass/multistep-interview
   cd multistep-interview
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open the app in your browser at `http://localhost:5173/` (default Vite port).

## Project Structure
```
src/
├── App.css
├── App.tsx
├── assets
│   └── react.svg
├── components
│   ├── @form
│   │   ├── checkbox.tsx
│   │   ├── index.tsx
│   │   ├── select.tsx
│   │   ├── select2.tsx
│   │   ├── text-area.tsx
│   │   └── text-field.tsx
│   ├── confirm-alert.tsx
│   └── ui
│       ├── alert-dialog.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── select.tsx
│       └── textarea.tsx
├── data
│   └── index.tsx
├── index.css
├── lib
│   ├── helpers.ts
│   └── utils.ts
├── main.tsx
├── pages
│   ├── confirmation
│   │   └── index.tsx
│   └── home
│       ├── cargo-information.tsx
│       ├── index.tsx
│       ├── pickup-delivery.tsx
│       ├── pricing-calculator.tsx
│       ├── review-information.tsx
│       ├── shipping-method-pricing.tsx
│       ├── stepper-control.tsx
│       ├── stepper-label.tsx
│       ├── steps.ts
│       └── user-information.tsx
├── schemas
│   └── multiform-schema.tsx
├── types
│   └── cargo-types.ts
└── vite-env.d.ts
```

## Building for Production
To create an optimized production build:
```sh
npm run build
# or
yarn build
```
The output will be in the `dist/` directory.

