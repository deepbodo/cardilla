# Cardilla

Cardilla has:

- Frontend: React app in this repository root
- Backend: Express API in `server/`

## Local setup

1. Install frontend packages

```bash
npm install
```

2. Install backend packages

```bash
cd server
npm install
```

3. Create backend environment variables in `server/.env`

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
SECRET=your_jwt_secret
CLIENT_ORIGIN=http://localhost:3000
```

4. Run backend

```bash
cd server
npm run dev
```

5. Run frontend (from project root)

```bash
npm start
```

## Free deployment (recommended)

## Simple deployment (no Render / no Vercel)

Use:

- Frontend: GitHub Pages (auto deploy from GitHub Actions)
- Backend: Railway (deploy from GitHub)

### 1) Backend on Railway

1. Go to Railway and create a new project from GitHub repo `deepbodo/cardilla`.
2. Set service root to `server`.
3. Start command: `npm start`.
4. Add environment variables:
   - `MONGODB_URI`
   - `SECRET`
   - `CLIENT_ORIGIN` (set after frontend URL is ready)
5. Deploy and copy backend URL (example: `https://cardilla-production.up.railway.app`).

### 2) Frontend on GitHub Pages

1. In GitHub repo settings, enable **Pages** and select **GitHub Actions** as source.
2. In GitHub repo settings, add repository variable:
   - `REACT_APP_API_URL=https://your-railway-url`
3. Push to `main`.
4. Workflow `Deploy Frontend to GitHub Pages` publishes the `build/` output.
5. Frontend URL will be:
   - `https://deepbodo.github.io/cardilla`

### 3) Final connect

1. Copy your GitHub Pages URL.
2. Set Railway environment variable:

```env
CLIENT_ORIGIN=https://deepbodo.github.io
```

3. Redeploy Railway backend.

### 4) Verify

- Backend health check: `https://your-railway-url/api/health`
- Frontend opens at: `https://deepbodo.github.io/cardilla`
- Test signup/login and bills.

### 1) Deploy backend on Render (free tier)

1. Push this repo to GitHub.
2. In Render, create a **Web Service** from your GitHub repo.
   - Render Blueprint file is included: `render.yaml`
3. Configure:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add environment variables:
   - `MONGODB_URI`
   - `SECRET`
   - `CLIENT_ORIGIN` (set this after frontend URL is known, then redeploy)
5. Deploy and copy your backend URL (example: `https://cardilla-api.onrender.com`).

### 2) Deploy frontend on Vercel (free tier)

1. In Vercel, import the same GitHub repo.
   - Vercel config file is included: `vercel.json`
2. Configure:
   - Framework: Create React App
   - Root Directory: `.`
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Add environment variable:
   - `REACT_APP_API_URL=https://your-render-url`
4. Deploy.

### 3) Connect frontend + backend

1. Copy your Vercel frontend URL.
2. In Render, set:

```env
CLIENT_ORIGIN=https://your-vercel-app.vercel.app
```

3. Redeploy backend.

## Notes

- Frontend API requests are now environment-based via `REACT_APP_API_URL`.
- If `REACT_APP_API_URL` is empty, the app uses relative paths for local development.
- Backend health check endpoint: `/api/health`.
