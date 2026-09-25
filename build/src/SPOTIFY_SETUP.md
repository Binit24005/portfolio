# Spotify Integration Setup Guide

Follow these steps to get your real-time "Now Playing" widget working:

### 1. Create a Spotify App
1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
2. Log in and click **Create App**.
3. Name it "Portfolio" and set the **Redirect URI** to `http://localhost:3000`.
4. Copy your **Client ID** and **Client Secret**.

### 2. Get your Refresh Token
1. Open this URL in your browser (replace `YOUR_CLIENT_ID`):
   ```
   https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-currently-playing
   ```
2. Log in and authorize. You will be redirected to a URL like `http://localhost:3000/?code=AQ...`.
3. Copy that **code** from the URL.
4. Run this in your terminal (replace placeholders):
   ```bash
   curl -H "Authorization: Basic $(echo -n YOUR_CLIENT_ID:YOUR_CLIENT_SECRET | base64)" \
   -d grant_type=authorization_code \
   -d code=YOUR_CODE_HERE \
   -d redirect_uri=http://localhost:3000 \
   https://accounts.spotify.com/api/token
   ```
5. You will get a JSON response. Copy the `refresh_token`.

### 3. Add to your .env file
Create a `.env` file in your root directory:
```env
VITE_SPOTIFY_CLIENT_ID=your_id
VITE_SPOTIFY_CLIENT_SECRET=your_secret
VITE_SPOTIFY_REFRESH_TOKEN=your_refresh_token
```@

Restart your dev server, and your portfolio will now show what you are actually playing! 🎵🌑

### 4. Deployment Instructions
When you deploy your site (to Vercel, Netlify, Render, etc.):
1. **Add Environment Variables**: In your hosting dashboard, add your `VITE_SPOTIFY_...` keys just like in your `.env` file.
2. **Security Note**: Vite bundles these variables into the frontend code. For a personal portfolio, this is usually fine, but if you want maximum security, you would move the token exchange logic to a serverless function.
3. **Spotify Dashboard**: You don't need to change anything else once you have the `REFRESH_TOKEN`!
