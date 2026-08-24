# Editing Lance's portfolio

This sample is ready to open in Visual Studio Code.

## The main files

- `app/page.tsx` contains all visible text, experience, projects, skills and links.
- `app/globals.css` contains the colours, spacing, layout and mobile design.
- `app/layout.tsx` contains the browser title and search/social description.
- `public/` is where you can place your résumé, professional photo and other images.

## Update these placeholders first

Search `app/page.tsx` for:

- `your.email@example.com` and replace it with your professional email.
- `https://www.linkedin.com/` and replace it with your complete LinkedIn URL.
- `https://github.com/` and replace it with your GitHub profile URL.
- `Add your photo here` after you decide which professional photo to use.

## Add your résumé

1. Put your PDF in `public/` and name it `Lance-Baysa-Resume.pdf`.
2. In `app/page.tsx`, change the secondary hero button to:

```tsx
<a className="button secondary" href="/Lance-Baysa-Resume.pdf" download>
  Download résumé
</a>
```

## Run it in VS Code

Open the project folder in VS Code, open the integrated terminal, then run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. Press `Ctrl+C` when you want to stop it.

## Before publishing

- Replace every placeholder link.
- Use only project screenshots and descriptions you are permitted to share.
- Do not publish confidential MHI Canada Aerospace or Government of Canada information.
- Check spelling, dates and metrics against your résumé.
- Test the page on a phone and computer.
