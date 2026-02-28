# Cardilla

Cardilla has:

- Frontend: React app (GitHub Pages)
- Backend: Express API in `server/` (Railway)

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

## Deployment (GitHub Pages + Railway)

### 1) Backend on Railway

1. Create Railway project from GitHub repo `deepbodo/cardilla`.
2. Service uses `railway.toml`:
   - Build command: `npm install --prefix server`
   - Start command: `npm --prefix server start`
3. In Railway variables, add:
   - `MONGODB_URI` (or `MONGODB_URL`)
   - `SECRET`
   - `CLIENT_ORIGIN=https://deepbodo.github.io`
4. Deploy and copy backend URL (example: `https://cardilla-production.up.railway.app`).

### 2) Frontend on GitHub Pages

1. In repo settings → Pages, choose **GitHub Actions**.
2. In repo settings → Secrets and variables → Actions → Variables, set:

```env
REACT_APP_API_URL=https://cardilla-production.up.railway.app
```

3. Push to `main`.
4. Workflow `Deploy Frontend to GitHub Pages` publishes the app.

Frontend URL:

`https://deepbodo.github.io/cardilla`

## Verify

- Backend health: `https://cardilla-production.up.railway.app/api/health`
- Frontend: `https://deepbodo.github.io/cardilla`
- Test signup/login and bills.

## Notes

- Frontend API calls use `REACT_APP_API_URL` with a Railway fallback in production.
- Backend health endpoint returns app and DB status.
